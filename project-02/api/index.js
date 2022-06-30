const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')

function writeFile(cb){
    fs.writeFile(
       path.join(__dirname,'urls.json'),
       JSON.stringify(data, null, 2),
       err => {
           if (err) throw err
           cb('Operação realizada com sucesso.')
       })}
http.createServer((req, res) => {    
    
    const { name, url, del } = URL.parse(req.url, true).query
    //Se não tiver nenhum valor em name e url mostra a string 'show'
    


    if(!name || !url)
        return res.end(JSON.stringify(data))
    // Se del tiver valor = deletar
    if(del){
        data.urls = data.urls.filter(item => item.url != url)

        console.log(data.urls)
        return writeFile(message => res.end(message))
    }
    

    data.urls.push({name,url})
    return writeFile(message => res.end(message))
    //Se name e url tiverem valores retorna create
    

}).listen(8000, () => console.log('API is running'))
