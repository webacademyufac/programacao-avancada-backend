/*
    Modulo de estudo da criaçao e consumo de api, onde há  url e nome relacionados e que devem
    ser vinculados e inseridos em um banco de dados não relacional, consultado e modificado(excluido)
*/

// importaçoes dos modulos utilizadps
const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')

// criação do server na porta 3000
http.createServer((req, res) => {
    // adequaçao para não cair no CORS 
    const header = {
        'Access-Control-Allow-Origin': '*', //permitir todas as origens
        'Access-Control-Allow-Methods': 'DELETE, POST, GET', //metodos de requisição utilizados na aplicação
        'Access-Control-Max-Age': 2592000, //em segundos
    };
    if (req.method === "POST")
    res.writeHead(
        200, {
            "Access-Control-Allow-Origin": "*"
        }
    )
    // if (req.method === "DELETE")
    // res.writeHead(
    //     200, {
    //         "Access-Control-Allow-Origin": "*"
    //     }
    // )


    const {
        name,
        url,
        del
    } = URL.parse(req.url, true).query //formado da query a ser utilizada no url no modelo:
    // http://localhost:3000/urls?name=Google&url=https://www.google.com&del=1

    // escrever o json
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

    //condicionais da query para realizar a requisição
    if (!name || !url) { //caso algo esteja vazio
        return res.end(JSON.stringify(data))
    }
    if (del) { //caso &del=1, para deletar 
        data.urls = data.urls.filter(item => item.url != url)
        writeFile(message => res.end(message))
        return data.urls
    }
    // caso haja name e url para incluir
    data.urls.push({
        name,
        url
    })
    writeFile(message => res.end(message))
    return data.urls //exibe o json

}).listen(3000, () => console.log("server's runing"))
// servidor rodando na porta 3000