/*
Este código utiliza o moódulo OS do NodeJs para 
verificar o status da memória da máquina
*/


// Importando o módulo OS

const os = require('os')

// Desestruturação parar criar as variaveis que carregam o método para acesso a quantidade de memoria disponivel e memoria total da maquina
const { freemem, totalmem } = os

// console.log(`Memória livre: ${parseInt((freemem() /1024) / 1024)}mb
// Memória total: ${parseInt((totalmem()/1024) / 1024)}mb`)


// const free = parseInt((freemem() /1024) / 1024)
// const total = parseInt((totalmem()/1024) / 1024)
// const percents = (free/total)*100

// Objeto stats que armazenao estado da memória com relação a quantos gb estão livres, qual o total e a porcentagem usada
const stats = {
    free: `${parseInt((freemem() /1024) / 1024 / 1024)}gb`,
    total: `${parseInt((totalmem()/1024) / 1024 / 1024)}gb`,
    percents: `${(parseInt((freemem() /1024) / 1024 / 1024)/(parseInt((totalmem()/1024) / 1024 / 1024)))*100}%`
}
console.log(stats)

// Formatando a saída dos dados da memória para uma tabela.
console.table(stats)