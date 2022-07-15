
fetch('http://jsonplaceholder.typicode.com/users')
    .then(conteudo => {
        if(!conteudo.ok) {
            throw new Error(`Erro no HTTP, status ${conteudo.status}`)
        }
        return conteudo.json()
    })
    .then(usuarios => {
        const nomes = usuarios.reduce((accumulator, usuarios) => {
            accumulator += `<li>${usuarios.name}</li>`
            return accumulator    
        }, '')
        const ul = document.querySelector('.unico')
        ul.innerHTML = nomes
    })
    .catch(error => console.log(error.message))