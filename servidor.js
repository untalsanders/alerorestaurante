const express = require('express');
const fs = require('fs');

var app = express();
// app.use(express.static(__dirname + '/public'));
// Establece carpeta por defecto para las vistas
app.set('views', './views');
// Establece carpeta por defecto para las vistas
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    // res.sendFile('index.html');
    // res.render('index', {title: 'Sanders Gutiérrez', message: 'Bienvenidos a mi web'});
    res.render('index.pug');
});

app.listen(3000, 'localhost', () => {
    console.log("Escuchando en el puerto 3000");
});
