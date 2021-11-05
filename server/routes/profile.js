const express = require('express');
const router = express.Router();

const Auth = require('../middleware/auth');
const profileController = require('../controllers/profile');

router.post('/update',Auth.auth, profileController.updation);


module.exports = router;