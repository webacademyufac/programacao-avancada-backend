const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {

    
    res.writeHead(200 , {"Access-Control-Allow-Origin": "*"});

    //destruturação da query string da URL para obter os valores do name url e para deletar
   const { name,url,del } = URL.parse(req.url,true).query
    //mostrar o conteudo do Json
   if(!name || !url) 
      return res.end(JSON.stringify(data));

   if(del) {
      data.urls = data.urls.filter(item => item.url != url);
      return writeFile(message => res.end(message));
   }

   data.urls.push({name, url}); 
   return writeFile(message => res.end(message));
   
}).listen(3000, () => console.log('API is running'))

function writeFile(cb) {
   fs.writeFile(
      path.join(__dirname, 'urls.json'),
      JSON.stringify(data, null, 2),
      err => {
         if (err) throw err;
         cb('Operacao realizada com sucesso.');
      })
}



//fetch('http://localhost:3000/').then(data => data.json()).then(data => console.log(data))