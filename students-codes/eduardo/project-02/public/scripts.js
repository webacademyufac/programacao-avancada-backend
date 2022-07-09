const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

// Função que carrega o conteúdo da API.
// async function load(){
//  // fetch está como await para evitar que entre num esquema de promisse e só devolva o conteúdo após a iteração qua acontece em seguida.
//    const res = await fetch('http://localhost:3000/')
//     .then(data => data.json())
//     // Iterando no vetor com o conteúdo (JSON) que está vindo da API e adicionando-os no frontend.
//     res.urls.map((name, url) => addElement(name, url))
// }
// load()

//Função para inserir valor digitado no json








// Adiciona um elemento com o nome e url, inserindo também um botão para remoção do mesmo.
function addElement({ name, url }) {
    document.querySelector("#links").insertAdjacentHTML("beforeend", `<li>${name}: <a href="${url}">${url}</a> <button type="button" class="remove" onclick="removeElement(this)">X</button> </li>`)
    
}

// Função que remove um elemento da página html.
function removeElement(element) {
    const nome = element.parentNode.textContent.split(':')
    const url = element.parentNode.textContent.split(' ')
    if (confirm('Tem certeza que deseja remover o link?')){
        fetch(`http://localhost:3000/?name=${nome[0]}&url=${url[1]}&del=1`)
        element.parentNode.remove(element)
    }
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