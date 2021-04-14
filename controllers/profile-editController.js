let controller = {
    profileEdit: (req, res) => {
        res.render('profile-edit', {title: 'Editar Perfil'})
    },
}

module.exports = controller;