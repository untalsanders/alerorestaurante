'use strict'

const { Router } = require('express')
const { indexPage } = require('../controllers/IndexController')
const { aboutPage } = require('../controllers/AboutController')
const { getProducts, getProduct } = require('../controllers/ProductController')
const { contactPage } = require('../controllers/ContactController')
const { blogPage } = require('../controllers/BlogController')

const router = Router()

router.get('/', indexPage)
router.get('/about', aboutPage)
router.get('/products', getProducts)
router.get('/products/:id', getProduct)
router.get('/blog', blogPage)
router.get('/contact', contactPage)

module.exports = { router }
