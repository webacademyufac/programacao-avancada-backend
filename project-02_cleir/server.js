const http = require('http')
const fs = require('fs')
const path = require('path')

// cria o servidor na porta 5000
http.createServer((req, res) => {

    // verifica se a url chamada e a home ou outra pagina, se home chame index.html se outra pagina leva ao caminha da pagina
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname,'public', file)
    // pega a extenção do arquivo e verifica se o arquivo  é permitido 
    const extname = path.extname(filePath)
    const allowedFileTypes = ['.html','.css','.js','.png']
    const allowed = allowedFileTypes.includes(extname) 
    // caso seja falso para a execução
    if(!allowed) return 
    
    // retorna o arquivo da requisição 
        fs.readFile(
            filePath,
            (err, content) => {
                if (err) throw err
                res.end(content)
            }
        ) 

}).listen(5000, () => { console.log('Server is running.') })
