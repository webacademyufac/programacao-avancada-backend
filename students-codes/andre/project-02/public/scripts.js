const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

/* Função assíncrona que carrega os dados do arquivo JSON assim que o fetch é feito. Funciona adicionando na lista todos os items inseridos neste documento, toda vez que é carregado. */
async function load() {
    const res = await fetch('http://localhost:8000/')
        .then(data => data.json())
    res.urls.map(item => addElement(item))
}

// function load() {
//     ul.innerHTML = '';
//     fetch('http://localhost:8000/')
//     .then(response => response.json())
//     .then(data => {
//         data.map(item => {
//             addElement({ item });
//         });
//     }).catch(err => console.log(err.message));
// };

/* Chamada da função quando a aplicação começa. */
load()

/* Função para adicionar um item da lista. Após a seleção da lista através do seu id com o querySelector, é inserido um novo elemento HTML. O primeiro parâmetro é a posição deste novo elemento, e o segundo é o elemento em si. No caso, é passando um item da lista, e um botão que após pressionado, chama a função removeElement. */
function addElement({ name, url }) {
    document.querySelector("#links").insertAdjacentHTML("beforeend", `<li>${name}: <a href="${url}">${url}</a> <button type="button" class="remove" onclick="removeElement(this)">X</button> </li>`)
}

/* Função para remover um item da lista. As constantes criadas aqui recebem um split do elemento que será removido, pegando somente o conteúdo necessário para passar na query da fetch. Ao final o elemento e seu pai são removidos, ou seja, todo o item da lista. */
function removeElement(element) {
    const nome = element.parentNode.textContent.split(':')
    const url = element.parentNode.textContent.split(' ')
    if (confirm('Tem certeza que deseja remover o link?')){
        fetch(`http://localhost:8000/?name=${nome[0]}&url=${url[1]}&del=1`)
        element.parentNode.remove(element)
    }
}

/* Adicionando ao formulário um escutador de evento que atende ao "submit". */
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

    // fetch responsável inserir no documento JSON através da query.
    fetch(`http://localhost:8000/?name=${name}&url=${url}`)
    
    // Chama a função de adicionar elemento, passando o nome e url inserido pelo usuário. 
    addElement({ name, url })

    // Limpa o campo input após a inserção dos valores.
    input.value = ''
})