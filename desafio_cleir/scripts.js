//realiza a requizição http

fetch('http://jsonplaceholder.typicode.com/users')
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
    .then(json => {
        let table = document.getElementById("tabela_lista").getElementsByTagName('tbody')[0];
        let row =''
        let cel1 =''
        let cel2 =''
        let cel3 =''
        let cel4 =''
        let cel5 =''
        let cel6 =''
        let cel7 =''
            console.log(table)
        json.map((item, index) => {
            row = table.insertRow(0);
            cel1 = row.insertCell(0)
            cel2 = row.insertCell(1)
            cel3 = row.insertCell(2)
            cel4 = row.insertCell(3)
            cel5 = row.insertCell(4)
            cel6 = row.insertCell(5)
            cel7 = row.insertCell(6)
            cel1.innerHTML= item.name
            cel2.innerHTML= item.email
            cel3.innerHTML= `Cidade:${item.address.city}
            <br>Rua: ${item.address.street}
            <br>Número: ${item.address.suite}`
            cel4.innerHTML= item.phone
            cel5.innerHTML= item.username
            cel6.innerHTML= item.company.name
            cel7.innerHTML= item.website
        });
    })
    .catch(err => console.log(err.message))