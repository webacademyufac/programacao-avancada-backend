const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

function addElement({ name, url }) {
    const li = document.createElement('li')
    const apaga = document.createElement('button')
    const site = document.createElement('span')
    const link = document.createElement('a')
    
    site.innerHTML = name
    link.innerHTML = url
    link.href = url
    apaga.innerHTML = 'Apagar'
    apaga.onclick = () => removeElement(apaga)

    li.append(site)
    li.append(link)
    li.append(apaga)
    ul.append(li)
}

function removeElement(element) {
    if (confirm('Tem certeza que deseja remover o link?'))
        element.parentNode.remove(element)
}

// Adicionando ao formulário um escutador de evento que atende ao "submit".
form.addEventListener('submit', (event) => {

    // Previne que o usuário mande um valor que não está dentro dos parâmetros.
    event.preventDefault();

    // Atribuindo à uma variável a entrada do usuário.
    let { value } = input

    // Condição para voltar um alerta se o usuário não preencher o campo.
    if (!value)
        return alert('Preencha o campo!')

    // Array de duas posições, guardando o nome e url fornecida pelo usuário, utilizando split para separar por vírgula.
    const [name, url] = value.split(',')

    // Condição para verificar a formatação do nome passado pelo usuário.
    if (!name)
        return alert('O texto não está formatado da maneira correta.')

    // Condição que verifica através do método test se a url passada pelo usuário começa com http.
    if (!/^http/.test(url))
        return alert('Digite a url da maneira correta.')

    // Adiciona o elemento nome e url. 
    addElement({ name, url })

    // Limpa o campo input após a inserção dos valores.
    input.value = ''
})