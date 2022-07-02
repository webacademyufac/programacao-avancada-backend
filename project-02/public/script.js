const ul = document.querySelector('ul')
const input = document.querySelector('#input')
const form = document.querySelector('#form')

// Assim que a página é carregada faz uma requisição ao back-end
window.addEventListener('load', e =>{
    // O conteúdo da requisição é transformado de JSON para object e em seguida mapeado os dados passando chamando a função de exibir no html
    fetch(`http://localhost:3000/`)
        .then(content => content.json())
        .then(data => data.urls.map(({name, url}) => showElement({name, url})))
})

// Função que tem como argumento um object desestruturado com os chaves name e url, para criação do elemento da lista
function showElement({ name, url }) {
    const li = document.createElement('li')
    li.innerHTML = `<a target="_blank" href="${url}">${name}</a> <button onClick="removeElement(this)" class="remove">X</button>`
    li.classList.add("li-listener")
    ul.appendChild(li)
    // li = `<li class="li-listener" id=""> <a target="_blank" href="${url}">${name}</a> <button onClick="removeElement(this)" class="remove">X</button></li>`
    // ul.innerHTML = li

}

// Função que tem como argumento um object desestruturado com os chaves name e ur, que manda uma requisição com a url tratada da forma como se espera para adicionar o elemento no arquivo .json
function addElement({name, url}){

    const urlTratada = url.replace(" ","")
    fetch(`http://localhost:3000/?name=${name}&url=${urlTratada}`)
}
// trabalhar nessa função
function removeElement(element) {
    const name = element.parentNode.children[0].textContent
    const href = element.parentNode.children[0].href
    const url = href.substring(0, href.length - 1);
    fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1`)

}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) {
        input.style['border'] = '3px solid #f55945'
        alert('Preencha o campo!')
    }

    const [name, url] = value.split(',')

    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    if (/!^http/.test(url))
        return alert('Digite a url da maneira correta.')

    console.log("add")
    addElement({ name, url })
    input.value = ''
    input.style['border'] = '2px inset rgb(133, 133, 133)'

})


// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     let { value } = input

//     if (!value)
//         return alert('Preencha o campo!')

//     const [name, url] = value.split(',')

//     if (!url)
//         return alert('O texto não está formatado da maneira correta.')

//     if (!/^http/.test(url))
//         return alert('Digite a url da maneira correta.')

//     addElement({ name, url })

//     input.value = ''
// })
