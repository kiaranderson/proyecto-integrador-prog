let controller ={
    searchResults: (req, res) => {
        res.render('search-results', {title: 'Resultados de Búsqueda'})
    },
}

module.exports = controller;