var express = require('express');
var router = express.Router();

let controller = require('../controllers/profileController');

router.get('/id/:id', controller.profile);
router.get('/edit', controller.profileEdit);

module.exports = router;
