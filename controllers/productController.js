let controller = {
    product: (req, res) => {
        let productos = require('../data/productData');
        res.render('product', {title: 'Producto', name: productos.producto.name, descripcion: productos.producto.descripcion, comentarios: productos.producto.comentarios, usuario: productos.producto.comentarios.username , comentario: productos.producto.comentarios.comentario})
    },

        productAdd: (req, res) => {
            res.render('product-add', {title: 'Agregar Producto'})
        }
    }
    


module.exports = controller;