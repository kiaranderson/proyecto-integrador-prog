let controller = {
    profile: (req, res) => {
        res.render('profile', {title: 'profile'})
    },
}

module.exports = controller;