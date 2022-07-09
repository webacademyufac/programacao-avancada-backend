const table = document.getElementById("tabela_lista").getElementsByTagName('tbody')[0];
const nomeFavorito = document.querySelector('#nome_favorito')
const url = document.querySelector('#utl_favorito')
const form = document.querySelector('form')

// função que carrega os dados ao iniciar a pagina
async function load() {
// busca na API os dados, transforma para json e envia para função addElement para mostrat no html
    const res = await fetch("http://localhost:3000/")
        .then(data => data.json())
      res.urls.map((item) => addElement(item.name,item.url))  
}
// executa a função load
load()

// função para adicionar ou deletar um elemento

async function registerOrDelete(name, url, del){
    // monta URL 
    let parameters = `?name=${name}&url=${url}`;
    // verifica se o existe parametro para delatar a url
    if(del){
        parameters += "&del=1"
    }
    // envia os parameters para o servidor para cadastro ou para a exclusão
    const res = await fetch(`http://localhost:3000/${parameters}`)
    .then(data => data.text())
    console.log(res)
}

function addElement(name,url) {
   
   // conta a linhas da tabela dentro do tbody
    let e = table.rows.length
    // cria uma linha na tabela
    row = table.insertRow(e);
    // insere os dados nas colunas da tabela
    cel0 = row.insertCell(0)
    cel1 = row.insertCell(1)
    cel2 = row.insertCell(2)
    cel3 = row.insertCell(3)
    // escreve dentro da colunas da tabela
    cel0.innerHTML = e + 1
    cel1.innerHTML = `<a href="${url}" target="_blank">${name}</a>`
    cel2.innerHTML = url
    // cel3.innerHTML = `<button type="button" class="btn btn-danger btn-sm" onclick="removeElement(${e})"><i class="bi bi-trash"></i></button>`
    cel3.innerHTML = `<button type="button" onclick="removeElement(${e})">Excluir</button>`

    // enviar os arquivos para o servidor
}


function removeElement(element) {
    // pergunata se realmente quer remover o elemento
    if(confirm('Você tem certeza que deseja remover o elemento?')){
       // pega os valores do elemento clicado nome e url
       let rowTable = table.rows[element]
       let name = rowTable.cells.item(1).children[0].innerHTML
       let url = rowTable.cells.item(2).innerHTML
        //remove o elemento no servidor
       registerOrDelete(name,url,del=true)
       // remove o elemento da tabela
       table.deleteRow(element)
        
    }
}
/*escutando o evento submit*/
form.addEventListener('submit', (event) => {

    //Para o envio do formulário.
    event.preventDefault();

    //Pegando o valor do input do formulário.
    let value_nome = nomeFavorito.value
    let value_url = url.value

    //Verificando se o campo tem conteúdo
    if (!value_nome || !value_url)
        return alert('Preencha o campo!')

    /*Verifica a formatação do texto*/

    //Retornando mensagem caso a url tenha sido digitado de maneira correta
    if (!/^http/.test(value_url))
        return alert('Digite a url da maneira correta.')

    //chama a função que adiciona o elemento no HTML.
    addElement(value_nome, value_url)
    // chama a função que salva o arquivo no servidor 
    registerOrDelete(value_nome,value_url,del=false)

    //Fazendo a limpeza dos campos do formulário.
    url.value = ''
    nomeFavorito.value = ''
})