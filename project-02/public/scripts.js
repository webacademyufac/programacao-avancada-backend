const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

function addElement({ name, url }) {
    document.querySelector("#links").insertAdjacentHTML("beforeend", `<li>${name}: ${url} <button type="button" class="remove" onclick="removeElement()">Remove</button> </li>`)
}

function removeElement() {
    const list = document.getElementById("links");
    list.removeChild(list.lastElementChild);

    // const node = document.getElementById("#links");
    // node.addEventListener('click', function handleClick(event){
    //     node.remove()
    // })
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