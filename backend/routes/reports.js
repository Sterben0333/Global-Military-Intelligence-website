const express = require('express');
const Report = require('../database/models/Report');
const User = require('../database/models/User');
const Admin = require('../database/models/Admin');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// ============================================
// PUBLIC REPORTS (no auth required)
// ============================================

// List all public reports (paginated, searchable)
router.get('/public', async (req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 20));
        const skip = (page - 1) * limit;
        const search = req.query.search || '';
        const sort = req.query.sort || 'newest'; // newest, oldest

        const query = { isPublic: true };
        if (search.trim()) {
            query.title = { $regex: search.trim(), $options: 'i' };
        }

        const sortObj = sort === 'oldest' ? { updatedAt: 1 } : { updatedAt: -1 };

        const [reports, total] = await Promise.all([
            Report.find(query)
                .select('title content userId createdAt updatedAt')
                .sort(sortObj)
                .skip(skip)
                .limit(limit)
                .lean(),
            Report.countDocuments(query)
        ]);

        // Resolve author names from userId
        const userIds = [...new Set(reports.map(r => r.userId.toString()))];
        const [users, admins] = await Promise.all([
            User.find({ _id: { $in: userIds } }).select('username displayName').lean(),
            Admin.find({ _id: { $in: userIds } }).select('username displayName').lean()
        ]);
        const authorMap = {};
        [...users, ...admins].forEach(u => {
            authorMap[u._id.toString()] = u.displayName || u.username;
        });

        const enriched = reports.map(r => ({
            _id: r._id,
            title: r.title,
            excerpt: (r.content || '').replace(/[#*_`>\-\[\]()!]/g, '').substring(0, 200).trim(),
            author: authorMap[r.userId.toString()] || 'Unknown Analyst',
            createdAt: r.createdAt,
            updatedAt: r.updatedAt
        }));

        res.json({
            reports: enriched,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });
    } catch (err) {
        console.error('Public reports list error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// Read a single public report (full content)
router.get('/public/:id', async (req, res) => {
    try {
        const report = await Report.findOne({
            _id: req.params.id,
            isPublic: true
        }).lean();

        if (!report) {
            return res.status(404).json({ error: 'Report not found or not public.' });
        }

        // Resolve author
        let author = 'Unknown Analyst';
        const user = await User.findById(report.userId).select('username displayName').lean();
        if (user) {
            author = user.displayName || user.username;
        } else {
            const admin = await Admin.findById(report.userId).select('username displayName').lean();
            if (admin) author = admin.displayName || admin.username;
        }

        res.json({
            report: {
                _id: report._id,
                title: report.title,
                content: report.content,
                widgets: report.widgets,
                author,
                createdAt: report.createdAt,
                updatedAt: report.updatedAt
            }
        });
    } catch (err) {
        console.error('Public report fetch error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// All remaining report routes require authentication
router.use(authMiddleware);

// ============================================
// LIST USER'S REPORTS
// ============================================
router.get('/', async (req, res) => {
    try {
        const reports = await Report.find({ userId: req.user.id })
            .select('title isPublic createdAt updatedAt')
            .sort({ updatedAt: -1 });

        res.json({ reports });
    } catch (err) {
        console.error('Reports list error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// GET SINGLE REPORT
// ============================================
router.get('/:id', async (req, res) => {
    try {
        const report = await Report.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!report) {
            return res.status(404).json({ error: 'Report not found.' });
        }

        res.json({ report });
    } catch (err) {
        console.error('Report fetch error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// CREATE NEW REPORT
// ============================================
router.post('/', async (req, res) => {
    try {
        const { title, content, widgets, isPublic } = req.body;

        if (!title || !title.trim()) {
            return res.status(400).json({ error: 'Title is required.' });
        }

        const report = await Report.create({
            userId: req.user.id,
            title: title.trim(),
            content: content || '',
            widgets: widgets || [],
            isPublic: !!isPublic
        });

        console.log(`📝 User ${req.user.username} created report: "${report.title}"`);
        res.status(201).json({ message: 'Report created.', report });
    } catch (err) {
        console.error('Report create error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// UPDATE REPORT
// ============================================
router.put('/:id', async (req, res) => {
    try {
        const report = await Report.findOne({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!report) {
            return res.status(404).json({ error: 'Report not found.' });
        }

        const { title, content, widgets, isPublic } = req.body;

        if (title !== undefined) report.title = title.trim();
        if (content !== undefined) report.content = content;
        if (widgets !== undefined) report.widgets = widgets;
        if (isPublic !== undefined) report.isPublic = !!isPublic;

        await report.save();

        console.log(`📝 User ${req.user.username} updated report: "${report.title}"`);
        res.json({ message: 'Report updated.', report });
    } catch (err) {
        console.error('Report update error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// DELETE REPORT
// ============================================
router.delete('/:id', async (req, res) => {
    try {
        const result = await Report.findOneAndDelete({
            _id: req.params.id,
            userId: req.user.id
        });

        if (!result) {
            return res.status(404).json({ error: 'Report not found.' });
        }

        console.log(`🗑️ User ${req.user.username} deleted report: "${result.title}"`);
        res.json({ message: 'Report deleted.' });
    } catch (err) {
        console.error('Report delete error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
