const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

const lista = document.getElementById("urls")

const button = document.getElementById("main-search-button")

function addElement({ name, url }) {   

    console.log('passou aqui')

    //pegando o documento criado no html <li>
    const li = document.createElement('li')   
    const documentHTML = document.createElement("a")
    const trash = document.createElement("span")

    documentHTML.href = url
    documentHTML.innerHTML = name    
    documentHTML.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash)

    li.append(documentHTML)
    li.append(trash)
    ul.append(li)
}

function removeElement(id) {

    if (confirm('Deseja deletar esse componente da lista?'))
    
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

    addElement({ name, url })

    input.value = ''
})