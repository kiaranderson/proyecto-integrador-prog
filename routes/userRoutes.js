var express = require('express');
var router = express.Router();

let controller = require('../controllers/userController');

router.get('/login', controller.loginGet);
router.post('/login', controller.login);

router.get('/register', controller.registerGet);
router.post('/register',controller.registered);

router.get('/id/:id', controller.profile);
router.get('/edit/:id', controller.profileEdit);
router.post('/borrar', controller.borrarPerfil);

router.get('/logout', controller.logout);

module.exports = router;