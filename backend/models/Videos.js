const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Videos = mongoose.model('videos', videoSchema);

module.exports = Videos;