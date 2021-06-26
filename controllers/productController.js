const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    product: (req, res) => { 
        db.Product.findByPk (req.params.id)

        .then (result => {
            
            db.User.findByPk(result.user_id)
            .then (resultados => {
                res.render('product', {
                    resultados: resultados,
                    product: result
                })
                console.log(resultados.username)
            })
            db.Comment.findAll(result.id == product_id)
            .then (comentarios => {
                res.render('product', {
                    comentario: comentarios,
                })
                console.log(comentarios)
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
        })
        .then (resultado => {
            return res.redirect("/")
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
}

    


module.exports = controller;