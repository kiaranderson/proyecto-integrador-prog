var express = require('express');
var router = express.Router();

let controller = require('../controllers/search-resultsController');

router.get('/', controller.searchResults);

module.exports = router;
