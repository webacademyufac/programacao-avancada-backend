/*
This code uses the node.js OS module to check machine stats 
 */



//Import module OS

const os = require('os')

const {freemem , totalmem} = os // Destructuring to create available memory variables and total amount of machine memory

//console.log(`Memoria total : ${(freemem() / 1024 / 1024)}, ${(totalmem() / 1024 / 1024)} MB`)


/*
const free = (freemem() / 1024 / 1024)
const total  = (totalmem() / 1024 / 1024)
const percents = (free / total) * 100 

*/

//console.log(`Porcentagem de memoria livre ${percents} %`)


//method to check the amount of ram memory of the machine

const stats = {
    free : `${parseInt(freemem() / 1024 / 1024)} MB` ,
    total :`${parseInt(totalmem() / 1024 / 1024)} MB`, 
    percents : `${parseInt((parseInt(freemem() / 1024 / 1024) / parseInt(totalmem() / 1024 / 1024)) * 100)} % `
}


console.log("++++++++ MEMORY RAM STATS ++++++++++++")
console.table(stats)