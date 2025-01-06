const express = require('express');
const {insertSampleProducts} = require('../controller/product_controller')
const router = express.Router();


router.post('/add', insertSampleProducts);

module.exports = router