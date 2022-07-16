const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

async function load(){
    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    res.urls.map( ( { name, url} ) => addElement( {name, url } ) )
}; load();

function addElement({ name, url }) {
    //...
    fetch(`http://localhost:3000/?name=${name}&url=${url}`)
    const tbody = document.getElementById('content-table') //Captura o 
    const tr = document.createElement('tr') //Cria um elemento <li></li>
    const thName = document.createElement('th')
    const thURL = document.createElement('th')
    const thAction = document.createElement('th')
    const deleteButton = document.createElement('button') //Cria um elemento <i></i>
    const a = document.createElement('a')

    a.setAttribute('href',`${url}`)
    a.setAttribute("target","_blank")
    a.textContent = `${url}`

    deleteButton.classList.add('btn') 
    deleteButton.classList.add('btn-sm') 
    deleteButton.classList.add('btn-warning') 
    deleteButton.classList.add('font-weight-bold') 
    deleteButton.textContent = 'Apagar'

    thName.ATTRIBUTE_NODE = 'scope=row'
    thName.textContent = `${name}`

    thURL.ATTRIBUTE_NODE = 'scope=row'
    thURL.appendChild(a)

    thAction.appendChild(deleteButton)
    tr.appendChild(thName)
    tr.appendChild(thURL)
    tr.appendChild(thAction)
    tbody.appendChild(tr)

    removeElement(deleteButton, {name, url}) // Callback para função
}

function removeElement(element, {name, url}) {
    //...
    element.addEventListener('click', () => { //Adiciona um event listener no ícone
        if (confirm('Tem certeza que quer deletar?')){
            fetch(`http://localhost:3000/?name=${name}&url=${url}&del=1`)
            element.parentNode.parentNode.remove() //remove o elemento anterior, no caso toda a estrutura da <li>
        }
    })

    element.addEventListener('mousemove', () => {
        element.parentNode.parentNode.classList.add('delete')
    })
    element.addEventListener('mouseleave', () => {
        element.parentNode.parentNode.classList.remove('delete')
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

    input.value = ''
})