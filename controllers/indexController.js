const products = require('../data/products.json');

module.exports = {
    index: (req,res) => {
    res.render('index', {
        tittle:"Pimienta & Sal",
        products,
        images: "/principal.jpg"
    });
},

    detail: (req,res) => {
    res.render('detalleMenu', {
        product : products.find(product => product.id === +req.params.id)
    });
},
}