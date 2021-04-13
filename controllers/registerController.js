let controller = {
    register: (req, res) => {
        res.render('register', {title: 'register'})
    },
}

module.exports = controller;