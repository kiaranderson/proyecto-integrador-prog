let controller = {
    product: (req, res) => {
        let productos = require('../data/productData');
        res.render('product', {
            name: productos.producto.name, 
            descripcion: productos.producto.descripcion, 
            comentarios: productos.producto.comentarios, 
            usuario: productos.producto.comentarios.username, 
            comentario: productos.producto.comentarios.comentario, 
            img: productos.producto.img
        })
    },

    productAdd: (req, res) => {
        res.render('product-add', {
            user: require('../data/userData')})
    }
}
    


module.exports = controller;