/*
    modulo para criação de um servidor com rotas, fazendo uso de http e suas funções
     para subir e rotear os arquivos necessarios para a execução da pagina
*/

// importaçao de modulos
const http = require('http')
const fs = require('fs')
const path = require('path')


//cria o server com argumetnos req(uest) e res(ponse)
http.createServer((req, res) =>{
    //validador de pagina para exibição de conteudo selecionado para a mesma
    if(req.url === '/'){
        //função para exibição do conteudo com argumentos: diretorio,(erro,conteudo), com esses ultimos sendo uma callback
        fs.readFile(path.join(__dirname, 'public','index.html'), (err, content) => {
            //tratamento de erro
            if (err) throw err
            
            //exibe o conteudo desejado na pagina
            res.end(content)
        })
    }
    
//direciona o servidor para porta desejada e informa que está em execução, caso esteja
}).listen(5000, () => console.log("server's running"))

