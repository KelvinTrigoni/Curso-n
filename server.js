const http = require('http');
const {readFile} = require('fs');
const host = '127.0.0.1';
const port = 8080;
const url = `http://${host}:${port}/`

let conteudo = '';
readFile('index.html', (erro, response)=>{
    if(erro) throw erro;
    conteudo = response;
})

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/html');
    res.end(conteudo);
});

server.listen(port,host,()=>{
    console.log('Rodando');
});


// const open = (process.platform == 'darwin'? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');

// require('child_process').exec(open + ' ' + url);