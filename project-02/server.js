// Importando os módulos necessários.
const http = require('http')
const fs = require('fs')
const path = require('path')

// Criando um servidor local na porta 5000.
const server = http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url

    const filePath = path.join(__dirname, 'public', file)
    
    console.log(file)

    const extname = path.extname(filePath)

    const allowedFileTypes = ['.html','.css','.js']

    const allowed = allowedFileTypes.find(item => extname)

    if(!allowed) return 

    // Condição para apresentar o documento "index.html", que se encontra na pasta "public", no navegador quando o usuário estiver na raiz.
    fs.readFile(
        filePath, (err, content) => {
            if (err) throw err
            res.end(content)
        }
    )
}).listen(5000, () => console.log('Server is running.'));