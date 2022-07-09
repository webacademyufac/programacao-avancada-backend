const input = document.querySelector('input')
const form = document.querySelector('form')
const cardsgroup = document.getElementById('cards-group')

async function load(){
    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    res.urls.map( ( { name, url} ) => addElement( {name, url } ) )
}; load();

function addElement({ name, url }) {
    //...
    const divExt = document.createElement('div')
    divExt.classList.add('card')
    divExt.classList.add('text-center')

    const divInt = document.createElement('div')
    divInt.classList.add('card-head')

    const trash = document.createElement('img')
    trash.setAttribute('src','https://i.imgur.com/fIXZoHb.png')
    trash.classList.add('trash')

    const edit = document.createElement('img')
    edit.setAttribute('src','https://i.imgur.com/HZaPoQb.png')
    edit.classList.add('edit')

    const link = document.createElement('a')
    link.setAttribute('href',`${url}`)
    link.setAttribute('target','_blank')
    link.textContent = `${name}`

    divInt.appendChild(trash)
    divInt.appendChild(edit)
    divExt.appendChild(divInt)
    divExt.appendChild(link)
    cardsgroup.appendChild(divExt)


    removeElement(trash, {name, url}) // Callback para função
}

function removeElement(element, {name, url}) {
    //...
    element.addEventListener('click', () => { //Adiciona um event listener no ícone
        if (confirm('Tem certeza que quer deletar?')){
            fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1`)
            element.parentNode.parentNode.remove() //remove o elemento anterior, no caso toda a estrutura da <card>
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