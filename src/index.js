'use strict'

const { join } = require('path')
const express = require('express')
const config = require('./config')
const { shirts } = require('./data')

const app = express()

app.use('/static', express.static(join(config.root, 'public')))
app.set('views', join(__dirname, 'views'))
app.set('twig options', {
    allow_async: true,
    strict_variables: false
})

app.get('/', (req, res) => {
    res.render('index.twig')
})

app.get('/about', (req, res) => {
    res.render('about.twig')
})

app.get('/products', (req, res) => {
    res.render('products.twig', {
        shirts,
    })
})

app.get('/products/:shirtId', (req, res) => {
    const { shirtId } = req.params
    shirts.filter((shirt) => (shirtId == shirt.id ? res.render('shirt-detail.twig', { shirt }) : null))
})

app.get('/blog', (req, res) => {
    res.render('blog.twig')
})

app.get('/contact', (req, res) => res.render('contact.twig'))

app.use((req, res) => {
    res.status(404)
    res.render('404.twig', {
        message: '404 - Página no encontrada :(',
    })
})

app.listen(config.port, config.host, () => {
    console.log(`Servidor iniciado en -> http://${config.host}:${config.port}`)
})
