fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())  //criando um objeto JSON com a resposta
    .then(data => {
        const conteudo = data.map(user => { //constante com os dados, aplicando o método map para filtrar os nomes
            console.log(user.name)
            return `<ul>${user.name}</ul>` //retornando em forma de ul
        })
        document.querySelector('#nomes').insertAdjacentHTML("afterbegin", conteudo) //inserindo no html
    })
    .catch(console.error())