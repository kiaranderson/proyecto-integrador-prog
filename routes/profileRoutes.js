var express = require('express');
var router = express.Router();

let controller = require('../controllers/profileController');

router.get('/', controller.profile);
router.get('/edit', controller.profileEdit);

module.exports = router;
