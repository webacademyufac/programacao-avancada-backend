/* 
Esse código cria um servidor a partir da utilização do módulo http. Está sendo servido o HTML, o CSS e o JavaScript.
*/

//importando os módulos 
const http = require('http')
const fs = require('fs')
const path = require('path')

//método para criar o sevidor local rodando na porta 5000 (especificação como argumento do método listen, chamado ao final do escopo do createServer)
http.createServer((req, res) => {


    // Forma estratégica para chegar ao documento utilizando p path importando anteriomente
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)


    // console.log(file) 

    //verificação para saber se tem algum documento sendo requisitado que sevidor não está servindo
    const extname = path.extname(filePath)
    const allowedFileTypes = ['.html', '.css', '.js']
    const allowed = allowedFileTypes.find((item => item == extname))


    // se allowed for falso, a aplicação entra no if e faz um retorno simplesmente para evitar que o servidor para de rodar por não conseguir resolver todas as requisições de documentos de tipos diferentes dos que são aceitos
    if(!allowed) return 

    //função com dois parâmetros para ler o documento e exibir na página 
    fs.readFile(
        filePath,
        //call back para tratar o erro e exibição do contéudo 
        (err, content) => {
            if (err) throw err
            res.end(content)
        }
     )

}).listen(5000, () => { console.log('Server is running.') })
