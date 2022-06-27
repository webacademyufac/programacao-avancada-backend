const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

function addElement({ name, url }) {
    let dadoNome, dadoUrl = ''
    localStorage.setItem(dadoNome , name )
    localStorage.setItem(dadoUrl , url)
    console.log(localStorage.getItem(dadoNome))
    var element = document.getElementById('list')
    element.innerHTML = ` <li class="list-group-item" ><a href="${localStorage.getItem(dadoUrl)}"> ${localStorage.getItem(dadoNome)}</a></li>`


}


function removeElement(element) {
    //...
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) 
        return alert('Preencha o campo!')

    const [name, url] = value.split(', ')
    

    if (!url) 
        return alert('O texto não está formatado da maneira correta.')

    if (!/^https/.test(url)) 
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })


    input.value = ''
})

