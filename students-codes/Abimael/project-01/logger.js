
// Este código usa o módulo events e a classe EventeEmitter para determinar uma rotina de escuta para a execução de uma função. Ao 
// final, é exportada a função log, que chama o método emit

// importando o módulo events para a classe EventEmitter
const EventEmmiter = require('events')

const fs = require('fs')

const path = require('path')

// Criando o objeto do tipo EventEmitter
const emitter = new EventEmmiter()

// Rotina para escuta da chamada do "texto" 'log'.
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname,'log.txt'), message, (err) => {
        if(err) throw err
    })
})

// Função que faz a chamada ("grita") para o emitter
function log(message){
    emitter.emit('log', message)
}   

// Exporta a função 'log'
module.exports = log




