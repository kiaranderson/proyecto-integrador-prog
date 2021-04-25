let controller = {
    profile: (req, res) => {
        let user = require('../data/userData')
        let productos = require('../data/productData');
        res.render('profile', {user: user, title: 'Perfil', productos: productos.novedades});
        res.render('headerLogueado', {user: user.name})
    },
}

module.exports = controller;