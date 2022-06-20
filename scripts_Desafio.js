fetch('http://jsonplaceholder.typicode.com/users')
    .then(data => {
        return data.json();
    })
    .then((data) => {
        const vet = []
        console.log(data)
        for(i = 0; i<data.length; i++){
            vet.push(`<li>${data[i].name}</li>`)
            const filtrado = vet.join("")
            document.getElementById('pessoas').innerHTML = filtrado          
         }         
    })
    .then(response => {
        if (!response.ok) {
        return new Error('a requisiçao falhou')
        }
        if (response.status === 404) {
        return new Error('resultado não encontrado')
        }
        return response.json()
    })
    