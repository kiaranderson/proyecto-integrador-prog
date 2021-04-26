let controller = {
    index: (req, res) => {
        let productos = require('../data/productData');
        res.render('index', {
            novedades: productos.novedades, 
            comentados: productos.comentados, 
            img: productos.img
        })
    },
}

module.exports = controller;