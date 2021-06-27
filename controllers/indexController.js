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
    },

    searchResults: (req, res) => {
        const filtro = {
            where: [
                {product_name: {[Op.like]:'%' + req.query.search + '%'}},
                {product_description: {[Op.like]:'%' + req.query.search + '%'}}
            ]
        }
        db.Product.findAll(filtro)
        .then(result => {
            res.render('search-results',{
                productos: result
            })
        })
      },


    // searchResults: (req, res) => {
    //     const filtro = {
    //         where: {
    //             username: {[Op.like]:'%' + req.query.search + '%'}
    //         }
    //     }
    //     db.Users.findAll(filtro)
    //     .then(result => {
    //         res.render('search-results',{
    //             username: result
    //         })
    //     })
    //   },
}

module.exports = controller;