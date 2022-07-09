/*
Criando uma função de escuta usando o módulo Events e a classe EventEmitter.
Ao final é exportada a função log().
*/

//Importação da classe EventEmitter
const EventEmitter = require('events');

//Importando o módulo FileSystem(fs)
const fs = require('fs');

//Criando o objeto do tipo EventEmitter
const emitter = new EventEmitter();

//Rotina para escuta da chamada do "texto" 'log'
emitter.on('log', (message) =>{
    fs.appendFile('./log.txt', message, (err) => {
        if(err) throw err;
    });
});

//Função que faz(grita) a chamada do método emitt
function log(message){
    emitter.emit('log', message);
}

module.exports = log;