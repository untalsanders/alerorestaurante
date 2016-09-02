const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
    response.write("Bienvenidos a mi sitio me llamo Sanders Gutiérrez");
    response.end();
});

server.listen(3000,'localhost');
