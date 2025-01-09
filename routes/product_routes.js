const express = require('express');
const {insertSampleProducts, getProductsStats, getProductsAnalysis} = require('../controller/product_controller')
const router = express.Router();


router.post('/add', insertSampleProducts);
router.get('/stats', getProductsStats);
router.get('/analysis', getProductsAnalysis);
router.get('/author', getProductsAnalysis);
router.get('/book', getProductsAnalysis);

module.exports = router;