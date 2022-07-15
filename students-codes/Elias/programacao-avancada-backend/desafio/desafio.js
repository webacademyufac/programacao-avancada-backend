fetch('http://jsonplaceholder.typicode.com/users')
    .then(data => {
        return data.json();
    })
    .then((data) => {
        const pessoas = []
        console.log(data)
        for(i = 0; i<data.length; i++){
            pessoas.push(`<li>${data[i].name}<br></li>`)
            const pessoasSemVirgula = pessoas.join(" ")
            document.getElementById('nome').innerHTML = pessoasSemVirgula          
         }         
    })