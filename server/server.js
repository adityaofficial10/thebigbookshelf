require('dotenv').config({
    path: 'config/.env'
});
const express = require('express');
const cors = require("cors");
const DB = require('./config/database')

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const buyers = require('./routes/buyers');
const sellers = require('./routes/sellers');

app.use('/buyers', buyers);
app.use('/sellers', sellers);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async function() {
    await DB();
    console.log(`Server running on port ${PORT}`);
});