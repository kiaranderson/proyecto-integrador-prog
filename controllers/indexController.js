let controlador = {
    index: (req, res) => {
        res.render('index', {title: 'kiara'})
    },
    login: (req, res) => {
        res.render('login', {title: 'login'})
    },
    product: (req, res) => {
        res.render('product', {title: 'product'})
    },
    profileEdit: (req, res) => {
        res.render('profile-edit', {title: 'edit profile'})
    },
    profile: (req, res) => {
        res.render('profile', {title: 'profile'})
    },
    register: (req, res) => {
        res.render('register', {title: 'register'})
    },
    searchResults: (req, res) => {
        res.render('search-results', {title: 'search results'})
    },
}

module.exports = controlador;