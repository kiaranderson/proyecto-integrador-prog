let controller = {
    profile: (req, res) => {
        let user = require('../data/userData')
        res.render('profile', {user: user, title: 'Perfil'})
    },
}

module.exports = controller;