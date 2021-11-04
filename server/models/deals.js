const mongoose = require('mongoose');

const dealSchema = mongoose.Schema({
    quantity: Number,
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
    sold_at: String
});

module.exports = mongoose.model('Deals', dealSchema);
