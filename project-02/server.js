
// Importaçãos dos módulos necessários
const http = require('http')
const fs = require('fs')
const path = require('path')

// Método para criar um servidor local na porta 5000 usando o listen
http.createServer((req, res) => {

    // Veriifição da url atual, e o caminho que deve ter, se estiver na raiz chama o index.html se não, chama a propria url
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath =  path.join(__dirname, 'public', file)

    // Verifica se existe documento sendo requisitado que o servidor não possua
    const extname = path.extname(filePath)
    const allowedFileTypes = ['.html','.css', '.js']
    const allowed = allowedFileTypes.find(item => item == extname)

    // Se existir um documento como citado acima, no loop de verificação desse documento, o loop é encerrado
    if(!allowed) return 
    
    // Função com dois argumentos para ler o documento e exibir na página   
    fs.readFile(
       filePath,
    //    Callback para tratamento de erro e exibir o conteúdo
        (err, content) => {
            if (err) throw err

            res.end(content)
        }
    )
    // if(!allowed) return
    

}).listen(5000, () => console.log("Server is running..."))

