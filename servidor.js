const express = require('express');
const fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(3000, 'localhost', () => {
    console.log("Escuchando en el puerto 3000");
});
