const http = require('http');
const host = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Ola mundo');
});

server.listen(port,host,()=>{
    console.log('Rodando');
});