const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')
const li = document.querySelector('li')

function addElement({ name, url }) { //Está adicionando elementos diretamente pelo javaScript (estou tentando implementar o localStorage para guarda os elementos salvos)
    // let dadoNome, dadoUrl = ''
    // localStorage.setItem(dadoNome , name )
    // localStorage.setItem(dadoUrl , url) //falta implementar o localStorage para armazenar no computador os dados
    let li = document.createElement("li");
    li.innerHTML = `<li class="list-group-item" ><a href="${url}"> ${name}</a><button type="button" id='botao' class="btn btn-danger">Excluir</button></li>`;
    list.appendChild(li);
    //Como está sendo criado a lista pelo appendChild é necessário utilizar o execução e chamada da funcao do removeElement pela propria função add Element 
    let botoes = document.querySelectorAll('.btn-danger')
    botoes.forEach(botao => {
    botao.addEventListener('click', removeElement)

    })
}

function removeElement(event) {
    console.log(event.currentTarget.parentNode.remove())
    
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let { value } = input

    if (!value) 
        return alert('Preencha o campo!')

    const [name, url] = value.split(', ')
    

    if (!url) 
        return alert('O texto não está formatado da maneira correta.')

    if (!/^https/.test(url)) 
        return alert('Digite a url da maneira correta.')

    addElement({ name, url })

    input.value = ''
})






