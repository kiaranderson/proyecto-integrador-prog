const db = require('../database/models');
const Op = db.Sequelize.Op;


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
    },

    productCreate: (req, res) => {
        db.Product.create ({
            product_name: req.body.title,
            description: req.body.description,
            image_url: req.body.myfile
        })

        .then (result => {
            return res.redirect("/product")
        })
    }


}
    


module.exports = controller;