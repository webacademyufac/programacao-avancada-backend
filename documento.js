/*Desafio do feriadão: Crie um documento HTML com apenas um elemento ul. 
No documento em JavaScript, utilize fetch (é uma API nativa do ES6 para requisições HTTP através de Promises) 
para pegar o conteúdo da página http://jsonplaceholder.typicode.com/users. 
Em seguida, dentro do fetch,utilize um then para converter o conteúdo da página para um objeto 
JSON e outro then para mapear o vetor com os dados do objeto JSON, puxando o nome e sebrenome de 
cada dado para a lista no HTML. Não se esqueça de fazer o catch no fetch indicando erro, quando houver.
Inicie suas pesquisas para resolver ao problema em https://www.devmedia.com.br/javascript-fetch/41206.
fetch(http://jsonplaceholder.typicode.com/users)*/


    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => {
        // valida se a requisição falhou
        if (!response.ok) {
        return new Error('falhou a requisição') // cairá no catch da promise
        }

        // verificando pelo status
        if (response.status === 404) {
        return new Error('não encontrou qualquer resultado')
        }

        // retorna uma promise com os dados em JSON
        return response.json()
    })
    .then(data => { 
        console.log(data);
        const x = data.map(user => {
            const text = console.log(user.name.split(" "))
            return ` <div class = "nome">
            <ul> Nome : ${user.name.split(" ") [0]} </ul>
            <ul> Sobrenome : ${user.name.split(" ") [1]} </ul>
            </div>`;
        })
        .join("")
        console.log(x)
        document.querySelector('#documento').insertAdjacentHTML("afterbegin",x);

    }).catch(error => {
        console.log(error);
    })

