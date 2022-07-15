/* 
Este código utiliza o módulo OS do Node.js para verificar o status da memória da máquina.
*/

// Importando o módulo OS do Node.js.
const os = require('os')

const log = require('./logger')

// Utilizando desestruturação para criar as variáveis que carregam os métodos para acesso à qtd de memória disponível e à quantidade total de memória da máquina.
const { freemem, totalmem } = os

// setInterval está fazendo o Event Loop funcionar de 1 em 1 segundo para o código que é passado no primeiro argumento (callback).
setInterval(() => {
    // O objeto stats armazena o estado da memória com relação a quantos MB estão livres, quantos existem no total e a porcentagem que está sendo usada.
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
    log(`${JSON.stringify(stats)}\n`)

}, 1000)