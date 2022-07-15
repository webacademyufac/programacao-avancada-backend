const http = require('http')
const fs = require('fs')
const path = require('path')
const data = require('./urls.json')
const URL = require('url')

// cria o servidor na porta 3000
http.createServer((req, res) => {

    // libera o access control allow origin para permitir acesso a  api
    res.writeHead(200,
        { "access-control-allow-origin": "*" })
    // pega a url da requisição feita a API 
    const { name, url, del } = URL.parse(req.url,true).query

    // verifica se a existo nome e url! se não existe mostra os dados do JSON
    if (!name || !url) {
        return res.end(JSON.stringify(data))
    }
    // se o parametro del for passado deleta o item informado.
    if (del) {
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(message => res.end(message))
    }
    // caso exista nome e url! cadastra os dados informados 
    data.urls.push({ "name": name, "url": url })
    return writeFile(message => res.end(message))

    // função que rescreve o arquivo json 
    function writeFile(cp) {
        fs.writeFile(path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if (err) throw err
                cp('operação realizada com sucesso')
            })
    }

}).listen(3000, () => { console.log('api is running') })
