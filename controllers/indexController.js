let controller = {
    index: (req, res) => {
        res.render('index', {title: 'kiara'})
    },
}

module.exports = controller;