/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 4002;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// callback

const fs = require('fs')
console.log('Primeiro texto.')
fs.readFile('./node-day-01/texto.txt', (err, conteudo) => {
    if(err) return console.err(err)
    console.log(String(conteudo))
})

console.log('Segundo texto.')
console.log('Terceiro texto.')

*/

const { set } = require("express/lib/application")

// JavaScript assíncrono

setTimeout(() => console.log('Testando uma mensagem exibida após 3 segundos.'), 3000)

console.log('Outra mensagem.')

function funcao() {
  const data = new Date
  const string = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
}

setTimeout(funcao, 5000)
setTimeout(funcao, 5000)
setTimeout(funcao, 5000)

setInterval(funcao, 5000)
