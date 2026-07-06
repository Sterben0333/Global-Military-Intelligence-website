const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getDb } = require('../database/db');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// ============================================
// USER REGISTRATION
// ============================================
router.post('/user/register', (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validation
        if (!username || !email || !password) {
            return res.status(400).json({ error: 'All fields are required.' });
        }
        if (username.length < 3) {
            return res.status(400).json({ error: 'Username must be at least 3 characters.' });
        }
        if (password.length < 6) {
            return res.status(400).json({ error: 'Password must be at least 6 characters.' });
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ error: 'Invalid email format.' });
        }

        const db = getDb();

        // Check if username or email already exists
        const existingUser = db.prepare('SELECT id FROM users WHERE username = ? OR email = ?').get(username, email);
        if (existingUser) {
            return res.status(409).json({ error: 'Username or email already taken.' });
        }

        // Hash password and create user
        const hashedPassword = bcrypt.hashSync(password, 12);
        const result = db.prepare(
            'INSERT INTO users (username, email, password, displayName) VALUES (?, ?, ?, ?)'
        ).run(username, email, hashedPassword, username);

        // Generate JWT
        const token = jwt.sign(
            { id: result.lastInsertRowid, username, role: 'user' },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        console.log(`✅ New user registered: ${username}`);
        res.status(201).json({
            message: 'Account created successfully.',
            token,
            user: { id: result.lastInsertRowid, username, email, role: 'user', displayName: username }
        });

    } catch (err) {
        console.error('Registration error:', err);
        res.status(500).json({ error: 'Server error. Please try again.' });
    }
});

// ============================================
// USER LOGIN
// ============================================
router.post('/user/login', (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required.' });
        }

        const db = getDb();
        const user = db.prepare('SELECT * FROM users WHERE username = ? OR email = ?').get(username, username);

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }

        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials.' });
        }

        // Update last login
        db.prepare('UPDATE users SET lastLogin = CURRENT_TIMESTAMP WHERE id = ?').run(user.id);

        // Generate JWT
        const token = jwt.sign(
            { id: user.id, username: user.username, role: 'user' },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        console.log(`✅ User logged in: ${user.username}`);
        res.json({
            message: 'Login successful.',
            token,
            user: { id: user.id, username: user.username, email: user.email, role: 'user', displayName: user.displayName }
        });

    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: 'Server error. Please try again.' });
    }
});

// ============================================
// ADMIN LOGIN
// ============================================
router.post('/admin/login', (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: 'Username and password are required.' });
        }

        const db = getDb();
        const admin = db.prepare('SELECT * FROM admins WHERE username = ? OR email = ?').get(username, username);

        if (!admin) {
            return res.status(401).json({ error: 'Invalid admin credentials.' });
        }

        const validPassword = bcrypt.compareSync(password, admin.password);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid admin credentials.' });
        }

        // Update last login
        db.prepare('UPDATE admins SET lastLogin = CURRENT_TIMESTAMP WHERE id = ?').run(admin.id);

        // Generate JWT
        const token = jwt.sign(
            { id: admin.id, username: admin.username, role: 'admin' },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        console.log(`🛡️ Admin logged in: ${admin.username}`);
        res.json({
            message: 'Admin login successful.',
            token,
            user: { id: admin.id, username: admin.username, email: admin.email, role: 'admin', displayName: admin.displayName }
        });

    } catch (err) {
        console.error('Admin login error:', err);
        res.status(500).json({ error: 'Server error. Please try again.' });
    }
});

// ============================================
// GET PROFILE (requires auth)
// ============================================
router.get('/profile', authMiddleware, (req, res) => {
    try {
        const db = getDb();
        const table = req.user.role === 'admin' ? 'admins' : 'users';
        const user = db.prepare(`SELECT id, username, email, displayName, createdAt, lastLogin FROM ${table} WHERE id = ?`).get(req.user.id);

        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        res.json({ ...user, role: req.user.role });

    } catch (err) {
        console.error('Profile error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

// ============================================
// UPDATE PROFILE (requires auth)
// ============================================
router.put('/profile', authMiddleware, (req, res) => {
    try {
        const { displayName } = req.body;
        const db = getDb();
        const table = req.user.role === 'admin' ? 'admins' : 'users';

        if (displayName !== undefined) {
            db.prepare(`UPDATE ${table} SET displayName = ? WHERE id = ?`).run(displayName, req.user.id);
        }

        const user = db.prepare(`SELECT id, username, email, displayName, createdAt, lastLogin FROM ${table} WHERE id = ?`).get(req.user.id);

        res.json({ ...user, role: req.user.role, message: 'Profile updated.' });

    } catch (err) {
        console.error('Update profile error:', err);
        res.status(500).json({ error: 'Server error.' });
    }
});

module.exports = router;
