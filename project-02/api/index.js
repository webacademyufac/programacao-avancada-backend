// Importação de módulos
const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
// Importação do conteúdo do arquivo JSON
const data = require('./urls.json')
// Método para criar um servidor local na porta 3000 usando o listen
http.createServer((req, res) => {
    // Configurando o cabeçalho para permitir requisição externa ao servidor
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,UPDATE')
    res.setHeader('Access-Control-Max-Age', '256100')

    // Desestruturação da query string da URL para obter os valores passados como name, url e del
    const { name, url, del } = URL.parse(req.url, true).query

    // Função para reescrever o documento, tanto no delete quanto no create
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
    
    // Mostra o conteúdo
    if (!name || !url) {
        return res.end(JSON.stringify(data))
    }
    // Deleta o conteúdo passado para ser excluído e exibe o conteúdo após a alteração
    if (del) {
        data.urls = data.urls.filter(item => item.url != url)
        writeFile(message => res.end(message))
        return data.urls
    }
    // Cria o conteúdo no documento e após a alteração exibe o documento 
    data.urls.push({name, url})
    writeFile(message => res.end(message))
    return data.urls

}).listen(3000, () => console.log('Api is running.'))