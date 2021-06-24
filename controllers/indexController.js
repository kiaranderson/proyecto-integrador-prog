const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    
    index: (req, res) => {
        db.Product.findAll()
      .then(result => {
          if(req.session.username){
            res.render('index', {
                productos: result,
            })
        } else {
            res.render('index', {
                productos: result,
                name: 'Usuario'
            })
        }
      });
      
      
    //   db.Product.findAll()
    //   .then(result => {
    //       let imagesUrls = []
    //       for(let product of result){
    //           imagesUrls.push(window.URL.createObjectURL(product.image))
    //       }
    //       res.render('index', {
    //           productos: result,
    //           imagesUrls: imagesUrls
    //       })
    //   })

        // if(req.session.name){
        //     res.render('index', {name: req.session.name})
        // } else {
        //     res.render('index', {name: anonimo})
        // }
    },

    searchResults: (req, res) => {
        const filtro = {
            where: {
                product_name: {[Op.like]:'%' + req.query.search + '%'}
            }
        }
        db.Product.findAll(filtro)
        .then(result => {
            res.render('search-results',{
                productos: result
            })
        })
      },


    searchResults: (req, res) => {
        const filtro = {
            where: {
                username: {[Op.like]:'%' + req.query.search + '%'}
            }
        }
        db.Users.findAll(filtro)
        .then(result => {
            res.render('search-results',{
                username: result
            })
        })
      },
}

module.exports = controller;