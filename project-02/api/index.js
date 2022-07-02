const http = require('http')
const data = require('./urls.json')
const URL = require('url')
const fs = require('fs')
const path = require('path')

// Escrevendo no arquivo através do writeFile, passando o caminho do arquivo JSON.
function writeFile(cb) {
    fs.writeFile(
        path.join(__dirname, 'urls.json'),
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err
            cb('Operação realizada com sucesso.')
        }
    )
}

http.createServer((req, res) => {

    // Controle da política CORS.
    // res.writeHead(
    //     200,
    //     {"Access-Control-Allow-Origin":"*"}
    // )

    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, UPDATE')
    res.setHeader('Access-Control-Max-Age', 2592000)

    const { name, url, del } = URL.parse(req.url, true).query

    //Se não tiver nenhum valor em name e url mostra os dados do arquivo JSON.
    if (!name || !url)
        return res.end(JSON.stringify(data))
        
    // Se del tiver valor = deletar
    if (del) {
        data.urls = data.urls.filter(item => item.url != url)
        return writeFile(message => res.end(message))
    }

    //Se name e url tiverem valores retorna create
    data.urls.push({ name, url })
    return writeFile(message => res.end(message))

}).listen(8000, () => console.log('API is running'))

// -------------- API COM MONGODB --------------

// const express = require('express')
// const mongoose = require('mongoose')
// const app = express()

// app.use(
//     express.urlencoded({
//         extended: true,
//     }),
// )
    
// app.use(express.json())
    
// const linkRoutes = require('./routes/linkRoutes')

// app.use('/link', linkRoutes)

// app.get('/', (req, res) => {
//     res.json({message: 'Oi express!'})
// })

// const DB_USER = 'root'
// const DB_PASSWORD = encodeURIComponent('root')

// mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@programacao-avancada.9ctapaf.mongodb.net/test?retryWrites=true&w=majority`)
//     .then(() => {
//         console.log('Conectado ao MongoDB!')
//         app.listen(8000)
//     })
//     .catch((err) => console.log(err))