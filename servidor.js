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
    {titulo: 'Naranja', imagen: 'camiseta1.png'},
    {titulo: 'Roja', imagen: 'camiseta2.png'},
    {titulo: 'Azul', imagen: 'camiseta3.png'},
    {titulo: 'Verde', imagen: 'camiseta4.png'}
];
app.get('/proyectos', (req, res) => {
    res.render('proyectos.pug', {titulo_pagina: 'Proyectos', camisetas: camisetaDatos});
});
app.get('/blog', (req, res) => {
    res.render('blog.pug');
});
app.get('/contacto', (req, res) => {
    res.render('contacto.pug');
});

app.listen(3000, 'localhost', () => {
    console.log("Escuchando en el puerto 3000");
});
