//Servidor Web em node
/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 4200;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

//Callbacks

const fs = require('fs');
console.log('Primeiro Texto')

fs.readFile('./texto.txt', (error, content) => {
  if(error) return console.error();
  console.log(String(content))
})

// "-----------"
console.log('Segundo Texto')
console.log('Terceiro Texto')

//JavaScript Assíncrono

console.log("Logo aparecerá uma nova mensagem")

setTimeout(() => {
  console.log("Hello World!") //Aparecendo a mensagem após 3 segundos.
}, 3000)*/


// Desafio da aula 13/06/2022

const tempo = dataHora();

function dataHora(){
  const data = new Date();

  console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
}

setTimeout(dataHora, 5000)
setTimeout(dataHora, 5000)
setTimeout(dataHora, 5000)
// setInterval(dataHora, 5000)
