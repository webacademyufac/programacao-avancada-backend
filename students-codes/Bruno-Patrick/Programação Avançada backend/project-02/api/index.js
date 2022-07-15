/* Importação de todos os módulos necessários
para o funcionamento da API */
const http = require('http')
const URL = require('url')
const data = require('./urls.json')
const fs = require('fs')
const path = require('path')

/* Iniciando um servidor HTTP*/
http.createServer((req, res) => {
    
    /* Habilitando acesso provindo de endereços
    alheios à API (permitindo CORS) */
    res.writeHead(
        200,
        {"Access-Control-Allow-Origin": "*"}
    )

    /* Fazendo um parse no URL atual.
    Está usando Query Strings no URL, ou seja
    os valores que estão sendo passados na URL através da Query String
    estão sendo armazenados nas constantes name, url e del, respectivamente.
    */
    const { name, url, del } = URL.parse(req.url, true).query
    
    /* Fazendo uma verificação e retornando True ou False
    caso haja dentro urls no urls.json algum URL identico
    à URL passada na Query String
    URL igual = False e URL diferente = True */
    data.urls = data.urls.filter(item => item.url != url)

    /* Função que reescreve o JSON*/
    function writeFile(cb){
        
        fs.writeFile(
            path.join(__dirname, 'urls.json'),
            JSON.stringify(data, null, 2),
            err => {
                if (err) throw err;
                cb('Operação realizada com sucesso!')
            }
        )
    }

    /* Se name e url forem vazias devolve no escopo do HTML
    uma string no formato json do urls.json 
    Ou seja, se eu não estiver querendo fazer nenhuma ação (adicionar ou remover do json)
    ele devolver o estado atual do json */
    if(!name || !url) return res.end(JSON.stringify(data))
    
    /* Se del não for vazio, ou seja, caso eu esteja
    querendo deletar um valor do json ele executa a função
    que reescreve o json, nesse caso o json é reescrevido sem
    o valor que queremos deletar */
    if(del) return writeFile(message => res.end(message))

    /* Por fim, por eliminação, sobra a ação de adicionar
    que é como se houvesse if(name || url), mas como é
    a última ação possível, não há necessidade de algum if*/
    json = { // Objeto json com os valores name e url
        name:name,
        url:url
    }
    /* Por fim, adicionando dentro do json a url e name*/
    data.urls.push(json)


    return writeFile(message => res.end(message))
}).listen(3000, () => {
    console.log('API is running')
})