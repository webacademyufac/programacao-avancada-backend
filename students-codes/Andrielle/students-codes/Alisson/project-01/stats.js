/* Esse código utiliza o módulo os do Node.js para verificar o status da memória da máquina.
*/


// Importando o módulo OS do Node.Js

const os = require('os');

//  Utilizando desestruturação para criar variáveis que vão armazenar a quantidade de memória disposnível e o total de memória da máquina
const { freemem, totalmem } = os

// console.log( `Memória livre: ${parseInt(freemem() /1024 /1024)} MB
// Memória total: ${parseInt(totalmem() /1024 /1024)} MB`);

const stats = {
    free: `${parseInt(freemem() / 1024 / 1024)} MB`,
    total: `${parseInt(totalmem() / 1024 / 1024)} MB`,
    percents: `${parseInt(freemem() / 1024 / 1024) / parseInt((parseInt(totalmem() / 1024 / 1024)))}`
}
console.log(stats);
