'use strict';

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || '3000';
const host = process.env.HOST || 'localhost';

app.use('/static', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(path.join(__dirname), 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index.pug');
});

app.get('/acercade', (req, res) => {
    res.render('acercade.pug');
});

const camisetaDatos = [
    {
        titulo: 'Naranja',
        descripcion:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imagen: 'camiseta1.png',
    },
    {
        titulo: 'Roja',
        descripcion:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        imagen: 'camiseta2.png',
    },
    {
        titulo: 'Azul',
        descripcion:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        imagen: 'camiseta3.png',
    },
    {
        titulo: 'Verde',
        descripcion:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        imagen: 'camiseta4.png',
    },
];

app.get('/productos', (req, res) => {
    res.render('productos.pug', {
        camisetas: camisetaDatos,
    });
});

app.get('/productos/comprar/:camiseta', (req, res) => {
    camisetaDatos.filter((camiseta) =>
        req.params.camiseta.toLocaleLowerCase() == camiseta.titulo.toLocaleLowerCase()
            ? res.render('compra.pug', camiseta)
            : null,
    );
});

app.get('/blog', (req, res) => {
    res.render('blog.pug');
});

app.get('/contacto', (req, res) => {
    res.render('contacto.pug');
});

app.use((req, res) => {
    res.status(404);
    res.render('404.pug', { titulo: '404 - Página no encontrada :(' });
});

app.listen(port, host, () => {
    console.log(`Servidor iniciado en -> http://${host}:${port}`);
});
