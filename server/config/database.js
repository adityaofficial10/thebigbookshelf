const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    await mongoose.connect(process.env.URI,{ useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to database');
}

module.exports = connectDB;