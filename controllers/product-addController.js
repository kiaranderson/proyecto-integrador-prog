let controller = {
    productAdd: (req, res) => {
        res.render('product-add', {title: 'Agregar Producto'})
    },
}

module.exports = controller;