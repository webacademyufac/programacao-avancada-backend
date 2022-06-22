/*
Eete código utuliza o módulo OS do Node.js para verificar o status da memória da máquina 
*/

// Importando o modulo OS 
const OS = require('os');

// utilizando destructuring para criar as variaveis que vão armazenar a quantidade de memória disponivel e a 
// quantidade de memória total da máquina e a porsentagem de utilização de memoria. 
const {freemem, totalmem} = OS;

/* console.log(`Memória livre:${parseInt(freemem()/(1024*1024))} MB 
 Memória Total:${parseInt(totalmem()/(1024*1024))} MB
`); */


const stats = {
    free: `${parseInt(freemem()/(1024*1024))} MB`,
    total:`${parseInt(totalmem()/(1024*1024))} MB`,
    percents:`${ parseInt((parseInt(freemem()/(1024*1024))/parseInt(totalmem()/(1024*1024)))*100)} %`
}

console.log("--------- MEMORY STATS ----------------")
console.log(stats);

