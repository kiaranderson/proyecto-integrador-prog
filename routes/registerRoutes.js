var express = require('express');
var router = express.Router();

let controller = require('../controllers/registerController');

router.get('/', controller.register);

module.exports = router;
