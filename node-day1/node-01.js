
/*const http = require('http');

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


// callback

const fs = require ('fs')
console.log('Primeiro passo')
fs.readFile('./node-day1/texto.txt',function (err,conteudo){
    if(err) return console.err(err)
    console.log(String(conteudo))
})
/*
function callback(err,conteudo){
    if(err) return console.err(err)
    console.log(String(conteudo))
}
console.log('segundo texto')
console.log('terceiro texto')

//Javascript assincrono
setTimeout(funcao,3000)
function funcao(){
    console.log('Testando apos tres segundos')
}
console.log('outra mensagem')

function b(){
     var a = new Date('December 25, 1995 23:15:30')
     var hours = a.getHours()
     var min = a.getMinutes()
     var seg = a.getSeconds()
     console.log(hours,min,seg)
}
setTimeout(b,5000)*/
 

