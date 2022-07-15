/*
Este código utiliza o moódulo OS do NodeJs para 
verificar o status da memória da máquina
*/


// Importando o módulo OS

const os = require('os')

const log = require('./logger')

// Desestruturação parar criar as variaveis que carregam o método para acesso a quantidade de memoria disponivel e memoria total da maquina
const { freemem, totalmem } = os

// console.log(`Memória livre: ${parseInt((freemem() /1024) / 1024)}mb
// Memória total: ${parseInt((totalmem()/1024) / 1024)}mb`)


// const freememory = parseInt((freemem() /1024) / 1024 )
// const totalmemory = parseInt((totalmem()/1024) / 1024 )
// const percents = (freememory/totalmemory)*100
// const usagePercents = ((totalmemory - freememory)/totalmemory)*100

// // Objeto stats que armazenao estado da memória com relação a quantos gb estão livres, qual o total e a porcentagem usada
// const stats = {
//     free: `${freememory}mb`,
//     total: `${totalmemory}mb`,
//     usage: `${parseInt(usagePercents)}%`
//     // usage: `${((totalmemory - freememory)/totalmemory)*100}%`
// }
// // console.log(stats)

// // Formatando a saída dos dados da memória para uma tabela.
// console.log('++++++++++ MEMORY STATS ++++++++++')
// // console.table(stats)

// log(stats)


//  setInterval está fazendo o Event loop funcionar de 1 em 1 segundo para o código que é passado no primeiro argumento
setInterval(()=>{
    const freememory = parseInt((freemem() /1024) / 1024 )
    const totalmemory = parseInt((totalmem()/1024) / 1024 )
    const percents = (freememory/totalmemory)*100
    const percentsUsage = ((totalmemory - freememory)/totalmemory)*100

    // Objeto stats que armazenao estado da memória com relação a quantos gb estão livres, qual o total e a porcentagem usada
    const stats = {
        free: `${freememory} MB`,
        total: `${totalmemory} MB`,
        usage: `${percentsUsage}%`
    }
    
    // Formatando a saída dos dados da memória para uma tabela.
    console.log('++++++++++ MEMORY STATS ++++++++++')
    console.table(stats)
    const statsLog = JSON.stringify(stats)
    log(`${statsLog}\n`)
}, 1000)