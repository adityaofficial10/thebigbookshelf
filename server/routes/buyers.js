const express = require('express');
const router = express.Router();

const Auth = require('../middleware/auth');
const buyerController = require('../controllers/buyers');

router.post('/purchase', Auth.auth, buyerController.purchaseBook);
router.post('/feedback', Auth.auth, buyerController.collectFeedback);
router.post('/getItems', buyerController.getItems);

module.exports = router;