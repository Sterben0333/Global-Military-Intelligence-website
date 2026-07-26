const express = require('express');
const User = require('../database/models/User');
const Admin = require('../database/models/Admin');
const Report = require('../database/models/Report');
const Watchlist = require('../database/models/Watchlist');
const { authMiddleware, adminOnly } = require('../middleware/auth');

const router = express.Router();

// All admin routes require authentication + admin role
router.use(authMiddleware);
router.use(adminOnly);

// ============================================
// DASHBOARD STATISTICS
// ============================================
router.get('/stats', async (req, res) => {
    try {
        const [
            totalUsers,
            totalAdmins,
            totalReports,
            publicReports,
            totalWatchlistItems
        ] = await Promise.all([
            User.countDocuments(),
            Admin.countDocuments(),
            Report.countDocuments(),
            Report.countDocuments({ isPublic: true }),
            Watchlist.countDocuments()
        ]);

        // Recent activity — last 7 days
        const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        const [newUsersThisWeek, newReportsThisWeek] = await Promise.all([
            User.countDocuments({ createdAt: { $gte: weekAgo } }),
            Report.countDocuments({ createdAt: { $gte: weekAgo } })
        ]);

        res.json({
            totalUsers,
            totalAdmins,
            totalReports,
            publicReports,
            privateReports: totalReports - publicReports,
            totalWatchlistItems,
            newUsersThisWeek,
            newReportsThisWeek
        });
    } catch (err) {
        console.error('Admin stats error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// LIST ALL USERS (paginated, searchable)
// ============================================
router.get('/users', async (req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 20));
        const skip = (page - 1) * limit;
        const search = req.query.search || '';
        const sort = req.query.sort || 'newest'; // newest, oldest, username

        const query = {};
        if (search.trim()) {
            query.$or = [
                { username: { $regex: search.trim(), $options: 'i' } },
                { email: { $regex: search.trim(), $options: 'i' } },
                { displayName: { $regex: search.trim(), $options: 'i' } }
            ];
        }

        let sortObj;
        switch (sort) {
            case 'oldest': sortObj = { createdAt: 1 }; break;
            case 'username': sortObj = { username: 1 }; break;
            default: sortObj = { createdAt: -1 };
        }

        const [users, total] = await Promise.all([
            User.find(query)
                .select('username email displayName createdAt lastLogin')
                .sort(sortObj)
                .skip(skip)
                .limit(limit)
                .lean(),
            User.countDocuments(query)
        ]);

        // Enrich with report counts
        const userIds = users.map(u => u._id);
        const reportCounts = await Report.aggregate([
            { $match: { userId: { $in: userIds } } },
            { $group: { _id: '$userId', count: { $sum: 1 } } }
        ]);
        const reportMap = {};
        reportCounts.forEach(r => { reportMap[r._id.toString()] = r.count; });

        const enriched = users.map(u => ({
            ...u,
            reportCount: reportMap[u._id.toString()] || 0
        }));

        res.json({
            users: enriched,
            total,
            page,
            totalPages: Math.ceil(total / limit)
        });
    } catch (err) {
        console.error('Admin users list error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// GET SINGLE USER DETAIL
// ============================================
router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .select('username email displayName createdAt lastLogin')
            .lean();

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        const [reportCount, watchlistCount] = await Promise.all([
            Report.countDocuments({ userId: user._id }),
            Watchlist.countDocuments({ userId: user._id })
        ]);

        res.json({
            ...user,
            reportCount,
            watchlistCount
        });
    } catch (err) {
        console.error('Admin user detail error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// DELETE USER (cascade: reports + watchlist)
// ============================================
router.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Cascade delete
        const [deletedReports, deletedWatchlist] = await Promise.all([
            Report.deleteMany({ userId: user._id }),
            Watchlist.deleteMany({ userId: user._id })
        ]);

        await User.findByIdAndDelete(user._id);

        console.log(`🛡️ Admin ${req.user.username} deleted user "${user.username}" (reports: ${deletedReports.deletedCount}, watchlist: ${deletedWatchlist.deletedCount})`);

        res.json({
            message: `User "${user.username}" deleted successfully.`,
            deletedReports: deletedReports.deletedCount,
            deletedWatchlist: deletedWatchlist.deletedCount
        });
    } catch (err) {
        console.error('Admin user delete error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// LIST ALL REPORTS (paginated, searchable)
// ============================================
router.get('/reports', async (req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 20));
        const skip = (page - 1) * limit;
        const search = req.query.search || '';
        const filter = req.query.filter || 'all'; // all, public, private

        const query = {};
        if (search.trim()) {
            query.title = { $regex: search.trim(), $options: 'i' };
        }
        if (filter === 'public') query.isPublic = true;
        if (filter === 'private') query.isPublic = false;

        const [reports, total] = await Promise.all([
            Report.find(query)
                .select('title content userId isPublic createdAt updatedAt')
                .sort({ updatedAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean(),
            Report.countDocuments(query)
        ]);

        // Resolve author names
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
            excerpt: (r.content || '').replace(/[#*_`>\-\[\]()!]/g, '').substring(0, 120).trim(),
            author: authorMap[r.userId.toString()] || 'Unknown',
            authorId: r.userId,
            isPublic: r.isPublic,
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
        console.error('Admin reports list error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// TOGGLE REPORT VISIBILITY
// ============================================
router.put('/reports/:id/visibility', async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (!report) {
            return res.status(404).json({ error: 'Report not found.' });
        }

        report.isPublic = !report.isPublic;
        await report.save();

        console.log(`🛡️ Admin ${req.user.username} toggled report "${report.title}" to ${report.isPublic ? 'public' : 'private'}`);

        res.json({
            message: `Report set to ${report.isPublic ? 'public' : 'private'}.`,
            isPublic: report.isPublic
        });
    } catch (err) {
        console.error('Admin report visibility error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// DELETE ANY REPORT
// ============================================
router.delete('/reports/:id', async (req, res) => {
    try {
        const report = await Report.findByIdAndDelete(req.params.id);
        if (!report) {
            return res.status(404).json({ error: 'Report not found.' });
        }

        console.log(`🛡️ Admin ${req.user.username} deleted report "${report.title}"`);
        res.json({ message: `Report "${report.title}" deleted.` });
    } catch (err) {
        console.error('Admin report delete error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
