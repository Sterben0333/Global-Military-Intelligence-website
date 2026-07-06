require('dotenv').config();

const express = require('express');
const path = require('path');
const { getDb, seedAdmin } = require('./database/db');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================
// MIDDLEWARE
// ============================================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ============================================
// STATIC FILES — serve the existing frontend
// ============================================
app.use(express.static(path.join(__dirname, '../frontend'), {
    extensions: ['html'],
    index: 'index.html'
}));

// ============================================
// API ROUTES
// ============================================
app.use('/api/auth', authRoutes);

// ============================================
// CATCH-ALL — serve index.html for any non-API route
// ============================================
app.get('*', (req, res) => {
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, '../frontend/index.html'));
    }
});

// ============================================
// START SERVER
// ============================================
app.listen(PORT, () => {
    // Initialize database and seed admin
    getDb();
    seedAdmin();

    console.log('');
    console.log('╔════════════════════════════════════════════╗');
    console.log('║   GLOBAL MILITARY INTELLIGENCE SERVER      ║');
    console.log('╠════════════════════════════════════════════╣');
    console.log(`║   🌐 Server:  http://localhost:${PORT}         ║`);
    console.log('║   🗄️  Database: SQLite (database.db)       ║');
    console.log('║   🛡️  Admin:   Pre-seeded from .env        ║');
    console.log('╚════════════════════════════════════════════╝');
    console.log('');
});
