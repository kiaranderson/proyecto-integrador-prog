const db = require('../database/models');
const Op = db.Sequelize.Op;
const data = require('../data/productData')

let controller = {
    product: (req, res) => { 
        db.Product.findByPk (req.params.id)

        .then (result => {
            res.render('product', {
                product: result,
                comentarios: data.producto.comentarios
            })
        })
        
    },

    productAdd: (req, res) => {
        res.render('product-add', {})
    },

    productCreate: (req, res) => {
        db.Product.create ({
            product_name: req.body.title,
            description: req.body.description,
            image_url: req.body.myfile
        })
        

        .then (result => {
            return res.redirect("/product/id/" + result.id);
        });
    },

    productEdit:  function(req,res) {
        db.Product.findByPk(req.params.id)
        .then (result => {
            res.render("product-edit",{ product: result})
        })
        
    },

    edit: function(req,res){     
        db.Product.update({
            product_name: req.body.title,
            description: req.body.description,
            image_url: req.body.myfile 
        },
        {
            where: {
                id: req.body.id
            }
        })
        .then(function(){
            res.redirect('/')
        })  
        
    },

    borrar: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.body.id
            }
        }) .then(() => {
                res.redirect('/');
        });
    },



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