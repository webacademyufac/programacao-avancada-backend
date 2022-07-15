/**
 * Description: Este código utiliza o módulo OS do NodeJS para verificar o estado da memória da máquina
 */

// Impotando o módulo OS do NodeJS
const os = require('os');

const log = require('./logger');

// Utilizado desestruturação para criar as variáreis que armazenarão a quantidade de memória disponível e total do pc.
const { freemem, totalmem } = os;

/**
 * console.log(`Memória livre ${parseInt(freemem() / 1024 / 1024)} MB
 *  Memória Total: ${parseInt(totalmem() / 1024 / 1024)} MB`)
*/

// const free = parseInt(freemem() / 1024 / 1024) + " MB";
// const total = parseInt(totalmem() / 1024 / 1024) + " MB";
// const percents = parseInt((free / total) * 100);

// console.log(free, total, percents);

//setInterval está fazendo o eventloop functionar de 1 em 1 segundo para o código que é passado no primeiro argumento(callback)
setInterval( () => {
    // O objeto stats armazena o estado da memória com relação a quantos MB estão livres, quantos existem no total e a porcentagem que está sendo usada.
    const freememory = parseInt(freemem() / 1024 / 1024);
    const totalmemory = parseInt(totalmem() / 1024 / 1024);
    const percents = parseInt((totalmemory-freememory)  / totalmemory * 100);

    const stats = {
        free: `${freememory} MB`,
        total: `${totalmemory} MB`,
        usage: `${percents}%`,
    }
    // console.log(stats)
    // Formatando a saída dos dados da memória para uma tabela
    console.clear();
    console.log("+++++ MEMORY STATS +++++")
    console.table(stats)
    // Passando as estatístiscas da memória livre, memória total e o percentual da memória usada
    // Chamada da função log e transformamos o objeto em JSON e passando para o log.txt
    log(`${JSON.stringify(stats)} \n`);
}, 1000)