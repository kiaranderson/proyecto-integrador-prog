let controller ={
    searchResults: (req, res) => {
        let productos = require('../data/productData');
        res.render('search-results', {title: 'Resultados de Búsqueda', productos: productos.novedades})
    },
}

module.exports = controller;