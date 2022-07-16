
const ul = document.querySelector('ul')
const input = document.querySelector('#input')
const form = document.querySelector('#form')
// Assim que a página é carregada faz uma requisição ao back-end
const show = () => {
    console.log("chamou")
    ul.innerHTML = ""
    // O conteúdo da requisição é transformado de JSON para object e em seguida mapeado os dados passando chamando a função de exibir no html
    fetch(`http://localhost:3000/link`)
    .then(content => content.json())
    .then(data => data.map(({name, url,_id}) => showElement({name, url,_id})))
}
show()


/*,{
        // method: 'GET',
        // headers: 'Content-Type: application/json'
    }
*/

// Função que tem como argumento um object desestruturado com os chaves name e url, para criação do elemento da lista
function showElement({ name, url, _id }) {
    const li = document.createElement('li')
    li.innerHTML = `<a target="_blank" href="${url}"><span hidden>${_id} </span>${name}</a> <button onClick="removeElement(this)" class="remove">X</button>`
    li.classList.add("li-listener")
    ul.appendChild(li)
}

// Função que tem como argumento um object desestruturado com os chaves name e ur, que manda uma requisição com a url tratada da forma como se espera para adicionar o elemento no arquivo .json
function addElement({name, url}){
    //Evita que a url venha com espaços em branco
    const urlTratada = url.replace(" ","")
    console.log(name, urlTratada)
    fetch('http://localhost:3000/link',{
        method: 'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            name: name,
            url: urlTratada
        })

    })
    .then(resposta => {
        if(resposta.status==201){
            show()
            alert("Link adicionado com sucesso")
        }
    })
}

// Função que tem como argumento o Elemento html passado no html que é o button 
function removeElement(element) {
    // Pega o conteúdo do elemento <a>(irmão do button) e seu href para passar no fetch 
    const id = element.parentNode.children[0].children[0].textContent
    console.log(typeof id)
    fetch(`http://localhost:3000/link/${id}`,{
        method: 'DELETE'
    })
    .then(response => {
        if(response.status==200){
            show()
            alert("Link deletado com sucesso")
        }
    })

}

// Quando o formulário tem submit a função é chamada
form.addEventListener('submit', (event) => {
    // previne erro causado por falha
    event.preventDefault();

    // Pega o value do input por meio de desestruturação
    let { value } = input

    // Verifica se o value existe, se não, alerta para que preencha o campo
    if (!value) {
        input.style['border'] = '3px solid #f55945'
        alert('Preencha o campo!')
    }

    // Separa o name e o url em dois valores no array
    const [name, url] = value.split(',')

    // Verifica se o url existe, se não, manda preencher o campo novamente
    if (!url)
        return alert('O texto não está formatado da maneira correta.')

    // Verifica se está no formato http(o url), se não, manda preencher o campo novamente
    if (/!^http/.test(url))
        return alert('Digite a url da maneira correta.')
    // Chama a função para adicionar o elemento, passando como parâmetro em formato de object desestruturando o name e o url
    addElement({ name, url })
    // Limpa a entrada
    input.value = ''
    input.style['border'] = '2px inset rgb(133, 133, 133)'

})

