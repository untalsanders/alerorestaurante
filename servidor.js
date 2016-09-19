const express = require('express');
const fs = require('fs');

var app = express();

// Establece carpeta por defecto el directorio de los archivos estáticos
app.use(express.static(__dirname + '/public'));
// Establece carpeta por defecto para las vistas
app.set('views', './views');
// Establece carpeta por defecto para las vistas
app.set('view engine', 'pug');

// RUTAS
app.get('/', (req, res) => {
    res.render('index.pug');
});

app.get('/acercade', (req, res) => {
    res.render('acercade.pug');
});

var camisetaDatos = [
    {
        titulo: 'Naranja',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imagen: 'camiseta1.png'
    },
    {
        titulo: 'Roja',
        descripcion: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: 'camiseta2.png'
    },
    {
        titulo: 'Azul',
        descripcion: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        imagen: 'camiseta3.png'
    },
    {
        titulo: 'Verde',
        descripcion: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imagen: 'camiseta4.png'
    }
];

app.get('/productos', (req, res) => {
    res.render('productos.pug', {titulo_pagina: 'Productos', camisetas: camisetaDatos});
});

app.get('/productos/comprar/:camiseta', (req, res) => {
    var obj = camisetaDatos.filter((obj) => {
        if ( req.params.camiseta == obj.titulo ) {
            res.render('compra.pug', obj);
        }
    })[0];
});

app.get('/blog', (req, res) => {
    res.render('blog.pug');
});

app.get('/contacto', (req, res) => {
    res.render('contacto.pug');
});

app.use((req, res) => {
    res.status(404);
    res.render('404.pug', {titulo: '404 - Página no encontrada :('});
});

app.listen(3000, 'localhost', () => {
    console.log("Escuchando en el puerto 3000");
});
