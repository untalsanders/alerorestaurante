'use strict'

const { join } = require('path')
const express = require('express')
const config = require('./config/app')
const { router } = require('./routes')

const app = express()

app.use('/static', express.static(join(config.root, 'public')))
app.set('views', join(__dirname, 'views'))
app.set('twig options', {
    allow_async: true,
    strict_variables: false,
})

app.use('/', router)
app.use((req, res) => {
    res.status(404)
    res.render('error/404.twig', {
        message: '404 - Página no encontrada :(',
    })
})

app.listen(config.port, config.host, () => {
    console.log(`Servidor iniciado en -> http://${config.host}:${config.port}`)
})
