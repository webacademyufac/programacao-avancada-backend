fetch('http://jsonplaceholder.typicode.com/users')
    .then(data => {
        return data.json();
    })
    .then((data) => {
        const vet = [] //armazenador dos nomes
        console.log(data)
        for(i = 0; i<data.length; i++){ //pode ser substituido por map e foreach
            vet.push(`<li>${data[i].name}</li>`) //inserção do li com o nome necessario do objeto

            const filtrado = vet.join("")
            
            document.getElementById('pessoas').innerHTML = filtrado    //inseração do json tratado para o documento       
         }         
    })
    .catch(response => { //tratamento de erro
        if (!response.ok) {
        return new Error('a requisiçao falhou')
        }
        if (response.status === 404) {
        return new Error('resultado não encontrado')
        }
        return response.json()
    })
    