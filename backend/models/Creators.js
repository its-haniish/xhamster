const mongoose = require('mongoose');

const creatorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Creators = mongoose.model('creators', creatorSchema);

module.exports = Creators;