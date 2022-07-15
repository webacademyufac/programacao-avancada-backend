const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

//função assicrona para buscar o elemento no banco de dados 
async function load(){
    const res = await fetch('http://localhost:3000/').then(data => data.json())
    res.urls.map(({name , url}) => addElement({name ,url}))
}
load()

//funcao para adicionar na lista no html
function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement("a")
    const trash = document.createElement("span")

    a.href = url
    a.innerHTML = name
    a.target = "_blank"
    


    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash)

    li.append(a)
    li.append(trash)
    ul.append(li)
}
//funcao para remover na lista no html
function removeElement(element) {
    if (confirm('Tem certeza que deseja deletar?'))
        element.parentNode.remove()
}

//escutador para executar o submit no html
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