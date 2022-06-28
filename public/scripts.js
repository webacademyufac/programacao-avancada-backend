//Atribuindo as tags ul, input e form para objetos JavaScript
const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

function addElement({ name, url }) {
    
    const li = document.createElement('li')
    const a = document.createElement('a')
    
    const texto = document.createTextNode(name)
    a.setAttribute('href', url)
    a.setAttribute('target', '_blank')
    
    
    a.appendChild(texto)
    
    li.appendChild(a)

    ul.appendChild(li)


}

function removeElement(element) {

}

/*
Adiciona um escutador de eventos para o form na página,
que é engatilhado quando um submit é utilizado.
*/
form.addEventListener('submit', (event) => {
    event.preventDefault();     //determina em que condições o evento deve ser cancelado.

    let { value } = input   //recebe a informação inserida pelo usuário

    if (!value)     //Se value for nulo emite um aviso
        return alert('Preencha o campo!')

    const [name, url] = value.split(',')    //divide a informação em duas variáveis, a partir da vírgula

    if (!url)   
        //Se a URL for inválida emite um aviso
        return alert('O texto não está formatado da maneira correta.')

    if (!/^http/.test(url))     
        //Se o título for inválido emite um aviso
        return alert('Digite a url da maneira correta.')

    //Adiciona as informações à lista
    addElement({ name, url })

    //Remove da variável a informação inserida pelo usuário
    input.value = ''
})