const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    index: (req, res) => {
      db.Product.findAll()
      .then(result=> {
          res.render('index',{
              productos: result
          })
      } )
        
    },
}

module.exports = controller;


