/*
    aplicação para verificar o status da memoria da maquina fazendo uso do modulo OS do Node.js
*/


// importando o modulo, OS e log
const os = require('os')
const log = require('./logger')

// /*
//     o objeto stats armazena o estado atual da memoria, em valores inteiros em megabytes,
//     exibindo sua capacidade total, o uso no instante da chamada e a porcentagem de seu uso atual
// */





// desestruturação para criação de variavels que armazenará quantidade e total de memoria disponiveis
// o setInterval possibilita que o eventloop funcione de forma corretamente e resolve o argumento resultando em
// uma tela de registro do consumo de memoria e sua capacidade
setInterval(() => {
    const { freemem, totalmem } = os

/*
    o objeto stats armazena o estado atual da memoria, em valores inteiros em megabytes,
    exibindo sua capacidade total, o uso no instante da chamada e a porcentagem de seu uso atual
*/
const freememory = parseInt(freemem()/1024/1024)
const totalmemory = parseInt(totalmem()/1024/1024)
const percents = parseInt(((totalmemory-freememory) / (totalmemory)) *100)

const time = new Date()


const stats = {
    free: `${freememory} MB`,
    total: `${totalmemory} MB`,
    usage: `${percents}%`
}

process.stdout.write('\u001B[2J\u001B[0;0f')
// console.clear()
console.log("*****************MEMORY STATS*****************")
console.table(stats)
//adequação do log para registro em json e chamar o emitt
log(`${time}:  ${JSON.stringify(stats)} \n`) 
}, 1000);



// log(`consumo de memoria no periodo das: ${time} foi: ${stats.usage}
// `)