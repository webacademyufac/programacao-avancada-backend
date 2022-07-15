// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//função callback - função passada de argumento para outra

// const fs = require('fs');
// console.log('Premier text');
// // fs.readFile('texto.txt', function (err, conteudo){
// //     if(err) return console.error()
// //     console.log(String(conteudo));
// // });
// fs.readFile('texto.txt', (err, conteudo) => {
//     if(err) return console.error()
//     console.log(String(conteudo));
// });
// // function callback(err, conteudo){}
// console.log('Segundo texto');
// console.log('Third text');

//JavaScript Assíncrono

// setTimeout(funcao, 3000);
// function funcao(){
//     console.log('Testando uma mensagem exibida após 3s');
// }
// setTimeout(() => console.log('Testando uma mensagem exibida após 3s'), 3000);
// console.log('Outra mensagem');

//Desafio

const data = function(){
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

// setTimeout(data, 1000);
// setTimeout(data, 6000);
// setTimeout(data, 11000);

// setInterval(data, 5000);

