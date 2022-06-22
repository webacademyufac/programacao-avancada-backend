/* 
Este código utiliza o módulo OS do Node.js para verificar o status da memória da máquina.
*/

// Importando o módulo OS do Node.js.
const os = require('os')

// Utilizando desestruturação para criar as variáveis que carregam os métodos para acesso à qtd de memória disponível e à quantidade total de memória da máquina.
const { freemem, totalmem } = os

// O objeto stats armazena o estado da memória com relação a quantos MB estão livres, quantos existemno total e a porcentagem que está sendo usada.
const stats = {
    free: `${parseInt(freemem() / 1024 / 1024)} MB`,
    total: `${parseInt(totalmem() / 1024 / 1024)} MB`,
    percents: `${parseInt((parseInt(freemem() / 1024 / 1024) / parseInt(totalmem() / 1024 / 1024)) * 100)} %`
}

// Formatando a saída dos dados da memória para uma tabela.
console.log('++++++ MEMORY STATS ++++++')
console.table(stats)
