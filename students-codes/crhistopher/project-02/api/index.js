/*
    Modulo de estudo da criaçao e consumo de api, onde há  url e nome relacionados e que devem
    ser vinculados e inseridos em um banco de dados não relacional, consultado e modificado(excluido)
*/
// importaçoes dos modulos utilizados
const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')

// importação do json
const data = require('./urls.json')

// criação do server na porta 3000
http.createServer((req, res) => {
    // adequaçao do cabeçalho para permissão de CORS 
    res.setHeader('Access-Control-Allow-Origin', '*')//permitir todas as origens
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,UPDATE')//metodos de requisição utilizados na aplicação
    res.setHeader('Access-Control-Max-Age', '256100')//em segundos

    // Desestruturação da query para criação de variaveis
    const { name, url, del } = URL.parse(req.url, true).query

    // Função para escrever e reescrever o documento
    function writeFile(cb) {
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if (err) throw err
                cb(JSON.stringify(data))
            }
        )
    }
    
    // exibe o documento
    if (!name || !url) {
        return res.end(JSON.stringify(data))
    }
    // deleta e reescreve o documento
    if (del) {
        data.urls = data.urls.filter(item => item.url != url)
        writeFile(message => res.end(message))
        return data.urls
    }
    data.urls.push({name, url})
    writeFile(message => res.end(message))
    return data.urls

}).listen(3000, () => console.log('Api is running(port 3000)'))