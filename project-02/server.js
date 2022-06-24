// Importando os módulos necessários.
const http = require('http')
const fs = require('fs')
const path = require('path')

// Criando um servidor local na porta 5000.
const server = http.createServer((req, res) => {

    // Condição para apresentar o documento "index.html", que se encontra na pasta "public", no navegador quando o usuário estiver na raiz.
    if(req.url === '/')
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        )

}).listen(5000, () => console.log('Server is running.') );