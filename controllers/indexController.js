const db = require('../database/models');
const Op = db.Sequelize.Op;

let controller = {
    
    index: (req, res) => {
        const desc = {
            include: [{
                association: 'productos'
            }, {
                association: 'prodcom'
            }],
            order: [
                ["createdAt", "DESC"]
            ]
        };
        const asc = {
            include: [{
                association: 'productos'
            }, {
                association: 'prodcom'
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
      }
      )
      .catch(error => {
        console.log("Error de conexion: " + error.message);
        res.render('index', {
            error: "Error de conexion"
        });
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