const ul = document.querySelector('ul')
const input = document.querySelector('#input')
const form = document.querySelector('#form')

async function load() {    

    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    // console.log(res.urls)
    res.urls.map(({name, url}) => addElement({name, url}))

}
load()

function addElement({
    name,
    url
}) {

    const li = document.createElement('li')
    li.innerHTML = `<a target="_blank" href="${url}">${name} </a> <button onClick="removeElement(this)" class="remove">X</button>`
    li.classList.add("li-listener")
    ul.appendChild(li)

}

function removeElement(element) {
    // console.log(element.parentNode)

    // element.parentNode.style['background'] = 'red'
    element.parentNode.style['visibility'] = 'hidden'
    element.parentNode.remove()

}

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

    console.log("add")
    addElement({
        name,
        url
    })
    input.value = ''
    input.style['border'] = '2px inset rgb(133, 133, 133)'

})
