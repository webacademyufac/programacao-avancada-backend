const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
   const { name,url,del } = URL.parse(req.url,true).query

   const options = {
      'Access-Control-Allow-Origin': '*'
   }

   res.writeHead(200, options);

   if(!name || !url) 
      return res.end(JSON.stringify(data))

   if(del) {
      data.urls = data.urls.filter(item => (item.url != url && item.name != name));
      return writeFile(message => res.end(message));
   }

   data.urls.push({name, url});
   return writeFile(message => res.end(message));
}).listen(5000, () => console.log('API is running'))

function writeFile(cb) {
   fs.writeFile(
      path.join(__dirname, 'urls.json'),
      JSON.stringify(data, null, 2),
      err => {
         if (err) throw err;
         cb('Operação realizada com sucesso.');
      })
}

