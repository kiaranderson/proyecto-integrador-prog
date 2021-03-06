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
        const coment = {
            include: [{
                association: 'Usuario'
            }, {
                association: 'Comentarios'
            }],
            order: [
                ["Comentarios", "createdAt", "DESC"]
            ]
        };
        db.Product.findAll(desc)
        .then(result => {
        db.Product.findAll(coment)
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
            where: { //otro operador de sequelize, busca en base a los dos parametros por separado
                [Op.or]: [{
                    product_name: {
                        [Op.like]: '%' + req.query.search + '%'
                    },

                }, {
                    description: {
                        [Op.like]: '%' + req.query.search + '%'
                    }
                }]
            }

        }
        db.Product.findAll(filtro)
            .then(result => {
                    if (result == '' || req.query.search == "") {
                        console.log('no se encuentran resultados');
                        console.log(JSON.stringify(result))

                        res.render('search-results', {
                            resultado: result,
                            error: 'No existen resultados',
                        });
                    } else {
                        // console.log(JSON.stringify(resultado))
                        console.log('Si hay resultados');
                        res.render('search-results', {
                            resultado: result,
                            error: null
                        })
                    }

            })
            }


    }






    


module.exports = controller;