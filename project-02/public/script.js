const ul = document.querySelector('ul')
const input = document.querySelector('#input')
const form = document.querySelector('#form')

// função para coleta de dados do backend 
async function load() {    

    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    // console.log(res.urls)
    res.urls.map(({name, url}) => addElement({name, url}))

}
load()

// função cria o elemento <li> com o conteudo composto de um nome dentro de um <a> com o href dele sendo a url como valor 
function addElement({
    name,
    url
}) {
    const li = document.createElement('li')
    li.innerHTML = `<a target="_blank" href="${url}">${name} </a> <button onClick="removeElement(this)" class="remove">X</button>`
    li.classList.add("li-listener")
    ul.appendChild(li)

}

// função para remover pai do elemento clicado com todo seu conteudo
function removeElement(element) {
    // console.log(element.parentNode)

    // element.parentNode.style['background'] = 'red'
    // element.parentNode.style['visibility'] = 'hidden'
    element.parentNode.remove()

}

// "ouvinte" do botão enviar 
form.addEventListener('submit', (event) => {
    event.preventDefault();

    let {
        value
    } = input

    if (!value) {
        input.style['border'] = '3px solid #f55945'
        alert('Preencha o campo!')
    }

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (/!^http/.test(url))
        return alert('Digite a url da maneira correta.')

    // console.log("add")
// criação e inserção do elemento na pagina através da chamada de função responsavel
    addElement({
        name,
        url
    })
    input.value = ''
    input.style['border'] = '2px inset rgb(133, 133, 133)'

})
