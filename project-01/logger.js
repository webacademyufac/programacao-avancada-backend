/* 
Esse código utiliza o módulo events e a classe Event Emitter para determinar uma rotina de escuta para execução de uma função. Ao final, é exportada a função log, que chama o método emit.
*/

// Importando o módulo events para a classe EventEmitter.
const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')

// Criando o objeto do tipo EventEmitter
const emitter = new EventEmitter()

// Rotina para escuta da chamada do "texto" 'log'.
emitter.on('log' , (message) => {
    fs.appendFile(path.join(__dirname , 'log.txt'), message, (err) => {
        if(err) throw err
    })
})

// Função que faz a chamada ("grita") do método emitt.
function log(message){
    emitter.emit('log', message)
}

// Exportação do método log.
module.exports = log