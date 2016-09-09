const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    const TEMPLATE_DIR = './public/';
    switch(request.url) {
        case '/':
            template = 'index.html';
            break;
        case '/acercade':
            template = 'acercade.html';
            break;
        default:
            template = '404.html';
    }
    fs.readFile(TEMPLATE_DIR + template, (err, data) => {
        response.write(data);
        response.end();
    });
});
//
server.listen(3000,'localhost');
