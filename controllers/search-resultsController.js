const db = require('../database/models');
const Op = db.Sequelize.Op;


//Linea 13: mas o menos que me busque lo que pido, + y - para atras.


let controller = {
    searchResults: (req, res) => {
      db.Product.findAll( {
          where: {
              product_name: {
                  [Op.like]:"%" + req.query.search + "%"
              }
          }
      })
      .then(result=> {
          res.render('search-results',{
              productos: result
          })
      } )
        
    },
}

module.exports = controller;


module.exports = controller;