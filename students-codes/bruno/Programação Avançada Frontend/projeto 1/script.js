const input = document.querySelector('input')
const form = document.querySelector('form')
const cardsgroup = document.getElementById('card-group')
const search = document.getElementById('search-form')

async function load(){
    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    res.urls.map( ( { name, url} ) => addElement( {name, url } ) )
}; load();

function addElement({ name, url }) {
    //...
    const divCard = document.createElement('div')
    divCard.classList.add('card')

    const divContent = document.createElement('div')
    divContent.classList.add('card-content')

    const link = document.createElement('a')
    link.setAttribute('href',`${url}`)
    link.setAttribute('target','_blank')
    // link.classList.add('card-text')
    link.textContent = `${name}`

    const divActions = document.createElement('div')
    divActions.classList.add('card-actions')

    const trashButton = document.createElement('img')
    trashButton.setAttribute('src','./icons/trash-button.svg')

    divContent.appendChild(link)
    divActions.appendChild(trashButton)
    divCard.appendChild(divContent)
    divCard.appendChild(divActions)
    cardsgroup.appendChild(divCard)

    removeElement(trashButton, {name, url}) // Callback para função
}

function removeElement(element, {name, url}) {
    //...
    element.addEventListener('click', () => { //Adiciona um event listener no ícone
        if (confirm('Tem certeza que quer deletar?')){
            fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1`)
            element.parentNode.remove() //remove o elemento anterior, no caso toda a estrutura da <card>
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

    addElement({ name, url })
    fetch(`http://localhost:3000/?name=${name}&url=${url}`)

    input.value = ''
})

search.addEventListener('submit', (event) => {

    event.preventDefault();

    let { value } = input

    if(!value) return alert('Preencha o Campo!')

})