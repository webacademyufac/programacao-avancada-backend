/*
Eete código utuliza o módulo OS do Node.js para verificar o status da memória da máquina 
*/

// Importando o modulo OS 
const OS = require('os');
const log = require('./logger.js');


// utilizando destructuring para criar as variaveis que vão armazenar a quantidade de memória disponivel e a 
// quantidade de memória total da máquina e a porsentagem de utilização de memoria. 
const {freemem, totalmem} = OS;

/* console.log(`Memória livre:${parseInt(freemem()/(1024*1024))} MB 
 Memória Total:${parseInt(totalmem()/(1024*1024))} MB
`); */

/* const freememory =  parseInt(freemem()/(1024*1024));
const totalmemory = parseInt(totalmem()/(1024*1024));
const percents =  parseInt(((totalmemory-freememory)/totalmemory)*100)

const stats = {
    free:freememory+'MB',
    total:totalmemory+'MB',
    usage:percents+'%'
}

console.log("--------- MEMORY STATS ----------------")
console.table(stats) */;


// tornando o codigo assincrino 

setInterval(() => {

    const freememory = parseInt(freemem() / (1024 * 1024));
    const totalmemory = parseInt(totalmem() / (1024 * 1024));
    const percents = parseInt(((totalmemory - freememory) / totalmemory) * 100)

    const stats = {
        free: freememory + 'MB',
        total: totalmemory + 'MB',
        usage: percents + '%'
    }
    console.clear()
    console.log("--------- MEMORY STATS ----------------")
    console.table(stats)
    log(JSON.stringify(stats))

}, 1000)

