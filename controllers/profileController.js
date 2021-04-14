let userData = require('../data/userData');

let controller = {
    profile: (req, res) => {
        let user = require('../data/userData')
        res.render('profile', {user: user})
    },
}

module.exports = controller;