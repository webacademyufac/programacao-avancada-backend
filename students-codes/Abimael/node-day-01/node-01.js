/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

/*

//Callback
//Modulo para acesso do SO
const fs = require('fs');
console.log('Primeiro texto')
//Lê o arquivo e chama uma função
fs.readFile('texto.txt', (err,conteudo)=>{
    if(err) return console.error(err)
    console.log(String(conteudo))
})
//verifica se tem erro, se tiver, exibe o erro

console.log('Segundo texto')
console.log('Terceiro texto')
*/
/*
//JavaScript Assincrono

setTimeout(()=> console.log('Testando mensagem exibida 3 segundo depois de sua chamada'), 3000)

console.log('Outra mensagem')
*/
//Desafio

function data() {
  const data = new Date()  
  const horas = String(data.getHours())
  const minutos = String(data.getMinutes())
  const segundos = String(data.getSeconds())
  const agora = `${horas}:${minutos}:${segundos}`
  console.log(agora)
}


setTimeout(data,5000)
setTimeout(data,5000)
setTimeout(data,5000)

// setInterval(data,5000)
// setInterval(data,5000)
// setInterval(data,5000)
    


