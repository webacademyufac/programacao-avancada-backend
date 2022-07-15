/*
Código responsável pela interatividade da página index.html
*/

/*
Estabelecer o relacionamento com os elementos HTML da página index.html.    
*/
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');

/*
Carrega os dados presentes no banco de dados na abertura da página
*/
load();

/*
Função load() faz a conexão com o banco de dados através do fetch, para buscar todas as entidades salvas
e enviá-las para a função que as mostra como lista no frontend.
*/
function load() {
    ul.innerHTML = '';
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => {
        data.map(item => {
            showElement({ item });
        });
    }).catch(err => console.log(err.message));
};

/*
Função showElement() usa os elementos digitados pelo usuário para criar um lista, acrescentando um botão para remoção dos nós desejados.
*/
function showElement({ item }) {
    let li = document.createElement('li');
    li.innerHTML = `<span hidden>${item._id}</span>Nome: <span>${item.nome}</span> - URL: <a href="${item.url}">${item.url}</a> <button class="remove" onclick="removeElement(this)">&#9747;</button>`;
    ul.appendChild(li);
}

/*
Função addElement() recebe os elementos digitados pelo usuário e os envia para o backend para serem
adicionados no banco de dados através do método fetch
*/
function addElement({ name, url }){
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: name, url: url})
    };
    fetch('http://localhost:3000/register', requestOptions)
    .then(response => {
        if (response.status == 200){
            confirm('Link inserido com sucesso.');
            load();
        }else{
            confirm('Falha ao adicionar link.')
        }
    })
    .catch(err => console.log(err));
}

/*
Função removeElement() pega o id armazenado em um hidden span e o envia para o backend para ser
deletado no banco de dados
*/
async function removeElement(element) {
    const id = element.parentNode.children[0].textContent;
    if (confirm("Tem certeza que seja apagar?")) {
        fetch(`http://localhost:3000/delete/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.status == 200){
                    confirm('Link deletado com sucesso.');
                    load();
                }else{
                    confirm('Falha ao deletar link.')
                }
            }).catch(err => console.log(err.message));
    }
}

form.addEventListener('submit', (event) => {
    /*
    O elemento preventDefault() pausa o eventlooping  para que ação do evento submit seja executada.
    */
    event.preventDefault();

    let { value } = input;

    /*
    Verifica se o campo de input está vazio.
    */
    if (!value)
        return alert('Preencha o campo!');

    /*
    Faz o slipt dos dados do campo, separando os dados e os alocando para as suas respectivas variáveis.
    */
    const [name, url] = value.split(',');

    /*
    Validação da URL inserida, se ela foi inserida e se está no formato padrão.
    */
    if (!url)
        return alert('O texto não está formatado da maneira correta.');

    //Expressão REGEX: testa se a string não começa com http
    //^ No inicio buca a ?! negação, .* da combinação de qualquer caracter entre 0-ilimitadas vezes
    if (/^(?!.*http)/.test(url))
        return alert('Digite a url da maneira correta.');
        
    /*
    Se os valores seguirem o formato estabelecido, o elemento é adicionado e o campo é esvaziado.
    */
    addElement({ name, url });

    input.value = '';
});