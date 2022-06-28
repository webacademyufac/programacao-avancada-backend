<<<<<<< HEAD
const table = document.getElementById("tabela_lista").getElementsByTagName('tbody')[0];
const nomeFavorito = document.querySelector('#nome_favorito')
const url = document.querySelector('#utl_favorito')
const form = document.querySelector('form')

function addElement(name, url) {

   // conta a linhas da tabela dentro do tbody
    let e = table.rows.length
    // cria uma linha na tabela
    row = table.insertRow(e);
    // insere os dados nas colunas da tabela
    cel0 = row.insertCell(0)
    cel1 = row.insertCell(1)
    cel2 = row.insertCell(2)
    cel3 = row.insertCell(3)
    // escreve dentro da colunas da tabela
    cel0.innerHTML = e + 1
    cel1.innerHTML = name
    cel2.innerHTML = url
    cel3.innerHTML = `<button type="button" class="btn btn-danger btn-sm" onclick="removeElement(${e})"><i class="bi bi-trash"></i></button>`
}


function removeElement(element) {
    // remove o elemento clicado 
    table.deleteRow(element)
}
/*escutando o evento submit*/
form.addEventListener('submit', (event) => {

    //Para o envio do formulário.
    event.preventDefault();

    //Pegando o valor do input do formulário.
    let value_nome = nomeFavorito.value
    let value_url = url.value

    //Verificando se o campo tem conteúdo
    if (!value_nome || !value_url)
        return alert('Preencha o campo!')

    /*Verifica a formatação do texto*/

    //Retornando mensagem caso a url tenha sido digitado de maneira correta
    if (!/^http/.test(value_url))
        return alert('Digite a url da maneira correta.')

    //chama a função que adiciona o elemento no HTML.
    addElement(value_nome, value_url)

    //Fazendo a limpeza dos campos do formulário.
    url.value = ''
    nomeFavorito.value = ''
=======
const ul = document.querySelector('ul')
const input = document.querySelector('input')
const form = document.querySelector('form')

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

function removeElement(element) {
    if (confirm('Tem certeza que deseja deletar?'))
        el.parentNode.remove()
}

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
>>>>>>> upstream/main
})