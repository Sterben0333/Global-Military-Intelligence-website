const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 200
    },
    content: {
        type: String,
        default: ''
    },
    widgets: [{
        type: {
            type: String,
            enum: ['comparison', 'pie-fleet', 'force-table']
        },
        config: {
            type: mongoose.Schema.Types.Mixed,
            default: {}
        }
    }],
    isPublic: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

// Fast listing for user dashboard — newest first
reportSchema.index({ userId: 1, updatedAt: -1 });

module.exports = mongoose.model('Report', reportSchema);
