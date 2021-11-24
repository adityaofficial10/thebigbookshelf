require('dotenv').config({
    path: 'config/.env'
});
const serverless = require('serverless-http');
const express = require('express');
const cors = require("cors");
const DB = require('./config/database')

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const buyers = require('./routes/buyers');
const sellers = require('./routes/sellers');
const auth = require('./routes/auth');
const search = require('./routes/search');
const profile = require('./routes/profile');

app.use('/buyers', buyers);
app.use('/sellers', sellers);
app.use('/auth',auth);
app.use('/search',search);
app.use('/profile',profile);

app.get('/', function(req, res, next) {
    res.send("Big Bookshelf API")
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, async function() {
    await DB();
    console.log(`Server running on port ${PORT}...`);
});

module.exports.handler = serverless(app);