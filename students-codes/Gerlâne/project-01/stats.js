/*
Este código utiliza o módulo OS, do Node.JS, para verificar o estado da memória da máquina.
*/

//Módulo OS
const os = require('os');

//Importando função de criação e emissão de eventos do arquivo logger.js
const log = require('./logger');

/*
Utilizando desestruturação para criar variáveis que carregam a quantidade de
memória livre (freememorymem), e a quantidade de memória totalmemory (totalmemorymem).
Retornam valores em bytes
*/
const { freemem, totalmem } = os;

/*
Status da memória de forma assíncrona usando o setInterval para criar um log
*/

setInterval(() => {
    /*
    O objeto stats armazena a quantidade de memória livre do computador, a quantidade total de memória
    do computador, e o percentual de uso da memória.
    */
    const freememory = parseInt((freemem() / 1024) / 1024);
    const totalmemory = parseInt((totalmem() / 1024) / 1024);
    const percents = parseInt(((totalmemory - freememory) / totalmemory) * 100);

    const stats = {
        freememory: `${freememory} MB`,
        totalmemory: `${totalmemory} MB`,
        usage: `${percents}%`
    }

    console.log('********MEMORY STATS********');
    console.table(stats); //Saída em forma de tabela
    //Fazendo log dos stats em formato JSON no arquivo log.txt
    log(`${JSON.stringify(stats)}\n`);
}, 1000);