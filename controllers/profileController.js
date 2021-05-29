let controller = {
    profile: (req, res) => {
        let user = require('../data/userData')
        let productos = require('../data/productData');

        res.render('profile', {
            user: user, productos: 
            productos.novedades
        });
        res.render('headerLogueado', {
            user: user.name
        })
    },

    profileEdit: (req, res) => {
        res.render('profile-edit', {
        })
    }
}

module.exports = controller;


// //-cambiar la ruta de profile, el tema de los ID %
// -login
// -register
// -delete
// -dentro de pro, 1. copiar controlador de product, find all para la lista de los productos
// -vista de profile information real (find by pk)
// -revisar las vistas, y cuales necesitan información
