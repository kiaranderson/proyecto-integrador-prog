var express = require('express');
var router = express.Router();

let controller = require('../controllers/profile-editController');

router.get('/', controller.profileEdit);

module.exports = router;