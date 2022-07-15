/*
Esse codigo utiliza o modelo de events para determinar a rotina de escuta para 
execução de uma funçao que ao final exporta a funcao log que é chamada o metodo emit
*/

//
const EventEmitter = require('events')
const fs = require('fs')
const path = require('path')
const emitter = new EventEmitter()

//rotina para escuta da chamada do "texto" "log"
emitter.on('log', (message) => {
    fs.appendFile(path.join(__dirname,'log.txt'), message,(err)=>{
        if(err) throw err
    })
})


function log(message){
    emitter.emit('log', message)
}

module.exports = log