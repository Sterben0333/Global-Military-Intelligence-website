const mongoose = require('mongoose');

const watchlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    targetType: {
        type: String,
        required: true,
        enum: ['nation', 'conflict']
    },
    targetId: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

// Prevent duplicate follows — one user can follow a target only once
watchlistSchema.index({ userId: 1, targetType: 1, targetId: 1 }, { unique: true });

module.exports = mongoose.model('Watchlist', watchlistSchema);
