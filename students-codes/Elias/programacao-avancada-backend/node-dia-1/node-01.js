// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//CallBack
// const fs = require('fs');
// console.log('Primeiro texto..')
// fs.readFile('./texto.txt', (erro, conteudo) => {
//     if(erro) return console.error(erro)
//     console.log(String(conteudo))
// })

// console.log('Segundo texto..')
// console.log('Terceiro texto..')

//JavaScript assincrino

//setTimeout(() => console.log('Testando uma mensagem xibida após 3 segundos.'), 3000)

// function tempo(){
//     console.log('Testando uma mensagem xibida após 3 segundos.')
// }

//console.log("Cheguei primeiro sendo a segunda")

//Desafio
// console.log('Data')
// function data(){
//     const data = new Date();
//     const dataFormatada = data.getDay() + '/' + data.getMonth() + '/' + data.getFullYear()
//     console.log(dataFormatada)
// }

// data()

// console.log('Horario')
// function hora(){
//     const horario = new Date()
//     const horarioFormatado = horario.getHours() + ':' + horario.getMinutes() + ':' + horario.getSeconds()
//     console.log(horarioFormatado)
//     setTimeout(hora, 5000)
// }

//Javascript sincrono
// function somar(){
//     const resultado =  1 + 1
//     if( resultado == 2 ) sucesso()
//     else erro()
// }

// function sucesso(){
//     console.log("Acertou uhul")
// }

// function erro(){
//     console.log("Errou tururu")
// }
// somar()

// Promises são classe em Javascript, Métodos: then catch
// const p = new Promise ((resolve, reject) => {
//     const resultado = 1 + 1
//     if( resultado == 2 ) resolve('Deu certo :)')
//     else reject('...Deu erro :(')
// })

// console.log(p)

// p.then((mensagem) => {
//     console.log('Entrou no Then ' + mensagem)
// }).catch((mensagem) => {
//     console.log('Entrou no Catch ' + mensagem)
// })

// console.log(p)

// const melhorComida = 'Pizza'
// function escolherComida(CallBack, CallBackErro){
//     if(melhorComida == 'Pizza'){
//         CallBack({
//             nome: melhorComida,
//             mensagem: 'Baum d++'
//         })
//     } else {
//         CallBackErro({
//             mensagem01: 'Não é tão bom assim...',
//             mensagem02: 'Sério?'
//         })
//     }
// }

// escolherComida(
//     (resultado) => { console.log(resultado.nome + " - " + resultado.mensagem)},
//     (erro) => { console.log(erro.mensagem01 + erro.mensagem02)}
// )

const melhorComida = 'Pizzaa'
function escolherComida(CallBack, CallBackErro){

    return new Promise((resolve, reject) => {
        if(melhorComida == 'Pizza'){
            resolve({
                nome: melhorComida,
                mensagem: 'Baum d++'
            })
        } else {
            reject({
                mensagem01: 'Não é tão bom assim...',
                mensagem02: 'Sério?'
            })
        }
    })
}


escolherComida()
    .then((resultado) => { console.log(resultado.nome + " - " + resultado.mensagem)})
    .catch((erro) => { console.log(erro.mensagem01 + erro.mensagem02)})

