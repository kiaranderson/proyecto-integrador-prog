let controller = {
    productAdd: (req, res) => {
        res.render('product-add', {title: 'product add'})
    },
}

module.exports = controller;