const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    product: (req, res) => { 
        db.Product.findByPk (req.params.id)

        .then (result => {

            db.User.findByPk(result.user_id)
            .then (resultados => {
                res.render('product', {
                    product: result,
                    resultados: resultados
                })
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
        if (req.session.username) { 
        db.Comment.create({
            commentary: req.body.comentario,
            user_id: req.session.userid,
        })
        .then (resultado => {
            return res.redirect("/")
        })
        } else {
            res.redirect("/user/login")
        }
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