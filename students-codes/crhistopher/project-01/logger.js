/* 
    modulo para determinar rotina de escuta com objetivo de executar uma função, através do modulo events com a classe event emitter.
    Por fim, ela é exportada para que a função log que chama o metodo emit seja utilizada em outros lugares
*/

// importando modulo events para fazer uso do EventEmitter
const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

// criando objeto do tipo EventEmitter
const emitter = new EventEmitter()

// rotina de escuta da chamada da mensagem/texto log
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (err) => {
        if(err) throw err
    })
})

// função que faz chamada do metodo emit (o log chama e o emitter atende, uma vez que ele estava esperando o chamado)
function log(message){
    emitter.emit('log', message)
}

// expotação do metodo log
module.exports = log
