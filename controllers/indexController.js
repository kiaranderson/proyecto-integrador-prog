let novedades = require("../data/productData");
let controller = {
    index: (req, res) => {
        res.render('index', {title: 'Inicio', novedades: novedades})
    },
}

module.exports = controller;