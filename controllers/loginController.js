let controller = {
    login: (req, res) => {
        res.render('login', {title: 'login'})
    },
}

module.exports = controller;