const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    
    index: (req, res) => {
        const desc = {
            include: [{
                association: 'Comentarios'
                },{
                association: 'Usuario'
            }],
            order: [
                ["createdAt", "DESC"]
            ]
        };
        const asc = {
            include: [{
                association: 'Usuario'
            }, {
                association: 'Comentarios'
            }],
            order: [
                ["createdAt", "ASC"]
            ]
        };
        db.Product.findAll(desc)
        .then(result => {
        db.Product.findAll(asc)
            .then(result2 => {
                res.render('index', {
                    productos: result,
                    productos2: result2
                })
            })
      })
      .catch(error => {
        console.log("Error de conexion: " + error.message);
        res.render('index', {
            error: "Error de conexion"
        });
    });
    },

   
    searchResults: (req, res) => {
        const filtro = {
            where: 
                { //otro operador de sequelize, busca en base a los dos parametros por separado
                    [Op.or]:[{
                        product_name: {[Op.like]:'%' + req.query.search + '%'},
                       
                    },{
                        description: {[Op.like]:'%' + req.query.search + '%'}
                    }]
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