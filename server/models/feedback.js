const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    item: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'items'
    },
    seller: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    buyer: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    content: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
