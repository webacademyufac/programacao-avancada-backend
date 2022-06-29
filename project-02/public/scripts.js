const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

// Adiciona um elemento com o nome e url, inserindo também um botão para remoção do mesmo.
function addElement({ name, url }) {
    document.querySelector("#links").insertAdjacentHTML("beforeend", `<li>${name}: <a href="${url}">${url}</a> <button type="button" class="remove" onclick="removeElement(this)">Remover</button> </li>`)
}

// Função que remove um elemento da página html.
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

    // Chama a função de adicionar elemento, passando o nome e url passado pelo usuário. 
    addElement({ name, url })

    // Limpa o campo input após a inserção dos valores.
    input.value = ''
})