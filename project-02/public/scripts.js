const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

function addElement({ name, url }) {
    //...
}

function removeElement(element) {
    //...
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