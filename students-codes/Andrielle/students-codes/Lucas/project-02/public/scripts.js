const ul = document.getElementById("listaFavoritos")
const input = document.getElementById("inputFav")
const form = document.getElementById("formFav")

let aux = 0;

// Função que carrega o conteúdo da API.
async function load() {
    // fetch está como await para evitar que entre num esquema de promisse e só devolva o conteúdo após a iteração qua acontece em seguida.
    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    // Iterando no vetor com o conteúdo (JSON) que está vindo da API e adicionando-os no frontend.
    res.urls.map(({name, url}) => addElement({name, url}))
    console.log(res)
}

load()


    // Função encarregada de enviar os parametros esperados pela api para salvá-los no arquivo json.
function envJson ({name, url}) {
    fetch('http://localhost:3000/'+'?name='+name+'&url='+url)
}

    // Função encarregada de enviar os parametros esperados pela api para deletá-los do arquivo json.
function delJson ({name,url}) {
    fetch('http://localhost:3000/'+'?name='+name+'&url='+url+'&del=1')
}


    /* Função que que encarregada, na maior parte, por manipular os elementos na tela via DOM*/
function addElement({ name, url }) {

    // Criação das variáveis para serem inseridas, posteriormente, via appendChild.
    let li = document.createElement("li")
    let cabeçalho = document.createElement("span")
    let link = document.createElement("a")
    let divBtn = document.createElement("div")
    let botao = document.createElement("button")
    let iconeRmv = document.createElement("i")
    let iditem = document.createElement("span")

    // Alteração estética na cor do link
    link.href = url
    link.innerHTML = url

    // Adiciona uma classe ao botão de remover
    botao.className = "btnRemove"
    // ícone importado do font-awesome
    iconeRmv.className = "fa fa-trash"
    
    botao.appendChild(iconeRmv)
    divBtn.appendChild(botao)
    iditem.appendChild(document.createTextNode(aux+1))
    aux++
    cabeçalho.appendChild(document.createTextNode(name))
    li.appendChild(iditem)
    li.appendChild(cabeçalho)
    li.appendChild(link)
    li.appendChild(divBtn)

    ul.appendChild(li)  
    input.value = ''


    // Função que recebe como elemento alvo do evento "botão"(btnRemove) e captura o nome e url correspondentes ao elemento
    removeElement(botao, {name, url})
}


// Remove o elemento da tela e do Json. "element" é o alvo repassado quando chamar a função (botao)
function removeElement(element, {name, url}) {

    element.addEventListener('click', () => {
        if (confirm(`Tem certeza que quer deletar ${name} da sua lista?`)){
            // Ao clicar no alvo, chama a função delJson, e passa o name e url para remoção no Json
            delJson({name,url})
            element.parentElement.parentElement.remove()
        }
    })
}


form.addEventListener('submit', (event) => {
    event.preventDefault();


    let { value } = input

    if (!value) 
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url) 
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url)) 
        return alert('Digite a url da maneira correta.')
    
    // Chama a função addElement e passa os valores ({name,url}) para serem adicionados na tela
    addElement({ name, url })
    // Chama a função envJson que recebe o name e url a serem armazenados no arquivo Json
    envJson({name, url})

    input.value = ''

})
