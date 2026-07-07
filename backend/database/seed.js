const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

async function seedAdmin() {
    try {
        const existing = await Admin.findOne({ username: process.env.ADMIN_USERNAME });
        if (!existing) {
            const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 12);
            await Admin.create({
                username: process.env.ADMIN_USERNAME,
                email: process.env.ADMIN_EMAIL,
                password: hashedPassword,
                displayName: 'Administrator'
            });
            console.log('🛡️  Admin account created successfully');
        } else {
            console.log('🛡️  Admin account already exists');
        }
    } catch (err) {
        console.error('🔴 Admin seed error:', err.message);
    }
}

module.exports = { seedAdmin };
