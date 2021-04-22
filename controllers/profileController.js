let controller = {
    profile: (req, res) => {
        let user = require('../data/userData')
        res.render('profile', {user: user, title: 'Perfil'});
        res.render('headerLogueado', {user: user.name})
    },
}

module.exports = controller;