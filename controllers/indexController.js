let controller = {
    index: (req, res) => {
        let productos = require('../data/productData');
        res.render('index', {title: 'Inicio', novedades: productos.novedades , comentados: productos.comentados})
    },
}

module.exports = controller;