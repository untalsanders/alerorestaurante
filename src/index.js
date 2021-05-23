'use strict'

const { join } = require('path')
const express = require('express')
const config = require('./config')
const { shirts } = require('./data')

const app = express()

app.use('/static', express.static(join(config.root, 'public')))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index.pug')
})

app.get('/about', (req, res) => {
    res.render('about.pug')
})

app.get('/productos', (req, res) => {
    res.render('productos.pug', {
        camisetas: shirts,
    })
})

app.get('/productos/comprar/:camiseta', (req, res) => {
    shirts.filter(shirt =>
        req.params.camiseta.toLocaleLowerCase() === camiseta.titulo.toLocaleLowerCase()
            ? res.render('compra.pug', camiseta)
            : null,
    )
})

app.get('/blog', (req, res) => {
    res.render('blog.pug')
})

app.get('/contacto', (req, res) => res.render('contacto.pug'))

app.use((req, res) => {
    res.status(404)
    res.render('404.pug', { titulo: '404 - Página no encontrada :(' })
})

app.listen(config.port, config.host, () => {
    console.log(`Servidor iniciado en -> http://${config.host}:${config.port}`)
    console.log(process)
})
