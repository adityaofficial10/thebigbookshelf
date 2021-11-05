const express = require('express');
const router = express.Router();


const searchController = require('../controllers/search');

router.get('/getAll', searchController.findAll);
router.get('/getAll/:name', searchController.findQuery);

module.exports = router;