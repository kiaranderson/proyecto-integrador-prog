let controller = {
    login: (req, res) => {
        res.render('login', {title: 'Ingresar'})
    },
}

module.exports = controller;