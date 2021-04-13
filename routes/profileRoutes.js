var express = require('express');
var router = express.Router();

let controller = require('../controllers/profileController');

router.get('/', controller.profile);

module.exports = router;
