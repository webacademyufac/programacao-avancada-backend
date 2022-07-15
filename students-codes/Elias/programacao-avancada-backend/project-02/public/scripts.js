const input = document.querySelector('input')
const form = document.querySelector('form')

var tabela = document.getElementsByTagName('tbody')[0];
var lixeira = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
<path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>`

async function load(){
   const res = await fetch(`http://localhost:3000/`)
               .then(data => data.json())
    res.urls.map(({name,url}) => readElement({name,url}))
}
   
load()


function readElement({ name, url }) {
    tabela.innerHTML += `<tr id='${name}'><td class="text-center"> <a href='${url}' target='_blank'> ${name} </a> </td><td class="text-center"><button type="button" class="btn btn-danger btn-sm" onclick="removeElement('${name}','${url}'),'click'">${lixeira}</button></td></tr>`
}

async function addElement({ name, url }) {
    fullURL = "http://localhost:3000?name=" + name + "&url=" + url
    const res = await fetch(fullURL)
               .then(data => data.json())
    res.urls.map(({name,url}) => readElement({name,url}))
}

function removeElement(element) {
    var node = document.getElementById(element);
    tabela.removeChild(node)
}

async function removeElement(name, url ) {
    fullURL = "http://localhost:3000?name=" + name + "&url=" + url + "&del=1"
    const res = await fetch(fullURL)
        .then(data => data.json()  )
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impedir o envio do link até que a entrada de dados do usuário esteja correta.

    let { value } = input

    if (!value) //valida se a entrada está em branco
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')

    if (!url) //valida se a entrada do texto está formatada da maneira correta
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url)) //valida se a entrada da URL está formatada da maneira correta
        return alert('Digite a url da maneira correta.')

    readElement({ name, url }) // Adicionar na lista de favoritos 

    addElement({ name, url })

    input.value = ''
})