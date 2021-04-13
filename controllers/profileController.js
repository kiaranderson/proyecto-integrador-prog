let userData = require('../data/userData');

let controller = {
    profile: (req, res) => {
        res.render('profile', {username: 'oliandbrotab',
        productos: '8',
        seguidores: '569',
        comentarios: '370'
    })
    },
}

module.exports = controller;