/*
Esse codigo cria uma API para servir ao frontend da aplicação que simula o favoritos do navegador. 
*/


// Importação dos módulos.
const http = require('http')

const URL = require('url')
const fs = require('fs');
const path = require('path');

//Importação do documento urls.json, o conteúdo do documento vai para o objeto data. 
const data = require('./urls.json')

//Sevidor roda na porta 3000
http.createServer((req, res) => {

    
    res.writeHead(200 , {"Access-Control-Allow-Origin": "*"});


   //Destruturação da query string da URL para obter os valores associados as chaves : name url e del(para deletar, que no caso é índice)
   const { name,url,del } = URL.parse(req.url,true).query


   //Mostrar o conteúdo do Json
   if(!name || !url) 
      return res.end(JSON.stringify(data));

   //Deleta conforme o índice informado 
   if(del) {
      data.urls = data.urls.filter(item => item.url != url);
      return writeFile(message => res.end(message));
   }

   //Insere no json o nome e url informados 
   data.urls.push({name, url}); 
   return writeFile(message => res.end(message));
   
}).listen(3000, () => console.log('API is running, pao')) // configuração da porta que API está rodando

//função para escrever no documento JSON. Tanto deletando como criando 
function writeFile(cb) {
   fs.writeFile(
      path.join(__dirname, 'urls.json'),
      JSON.stringify(data, null, 2),
      err => {
         if (err) throw err;
         cb('Operacao realizada com sucesso.');
      })
}



