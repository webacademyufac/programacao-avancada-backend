//Desafio - node ./scripts.js
//Crie um documento HTML com apenas um elemento ul. No documento em JavaScript, utilize fetch (é uma API nativa ES6
// para requisições HTTP através de Promises) para pegar o conteúdo da página https://jsonplaceholder.typicode.com/users.
// Em seguida, dentro do fetch, utilize um then para converter o conteúdo da página para um objeto JSON e outro then para
// mapear o vetor com os dados do objeto JSON, puxando o nome e sobrenome de cada dado para a lista no HTMLAllCollection. Não se esqueça de
// fazer o catch no fetch indicando erro, quando houver.
// Inicie suas pesquisas para resolver o problema em https://www.devmedia.com.br/javascript-fetch/41206

const ul = document.querySelector('ul');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        for (const item of data) {
            let li = document.createElement('li');
            li.appendChild(document.createElement('li')).textContent = item.name;
            ul.appendChild(li);
        }
    })
    .catch(err => console.log(err.message));