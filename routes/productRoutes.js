var express = require('express');
var router = express.Router();

let controller = require('../controllers/productController');

router.get('/id/:id', controller.product);

router.get('/add', controller.productAdd); 

router.get('/edit/:id', controller.productEdit); 

router.post('/add', controller.productCreate); 

router.post('/edit', controller.edit); 



module.exports = router;

