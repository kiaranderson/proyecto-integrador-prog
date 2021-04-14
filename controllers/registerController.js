let controller = {
    register: (req, res) => {
        res.render('register', {title: 'Registrarse'})
    },
}

module.exports = controller;