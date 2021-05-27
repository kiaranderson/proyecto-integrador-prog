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
    },

//     edit: function(req,res){
                
//         DB.product.findOne({
//             where: {
//             id: req.params.Id
//             }
//         })
//         .then(function(Product){
//             res.render('editProduct',{Product : Product, idproduct:req.body.idproduct})
//         })  
        
//     },



//  confirmEdit:function(req,res){
//        const idproduct = req.body.product_id      
//        const idproduct = req.params.Id      
//        let username = req.body.username;
//        let password = req.body.password;
       

        // console.log("este es el id:"+ idproduct)
        // console.log(req.query);
        
        // res.send('/llgó a confirm edit')              






}

    


module.exports = controller;