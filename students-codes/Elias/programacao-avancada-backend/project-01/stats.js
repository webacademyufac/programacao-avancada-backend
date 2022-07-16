/*
 Este código utiliza o módulo OS do Node para verificar os
 status de memória da máquina
*/

//Importando o módulo OS
const os = require('os');
const log = require('./logger')
///utiliza a desestrut para consultar as variaveis e armazenar 
// a quantide de memoria disponvel e a total da maquina
const {freemem, totalmem} = os

// console.log(`Memória livre: ${parseInt((freemem()/1024)/1024)} MB`)
// console.log(`Memória total: ${parseInt((totalmem()/1024)/1024)} MB`)


// Está fazendo um Event Loop funcionar em um intervalo de 1 segundo
setInterval( () => {
    //O objeto stats armazena o estado da memoria com relacao
    //  1-quantos MB estao livres, 2-quantos existem no total e 3-porcentagem utilizada
    const freememory = parseInt((freemem()/1024)/1024)
    const totalmemory = parseInt((totalmem()/1024)/1024)
    const percents = parseInt((totalmemory - freememory)/ (totalmemory)*100)
    const stats = {
        free:  `${freememory} MB`,
        total: `${totalmemory} MB`,
        usage: `${percents} %`
    
    }
    
    const tempo = new Date()
    const time = tempo.getHours ()+':'+ tempo.getMinutes() + ':' + tempo.getSeconds()
    console.clear()
    console.log("+++++++++  Dados da Memória +++++++++")
    console.table(stats)
    log(`${JSON.stringify(stats)} - tempo = ${time} \n`)
    
}, 2000 )