
//criando o metodo fetch ignorando as restrições CORS
fetch ('http://jsonplaceholder.typicode.com/users', { method: 'GET' }, { mode: 'no-cors' })
    .then(resposta => resposta.json())
    .then(json => carregarElementosHTML(json))
    .catch(err => console.log(err.message))


//Vai carregar os elementos da HTML(tabela)
    function carregarElementosHTML(json) {
      const table = document.createElement('table');
      for (let user of json) {
        const tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = user.name;
        tr.appendChild(td);
        table.appendChild(tr);
      }

      const resultado = document.querySelector('.user');
      resultado.appendChild(table);
    }