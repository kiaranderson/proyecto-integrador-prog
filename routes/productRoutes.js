var express = require('express');
var router = express.Router();

let controller = require('../controllers/productController');

const multer = require('multer')
const path = require('path')



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../public/images/products/')) //donde se guarda la foto
    },
    filename: function (req, file, cb) { //el nombre con el que se guarda la foto, y date.now la fecha en la que se sube
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //extension del archivo (jpg,png,etc)
    }
  })

  var upload = multer({ storage: storage })

router.get('/id/:id', controller.product);

router.get('/add', controller.productAdd); 

router.get('/edit/:id', controller.productEdit); 

router.post('/add', upload.single('image'), controller.productCreate); 

router.post('/edit', controller.edit); 

router.post('/borrar', controller.borrar);

router.post('/comentario', controller.comentario);

module.exports = router;

