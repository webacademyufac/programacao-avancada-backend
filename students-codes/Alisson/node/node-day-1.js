/* const http = require('http');

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

// const fs = require('fs')
// console.log('Primeiro Texto')
// fs.readFile(('texto.txt'), (err, conteudo) => {
//   if (err) return console.err(err)
//   console.log(String(conteudo))
// })
// console.log('Segundo Texto')
// console.log('Terceiro Texto')

// setTimeout(funcao, 3000)

// function funcao() {
//   console.log( 'Testando uma mensagem exibida após 3s.')
// }

// console.log('Outra mensagem')


// function horasData () {
//   let horasDate = new Date()

//   console.log(`${horasDate.getHours()} ${horasDate.getMinutes()} ${horasDate.getSeconds()}`)

// }

// setTimeout(horasData)

// setInterval(horasData, 5000);

// JavaScript Assíncrono

// const somar = (resultado = 1+3) => (resultado === 2 ? sucesso() : erro());
//   // const resultado = 1 + 1
//   // if (resultado === 2) sucesso()
//   // else erro()

// function sucesso() {
//   console.log("Sucesso! A soma foi 2.")
// }

// function erro() {
//   console.log ('A soma não foi 2. Alguma coisa deu errado...')
// }

// somar();


// *** Promisses são classes em JavaScript. Métodos: then e catch

// const p = new Promise ((resolve, reject) => {
//   const resultado = 1 + 2
//   if (resultado === 2) resolve ('Sucesso! A soma foi 2.')
//   else reject('A soma não foi 2. Alguma coisa deu errado')
// })

// p 
//   .then((mensagem) => (console.log('Isso é o que está dentro do then: ' + mensagem)))
//   .catch((mensagem) => (console.log('Isso é o que está dentro do catch: ' + mensagem)));

// console.log(p)

const melhorProgramador = 'Alisson'

function quemEhOMelhor() {
  return new Promise((resolve, reject) => {
  if (melhorProgramador === 'Alisson') {
    resolve({
      nome: melhorProgramador,
      mensagem: ' humildimente é o melhor'
    })
  } else {
    reject ({
      mensagem01: 'Tá errado...',
      mensagem02: '? Sério?'
    })
  }
})
}

// console.log(quemEhOMelhor())

quemEhOMelhor() 
  .then((resultado) => (console.log(resultado.nome + resultado.mensagem)))
  .catch((erro) => (console.log(erro.mensagem01 + melhorProgramador + erro.mensagem02)))