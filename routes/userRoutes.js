var express = require('express');
var router = express.Router();

let controller = require('../controllers/userController');

router.post('/login', controller.login);
router.get('/register', controller.registerGet);
router.post('/register',controller.registered);
router.get('/id/:id', controller.profile);
router.get('/edit', controller.profileEdit);

module.exports = router;