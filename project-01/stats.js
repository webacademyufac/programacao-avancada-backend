// Este código utuliza o módulo OS do Node.js para verificar o status da memória da máquina

// Importando o módulo OS
const os = require('os')

const log = require('./logger')

/* Utilizando desstruturação para criar as variáveis que vão armazenar a quantidade de memória 
disponível e o total da memória */
const { freemem, totalmem } = os

// setInterval serve para fazer o Event Loop funcionar a cada 1 segundo para o código passado no argumento
setInterval(() => {
    /* O objeto stats armazena o estado da memória com relação a quantos MB estão livres, quantos existem
    no total e a porcentagem que está sendo usada */
    const freememory = parseInt(freemem() / 1024 / 1024)
    const totalmemory = parseInt(totalmem() / 1024 / 1024)
    const percents = parseInt((totalmemory - freememory) / (totalmemory) * 100)

    const stats = {
        free: `${freememory} MB`,
        total: `${totalmemory} MB`,
        usage: `${percents}%`
    }

    // Mostrando em um formato de tabela os dados formatados
    console.clear()
    console.log('------ MEMORY STATS ------')
    console.table(stats)

    // Chamada da funçõ log que inicia o EventEmitter.
    log(JSON.stringify(stats)+'\n')
}, 1000);