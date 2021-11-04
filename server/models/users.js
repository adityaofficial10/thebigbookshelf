const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    bio : String,
    profilePic : String,
    buyer: Boolean,
    stripeId: String,
});

module.exports = mongoose.model('User', userSchema);
