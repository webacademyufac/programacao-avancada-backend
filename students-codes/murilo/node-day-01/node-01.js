/*const http = require('http');

const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

//callback

// const fs = require('fs');
// console.log('Primeiro texto.');
// fs.readFile('./node-day-01/texto.txt', (err, conteudo) => {
//     if(err) return console.err(err);
//     console.log(String(conteudo));
// })


// console.log('Segundo texto');
// console.log('Terceiro texto');

// setTimeout(() => console.log('Testando uma mensagem exibida após 3 segundos.'), 3000);

// function funcao(){
//     console.log('Testando uma mensagem exibida após 3 segundos.');
// }

// console.log('Outra mensagem.');

//Minha solução incompleta
// function desafio(){
//     const date = new Date();
//     console.log(date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear());
// }

// desafio();

//Solução do professor
function funcao(){
  const data = new Date();
  const string = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  console.log(string);
}

setTimeout(funcao, 5000)
setTimeout(funcao, 5000)
setTimeout(funcao, 5000)