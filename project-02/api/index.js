// Configuração inicial
const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Link = require('./models/Links')

//Forma de ler JSON
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())


// Rotas da API
app.post('/link', async (req,res)=>{
    
    // req.body
    const {name, url, del} = req.body

    const link = {
        name,
        url,
        del
    }

    // create
    try{
        await Link.create(link)
        res.status(201).json({massage: "Deu certo"})
    }catch (error) {
        res.status(500).json({error:error})
    }
})

// Rota incial /endpoint
app.get('/',(req,res)=>{
    // Mostrar requisição

    res.json({message: "Oi express!"})
})


// entregar uma porta

const DB_USER = "abimael"
const DB_PASSWORD = "20190300029"

mongoose
    .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apilinks.g7n0w.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("conectamos ao mongoDB")
        app.listen(3000)
    })
    .catch(err => console.log(err))


// /*
// Esse codigo cria uma API para servir ao frontend da aplicação que simula o favoritos do navegador. 
// */
// Importação de módulos
// const http = require('http')
// const URL = require('url')
// const fs = require('fs')
// const path = require('path')
// // Importação do conteúdo do arquivo JSON
// const data = require('./urls.json')
// // Método para criar um servidor local na porta 3000 usando o listen
// http.createServer((req, res) => {
//     // Configurando o cabeçalho para permitir requisição externa ao servidor
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', 'POST,GET,DELETE,UPDATE')
//     res.setHeader('Access-Control-Max-Age', '256100')

//     // Desestruturação da query string da URL para obter os valores passados como name, url e del
//     const { name, url, del } = URL.parse(req.url, true).query

//     // Função para reescrever o documento, tanto no delete quanto no create
//     function writeFile(cb) {
//         fs.writeFile(
//             path.join(__dirname, 'urls.json'),
//             JSON.stringify(data, null, 2),
//             err => {
//                 if (err) throw err
//                 cb(JSON.stringify(data))
//             }
//         )
//     }
    
//     // Mostra o conteúdo
//     if (!name || !url) {
//         return res.end(JSON.stringify(data))
//     }
//     // Deleta o conteúdo passado para ser excluído e exibe o conteúdo após a alteração
//     if (del) {
//         data.urls = data.urls.filter(item => item.url != url)
//         writeFile(message => res.end(message))
//         return data.urls
//     }
//     // Cria o conteúdo no documento e após a alteração exibe o documento 
//     data.urls.push({name, url})
//     writeFile(message => res.end(message))
//     return data.urls

// }).listen(3000, () => console.log('Api is running.'))