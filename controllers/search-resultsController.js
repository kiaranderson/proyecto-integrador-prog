const db = require('../database/models');
const Op = db.Sequelize.Op;


let controller = {
    searchResults: (req, res) => {
      db.Product.findAll()
      .then(result=> {
          res.render('productos.novedades',{
              productos: result
          })
      } )
        
    },
}

module.exports = controller;


module.exports = controller;