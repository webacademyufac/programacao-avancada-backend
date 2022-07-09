const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

    // Estratégia para o nome do documento e caminho para ele de maneira dinâmica.
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname,'public', file)
    const extname = path.extname(filePath)
    const allowedFileTypes = ['.html','.css','.js']
    
    const allowed = allowedFileTypes.includes(extname) 

    if(!allowed) return 
    
        fs.readFile(
            filePath,
            (err, content) => {
                if (err) throw err

                res.end(content)
            }
        ) 

}).listen(5000, () => { console.log('Server is running.') })
