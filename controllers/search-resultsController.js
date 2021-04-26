let controller ={
    searchResults: (req, res) => {
        let productos = require('../data/productData');
        res.render('search-results', {
            productos: productos.novedades
        })
    },
}

module.exports = controller;