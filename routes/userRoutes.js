var express = require('express');
var router = express.Router();

let controller = require('../controllers/userController');

const multer= require('multer')
const path= require('path')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/users')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage
});


router.get('/login', controller.loginGet);
router.post('/login', controller.login);

router.get('/register', controller.registerGet);
router.post('/register', upload.single('profilePic'), controller.registered);


router.get('/id/:id', controller.profile);
router.get('/edit/:id', controller.profileEdit);
router.post('/borrar', controller.borrarPerfil);

router.get('/logout', controller.logout);

module.exports = router;