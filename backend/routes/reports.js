const express = require('express');
const Report = require('../database/models/Report');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// All report routes require authentication
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
