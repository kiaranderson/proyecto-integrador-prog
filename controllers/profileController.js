let controller = {
    profile: (req, res) => {
        let user = require('../data/userData')
        let productos = require('../data/productData');
        res.render('profile', {user: user, productos: productos.novedades});
        res.render('headerLogueado', {user: user.name})
    },

    profileEdit: (req, res) => {
        res.render('profile-edit', {title: 'Editar Perfil'})
    }
}

module.exports = controller;