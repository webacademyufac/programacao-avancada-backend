/**
 * Esse código utiliza o módulo events e a class EventEmitter para determinar uma rotina de escuta para execução de uma função. Ao final, é exportada a função log, que chama o método emit.
 */


// importando o módulo events para a class EventEmitter
const EventEmitter = require('events');
// importando o módulo fs(file system) para a class fs
const fs = require('fs');
// importa o módulo path para utilizar o método join(__dirname) na class path
const path = require('path');

// criando o objeto do tipo EventEmitter
const emitter = new EventEmitter();

// rotina para escuta da chamada do "texto" 'log'
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname, 'log.txt'), message, (error) => {
        if(error) throw error;
    })
});

// função é quem faz a chamada do método emitt
function log(message) {
    emitter.emit('log', message);
}

// função 'log' sendo exportada
module.exports = log;