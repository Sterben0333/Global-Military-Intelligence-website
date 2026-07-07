require('dotenv').config();

const express = require('express');
const path = require('path');
const { connectDB } = require('./database/connection');
const { seedAdmin } = require('./database/seed');
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
async function startServer() {
    // Connect to MongoDB Atlas
    await connectDB();

    // Seed admin account
    await seedAdmin();

    app.listen(PORT, () => {
        console.log('');
        console.log('╔════════════════════════════════════════════╗');
        console.log('║   GLOBAL MILITARY INTELLIGENCE SERVER      ║');
        console.log('╠════════════════════════════════════════════╣');
        console.log(`║   🌐 Server:  http://localhost:${PORT}         ║`);
        console.log('║   🍃 Database: MongoDB Atlas               ║');
        console.log('║   🛡️  Admin:   Pre-seeded from .env        ║');
        console.log('╚════════════════════════════════════════════╝');
        console.log('');
    });
}

startServer().catch(err => {
    console.error('🔴 Failed to start server:', err.message);
    process.exit(1);
});
