const express = require('express');
const router = express.Router();

const Auth = require('../middleware/auth');
const sellerController = require('../controllers/sellers');

router.post('/add', Auth.auth, sellerController.addBook);

module.exports = router;