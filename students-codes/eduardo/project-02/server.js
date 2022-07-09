// Importando os módulos necessários.
const http = require('http')
const fs = require('fs')
const path = require('path')

// Criando um servidor local na porta 5000.
const server = http.createServer((req, res) => {

    const file = req.url === '/' ? 'index.html' : req.url

    const filePath = path.join(__dirname, 'public', file)

    const extname = path.extname(filePath)

    // Extensões de arquivos permitidos a serem lidos pelo servidor.
    const allowedFileTypes = ['.html','.css','.js','.png']

    // Variável que guarda os arquivos existentes.
    const allowed = allowedFileTypes.find(item => item == extname)

    if(!allowed) return 

    // Lendo arquivo a partir do caminho dado, e tratando o erro. Ao final, o conteúdo é mostrado.
    fs.readFile(
        filePath, (err, content) => {
            if (err) throw err
            res.end(content)
        }
    )
}).listen(5000, () => console.log('Server is running.'));