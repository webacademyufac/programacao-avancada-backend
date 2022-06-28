<<<<<<< HEAD
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

=======
/* 
Esse código utiliza o módulo OS do Node.js para verificar o status da memória da máquina e faz a chamada do método log de logger.js.
*/

// Importando o módulos OS do Node.js.
const os = require('os')
// Importando a função log do documento logger.js.
const log = require('./logger')

// Utilizando desestruturação para criar as variáveis que carregam os métodos para acesso à quantidade de memória disponível e à quantidade total de memória da máquina.
const { freemem, totalmem } = os

// setInterval está fazendo o Event Loop funcionar de 1 em 1 segundo para o código que é passado no primeiro argumento (callback).
setInterval(() => {
    // O objeto stats armazena o estado da memória com relação a quantos MB estão livres, quantos MB existem no total e a porcentagem da memória que está sendo usada.
    const freememory = parseInt(freemem() / 1024 / 1024)
    const totalmemory = parseInt(totalmem() / 1024 / 1024)
    const percents = parseInt((totalmemory - freememory) / (totalmemory) * 100)
    const stats = {
        free: `${freememory} MB`,
        total: `${totalmemory} MB`,
        usage: `${percents} %`
    }

    // Formatando a saída dos dados da memória para uma tabela.
    console.clear()
    console.log('++++++ MEMORY STATS ++++++')
    console.table(stats)
    
    // Chamada da função log, que inicia o EventEmitter.
    log(`${JSON.stringify(stats)}\n`)

}, 1000)
>>>>>>> upstream/main
