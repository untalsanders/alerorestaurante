'use strict'

const products = [
    {
        "id": 1,
        "title": "Narana",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "image": "camiseta1.png"
    },
    {
        "id": 2,
        "title": "Roja",
        "description": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "image": "camiseta2.png"
    },
    {
        "id": 3,
        "title": "Azul",
        "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "image": "camiseta3.png"
    },
    {
        "id": 4,
        "title": "Verde",
        "description": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "image": "camiseta4.png"
    }
]

const getProducts = (req, res) => {
    res.render('products.twig', {
        products
    })
}

const getProduct = (req, res) => {
    const { id } = req.params
    products.filter(product => (id == product.id ? res.render('product-details.twig', { product }) : null))
}

module.exports = {
    getProducts, getProduct
}
