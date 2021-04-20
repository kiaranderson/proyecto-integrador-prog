let controller = {
    index: (req, res) => {
        let productos = require('../data/productData');
        res.render('index', {title: '2nite', novedades: productos.novedades , comentados: productos.comentados})
    },
}

module.exports = controller;