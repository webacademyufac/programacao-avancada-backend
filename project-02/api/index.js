const http = require('http')
const data = require('./urls.json')
const URL = require('url')


http.createServer((req, res) => {

    

    const { name, url, del } = URL.parse(req.url, true).query
    //Se não tiver nenhum valor em name e url mostra a string 'show'
    if(!name || !url)
        return res.end('show')
    // Se del tiver valor = deletar
    if(del)
        return res.end('delete')
    //Se name e url tiverem valores retorna create
    return res.end('create')

}).listen(8000, () => console.log('API is running'))
