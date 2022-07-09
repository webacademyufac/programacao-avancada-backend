//Atribuindo as tags ul, input e form para objetos JavaScript
const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

// Função que carrega o conteúdo da API.
async function load() {
    
    // fetch está como await para evitar que entre num
    // esquema de promisse e só devolva o conteúdo após a 
    // iteração qua acontece em seguida.
    const res = await fetch('http://localhost:3000/')
        .then(data => data.json())
    
    // Iterando no vetor com o conteúdo (JSON) que está vindo
    // da API e adicionando-os no frontend.
    res.urls.map(({name, url}) => addElement({name, url}))
}

load()

function addElement({ name, url }) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    const trash = document.createElement('span')

    a.href = url
    a.innerHTML = name
    a.target = "_blank"

    trash.innerHTML = "x"
    trash.onclick = () => removeElement(trash)

    li.append(a)
    li.append(trash)
    ul.append(li)
}

function removeElement(element) {
    if (confirm('Tem certeza que deseja deletar?'))
        el.parentNode.remove()
}

/*
Adiciona um escutador de eventos para o form na página,
que é engatilhado quando um submit é utilizado.
*/
form.addEventListener('submit', (event) => {
    //determina em que condições o evento deve ser cancelado.
    event.preventDefault(); 

    //recebe a informação inserida pelo usuário
    let { value } = input 

    //Se value for nulo emite um aviso
    if (!value) 
        return alert('Preencha o campo!')

    //divide a informação em duas variáveis, a partir da vírgula
    const [name, url] = value.split(',')

    if (!url) 
        //Se a URL for inválida emite um aviso
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url)) 
        //Se a URL não obedecer o padrão emite um aviso
        return alert('Digite a url da maneira correta.')

    //Adiciona as informações à lista
    addElement({ name, url })

    //Remove da variável a informação inserida pelo usuário
    input.value = ''
})