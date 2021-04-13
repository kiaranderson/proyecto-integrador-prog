let controller ={
    searchResults: (req, res) => {
        res.render('search-results', {title: 'search results'})
    },
}

module.exports = controller;