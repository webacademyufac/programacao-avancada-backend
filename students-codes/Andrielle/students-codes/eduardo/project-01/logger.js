/* 
Esse código utiliza o módulo events e a classe Event Emitter para determinar uma rotina de escuta para execução de uma função. Ao final, é exportada a função log, que chama o método emit. No método on, há o tratamento para inserir o que vier da chamada de log no documento log.txt.
*/

// Importando os módulos.
// events para a classe EventEmitter.
const EventEmitter = require('events')
// fs para lidar com arquivos.
const fs = require('fs')
// path para resolver caminhos para arquivos.
const path = require('path')

// Criando um objeto do tipo EventEmitter.
const emitter = new EventEmitter()

// Rotina para escuta da chamada de 'log'. Caso haja, há a inserção da mensagem no documento de texto.
emitter.on('log' , (message) => {
    fs.appendFile(path.join(__dirname , 'log.txt'), message, (err) => {
        if(err) throw err
    })
})

// Função que faz a chamada (grita 'log' para o método) de emitt.
function log(message){
    emitter.emit('log', message)
}

// Exportação do método log.
module.exports = log