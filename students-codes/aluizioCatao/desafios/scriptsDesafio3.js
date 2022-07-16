/*Desafio do feriadão: Crie um documento HTML com apenas um elemento ul. No documento em JavaScript, utilize fetch 
(é uma API nativa do ES6 para requisições HTTP através de Promises) para pegar o conteúdo da página
 http://jsonplaceholder.typicode.com/users. Em seguida, dentro do fetch, }
utilize um then para converter o conteúdo da página para um objeto JSON e outro then para mapear o vetor 
com os dados do objeto JSON, puxando o nome e sebrenome de cada dado para a lista no HTML. 
Não se esqueça de fazer o catch no fetch indicando erro, quando houver.
Inicie suas pesquisas para resolver ao problema em https://www.devmedia.com.br/javascript-fetch/41206.

fetch(http://jsonplaceholder.typicode.com/users)
*/
try{
  const url_to_fetch = 'http://jsonplaceholder.typicode.com/users'
  fetch(url_to_fetch)
    .then(response => response.json())
    .then(response => {
      let nomes = [];
      response.forEach(user => nomes.push(user['name']))
      const ul = document.querySelector('ol')
      nomes.forEach(nome =>{
        const li = document.createElement('li')
        li.innerText = nome
        ul.appendChild(li);
      })
    })
}
catch(erro){
  console.log(erro)
}