var express = require('express');
var router = express.Router();

let controlador = require('../controllers/indexController');

/* GET home page. */
router.get('/', controlador.index);
router.get('/login', controlador.login);
router.get('/product', controlador.product);
router.get('/profile-edit', controlador.profileEdit);
router.get('/profile', controlador.profile);
router.get('/register', controlador.register);
router.get('/search-results', controlador.searchResults);

module.exports = router;
