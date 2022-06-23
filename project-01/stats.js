/*
This code uses the node.js OS module to check machine stats 
 */



//Import module OS

const os = require('os')

const log = require('./logger')

const {freemem , totalmem} = os // Destructuring to create available memory variables and total amount of machine memory

//console.log(`Memoria total : ${(freemem() / 1024 / 1024)}, ${(totalmem() / 1024 / 1024)} MB`)


/*
const free = (freemem() / 1024 / 1024)
const total  = (totalmem() / 1024 / 1024)
const percents = (free / total) * 100 

*/

//console.log(`Porcentagem de memoria livre ${percents} %`)


//method to check the amount of ram memory of the machine


setInterval(() => { //putting all the code inside the setinterval to keep showing every 1 second

//method to check the amount of ram memory of the machine

const freememory = parseInt(freemem() / 1024 / 1024 )
const totalmemory = parseInt(totalmem() / 1024 / 1024)
const percents = parseInt((totalmemory - freememory ) / (totalmemory ) *100)

const stats = {
    free : `${freememory} MB` ,
    total :`${totalmemory} MB`  ,
    usage : `${percents} %`
}

//forming the data output to table
console.clear()
console.log("++++++++ MEMORY RAM STATS ++++++++++++")
console.table(stats)

log(`${JSON.stringify(stats)} \n`)


} , 1000)
