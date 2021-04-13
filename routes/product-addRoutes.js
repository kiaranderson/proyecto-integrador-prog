var express = require('express');
var router = express.Router();

let controller = require('../controllers/product-addController');

router.get('/', controller.productAdd);

module.exports = router;