const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name : String,
    description : String,
    quantity: Number,
    price : String,
    seller: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    used: Boolean
});

module.exports = mongoose.model('Item', itemSchema);
