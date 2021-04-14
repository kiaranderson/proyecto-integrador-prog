let controller = {
    product: (req, res) => {
        res.render('product', {title: 'Producto'})
    },
}

module.exports = controller;