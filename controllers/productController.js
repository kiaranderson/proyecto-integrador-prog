const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    product: (req, res) => { 
        db.Product.findByPk (req.params.id)

        .then (result => {
            res.render('product', {
                product: result,
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
            user_id: req.session.userid
        })
        .then (result => {
            return res.redirect("/product/id/" + result.id);
        });
    },

    productEdit:  function(req,res) {
        db.Product.findByPk(req.params.id)
        .then (result => {
            res.render("product-edit",{product: result})
        })
        
    },

    comentario: (req, res) => {
        db.Comment.create({
            commentary: req.body.comentario,
            user_id: req.session.userid,
            product_id: req.params.id
        })
        .then (resultado => {
            return res.redirect('/id/' + resultado.product_id)
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