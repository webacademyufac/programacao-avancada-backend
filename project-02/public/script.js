const ul = document.querySelector('ul')
const input = document.querySelector('#input')
const form = document.querySelector('#form')

// função para coleta de dados do backend 
window.addEventListener('load', e =>{
    
    fetch(`http://localhost:3000/`)
        .then(content => content.json())
        // console.log(res.urls)

        .then(data => data.urls.map(({name, url}) => showElement({name, url})))
})

// função cria o elemento <li> com o conteudo composto de um nome dentro de um <a> com o href dele sendo a url como valor, fazendo uso de desestruturação de um object como parametro
function showElement({ name, url }) {
    const li = document.createElement('li')
    li.innerHTML = `<a target="_blank" href="${url}">${name}</a> <button onClick="removeElement(this)" class="remove">X</button>`
    li.classList.add("li-listener")
    ul.appendChild(li)
}

// Função que tem como argumento um object desestruturado com os chaves name e ur, que manda uma requisição com a url tratada da forma como se espera para adicionar o elemento no arquivo .json
function addElement({name, url}){
    const urlTratada = url.replace(" ","")//parse de espaço na url
    fetch(`http://localhost:3000/?name=${name}&url=${urlTratada}`)
}

function removeElement(element) {
    // faz uso do conteúdo do elemento atributo href de a, e joga pro fetch 
    const name = element.parentNode.children[0].textContent
    const href = element.parentNode.children[0].href
    const url = href.substring(0, href.length - 1);
    fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1`)

}

// chama a função através de submit
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // recolhe valor do input
    let { value } = input

    //sinalização na caixa do inbox da necessidade de corrigir os parametros
    if (!value) {
        input.style['border'] = '3px solid #f55945'
        alert('Preencha o campo!')
    }

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    // sinalização na caixa do inbox da necessidade de corrigir os parametros
    if (/!^http/.test(url))
        return alert('Digite a url da maneira correta.')
    // criação e inserção do elemento na pagina através da chamada de função responsavel
    addElement({ name, url })
    input.value = ''//remoção da sinalização na caixa do inbox da necessidade de corrigir os parametros
    input.style['border'] = '2px inset rgb(133, 133, 133)'

})