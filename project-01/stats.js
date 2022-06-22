/*
Este código utuliza o módulo OS do Node.js para verificar o status da memória da máquina
*/

//Importando o módulo OS
const os = require('os')

//Utilizando desstruturação para criar as variáveis que v]ao armazenar a quantidade de memória disponível e o total da memória
const { freemem, totalmem } = os

//O objeto stats armazena o estado da memória com relação a quantos MB estão livres, quantos existem no total e a porcentagem que está sendo usada
const stats = {
    free: `${parseInt(freemem() / 1024 / 1024)} MB`,
    total: `${parseInt(totalmem() / 1024 / 1024)} MB`,
    percents: `${parseInt(( parseInt(freemem() / 1024 / 1024) / parseInt(totalmem() / 1024 / 1024 )) * 100)}%`
}

console.log('------ MEMORY STATS ------')
console.table(stats)