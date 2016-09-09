const express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo con Express JS');
});

app.listen(3000, 'localhost', () => {
    console.log("Escuchando en el puerto 3000");
});
