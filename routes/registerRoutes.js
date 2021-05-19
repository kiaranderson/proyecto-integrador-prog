var express = require('express');
var router = express.Router();

let controller = require('../controllers/registerController');

router.get('/', controller.registerGet);

router.post('/', controller.registerPost);

module.exports = router;
