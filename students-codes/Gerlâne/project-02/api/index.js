/*
Código da criação do servidor express, suas atribuições e conexão com o banco de dados
*/

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const routes = require('./routes');

/*
Conexão com o banco de dados através do módulo mongoose através da string connect
*/
mongoose.connect('mongodb+srv://admin:TLHQk2IfqmQwsCwl@cluster0.imewt.mongodb.net/favorites?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

/*
Cabeçalho de permissões do CORS
*/
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
    "optionsSuccessStatus": 204
}

/*
Atribuição das políticas do CORS, criação da aplicação JSON, e utilização das rotas do arquivo routes.js
*/
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

/*
Atribuição da porta onde a aplicação express estão sendo servida
*/
app.listen(3000, () => {
    console.log(`Server is running on port 3000.`);
});

/*
Código utilizando arquivo JSON e protocolo http para realizar a manipulação dos dados

const http = require('http');
const data = require('./urls.json');
const URL = require('url');
const fs = require('fs');
const path = require('path');

//Função para escrever os links no arquivo urls.json
function writeFile(cb){
    fs.writeFile(
        path.join(__dirname, 'urls.json'),
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err;
            cb('Operação realizada com sucesso');
        }
    )
}

// criando servidor na porta 3000 para API do projeto-02
http.createServer((req, res) => {

    //Tratamento do CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, UPDATE');
    res.setHeader('Access-Control-Max-Age', 2592000);

    console.log(URL.parse(req.url, true).query);
//desestruturação da url para identificação dos parametros da query
    const { name, url, del } = URL.parse(req.url, true).query;

//Se não tiver name e url, retona as urls presentes no arquivo urls.json
    if(!name || !url)
        return res.end(JSON.stringify(data));
//Se tiver o terceiro parametro del, retornar as urls presentes no arquivo urls.json, exceto a que foi passada para ser excluída.
//Após é chamada a função que reescreve o arquivo urls.json  
    if(del){
        data.urls = data.urls.filter(item => item.url != url);
        return writeFile(message => res.end(message));
    }
// se tiver name, url, elas são acrescentadas no arquivo urls.json
    data.urls.push({name, url});
    return writeFile(message => res.end(message));

}).listen(3000, () => console.log('API is running.'))
*/