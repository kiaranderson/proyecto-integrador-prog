var express = require('express');
var router = express.Router();

let controller = require('../controllers/productController');

router.get('/', controller.product);

router.get('/add', controller.productAdd); 

module.exports = router;
