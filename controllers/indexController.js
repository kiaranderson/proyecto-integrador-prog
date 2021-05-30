const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    index: (req, res) => {
      db.Product.findAll()
      .then(result => {
          res.render('index',{
              productos: result
          })
      })
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
}

module.exports = controller;