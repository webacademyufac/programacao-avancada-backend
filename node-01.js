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

//callback
/*
const fs = require('fs')
console.log('Primeiro texto.')
fs.readFile('texto.txt', (erro, conteudo) => {
    if(erro)    return console.erro(erro)
    console.log(String(conteudo))
})
console.log('Segundo texto.')
console.log('Terceiro texto.')
setTimeout(() => console.log('Testando uma mensagem exibida após 3 segundos'), 3000);
console.log('Outra mensagem.')
*/

//Desafio 13/06
function horarioComAtraso(atraso = 0) {
    const hoje = new Date()
    dia = hoje.getDay()
    mes = hoje.getMonth()
    ano = hoje.getFullYear()
    hora = hoje.getHours()
    minuto = hoje.getMinutes() 
    segundo = hoje.getSeconds() + atraso
    console.log(`A data atual é ${dia}/${mes}/${ano}. O horário atual é ${hora}:${minuto}:${segundo}`)
}

setTimeout(() => {
    horarioComAtraso()
    setTimeout(() => {
        horarioComAtraso()
        setTimeout(() => horarioComAtraso(), 3000);
    }, 3000);
}, 3000);

/*
setInterval(() => horarioComAtraso(), 3000);
*/
