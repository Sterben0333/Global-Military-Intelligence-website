const Database = require('better-sqlite3');
const path = require('path');
const bcrypt = require('bcryptjs');

const DB_PATH = path.join(__dirname, '..', 'database.db');

let db;

function getDb() {
    if (!db) {
        db = new Database(DB_PATH);
        db.pragma('journal_mode = WAL');
        db.pragma('foreign_keys = ON');
        initTables();
    }
    return db;
}

function initTables() {
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            displayName TEXT DEFAULT '',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            lastLogin DATETIME
        );

        CREATE TABLE IF NOT EXISTS admins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            displayName TEXT DEFAULT '',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            lastLogin DATETIME
        );
    `);
}

function seedAdmin() {
    const existing = getDb().prepare('SELECT id FROM admins WHERE username = ?').get(process.env.ADMIN_USERNAME);
    if (!existing) {
        const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 12);
        getDb().prepare(
            'INSERT INTO admins (username, email, password, displayName) VALUES (?, ?, ?, ?)'
        ).run(
            process.env.ADMIN_USERNAME,
            process.env.ADMIN_EMAIL,
            hashedPassword,
            'Administrator'
        );
        console.log('🛡️  Admin account created successfully');
    } else {
        console.log('🛡️  Admin account already exists');
    }
}

module.exports = { getDb, seedAdmin };
