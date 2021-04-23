var express = require('express');
var router = express.Router();

let controller = require('../controllers/productController');

router.get('/', controller.product); //product/

router.get('/add', controller.productAdd); //product/add

module.exports = router;
