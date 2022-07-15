/* 
Esse código cria um servidor a partir da utilização do módulo http. Está sendo servido o HTML, o CSS e o JavaScript.
*/

// Importação dos módulos.
const http = require('http')
const fs = require('fs')
const path = require('path')

// Método para criar o servidor local, rodando na porta 5000 (especificação como argumento do método listen, chamado ao final do escopo do createServer).
http.createServer((req, res) => {

    // Estratégia para o nome do documento e caminho para ele de maneira dinâmica.
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, file)

    // Estratégia para verificar se existe algum documento sendo requisitado que o servidor não está servindo.
    const extname = path.extname(filePath)
    const allowedFileTypes = ['.html', '.css', '.js','.svg']
    const allowed = allowedFileTypes.find(item => item == extname)
    // Se allowed for falso, a aplicação entra no if e faz um retorno simplesmente para evitar que o servidor para de rodar por não conseguir resolver todas as requisições de documentos de tipos diferentes dos que são aceitos.
    if (!allowed) return

    // Função com dois argumentos para ler o documento e exibir na página.
    fs.readFile(
        filePath,
        // Callback para tratar erro e a exibição do conteúdo.
        (err, content) => {
            if (err) throw err
            res.end(content)
        }
    )

}).listen(5000, () => { console.log('Server is running in port 5000') })