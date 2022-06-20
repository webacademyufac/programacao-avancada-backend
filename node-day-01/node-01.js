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



const { set } = require("express/lib/application")

// JavaScript assíncrono

setTimeout(() => console.log('Testando uma mensagem exibida após 3 segundos.'), 3000)

console.log('Outra mensagem.')
<<<<<<< HEAD
=======
 */

//Desafio: utilize a classe Date para, dentro de uma função, exibir via console uma string com o dia, mês e ano atual. Em outras palavras: crie uma função sem parâmetros, crie um objeto do tipo Date dentro dela e utilize os métodos getHours, getMinutes e getSeconds para montar uma string com a hora, minuto e segundo. Após a função, acrescente o código setTimeout(nomeDaFuncao, 5000) três vezes. Teste com o comando node ./nomedoarquivo.js via terminal. Perguntas retóricas: o que acontece? Qual o motivo disso acontecer?

>>>>>>> c1fae0c299b077828ac16b7bd891110ec5a5c527

function funcao() {
  const data = new Date
  const string = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
<<<<<<< HEAD
=======
  console.log(string)
  //setTimeout(funcao, 5000)
>>>>>>> c1fae0c299b077828ac16b7bd891110ec5a5c527
}

setTimeout(funcao, 5000)
setTimeout(funcao, 5000)
<<<<<<< HEAD
setTimeout(funcao, 5000)

setInterval(funcao, 5000)
=======
setTimeout(funcao, 5000)
>>>>>>> c1fae0c299b077828ac16b7bd891110ec5a5c527
