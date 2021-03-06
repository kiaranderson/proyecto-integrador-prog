const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    product: (req, res) => { 
        const filtro = {
            include: [{
                association: 'Comentarios', include: 'comentarios'
            }, {
                association: 'Usuario'
            }],
            order: [
                ["Comentarios", "createdAt", "DESC"]
            ]
        }
        db.Product.findByPk (req.params.id, filtro)
        .then (result => {
          res.render('product', {
                    product: result,
                })
                console.log(result.image_url)
            })
    },

    productAdd: (req, res) => {
        res.render('product-add', {})
    },

    productCreate: (req, res) => {
        db.Product.create ({
            product_name: req.body.title,
            description: req.body.description,
            user_id: req.session.userid,
            image_url: `/images/products/${req.file.filename}`,
            createdAt: new Date(),
            updatedAt: new Date()
        })
        .then (result => {
            return res.redirect("/product/id/" + result.id);
        })
        .catch(error => console.log(error));
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
            product_id: req.body.id
        })
        .then (resultado => {
            return res.redirect("/")
        })
        } else {
            res.redirect("/user/login")
        }
    },

    edit: (req,res) => {     
        db.Product.update({
            product_name: req.body.title,
            description: req.body.description,
            image_url: `/images/products/${req.file.filename}`,
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