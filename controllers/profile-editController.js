let controller = {
    profileEdit: (req, res) => {
        res.render('profile-edit', {title: 'edit profile'})
    },
}

module.exports = controller;