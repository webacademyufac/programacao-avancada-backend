/*
Esse código cria um servidor Node.JS utilizando o módulo http. Criando rotas para servir o projeto-02.
Código depreciado pelo existente na pasta api
*/

const http = require('http');
const fs = require('fs');
const path = require('path');

/*
Criação de um servidor na porta local 5000, utilizando o módulo http
*/

http.createServer((req, res) => {
    /*
    Fazendo tratamento dos arquivos servidos pelo servidor rodando na porta 5000.
    */
    
    // tratamento, se tiver / retonar index.html
    const file = req.url === '/' ? 'index.html' : req.url;

    const filePath = path.join(__dirname, 'public', file);

    console.log(file);

    const extname = path.extname(filePath);

    const allowedFileTypes = ['.html', '.css', '.js'];

    const allowed = allowedFileTypes.find(item => item == extname);

    if(!allowed) return 
    
    fs.readFile(filePath, (err, content) => {
        if (err) throw err;
        res.end(content);
    });

}).listen(5000, () => {console.log('Server is running.')});

