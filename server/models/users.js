const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String,
    bio : String,
    profilePic : String,
    isBuyer: Boolean,
    stripeId: String,
    phone: String
});

module.exports = mongoose.model('User', userSchema);
