try {
    const url = 'https://jsonplaceholder.typicode.com/users';

    const r = fetch(url)
                    .then(r => r.json())
                    .then(r => {
                        let nomes = [];
                        r.forEach(user => nomes.push(user['name']));

                        inserirNomes(nomes);
                    });
} catch (e) {
    console.log(e);
}

function inserirNomes(nomes) {
    const ul = document.querySelector('[data-list]');

    nomes.forEach(nome => {
        const li = document.createElement('li');
        li.innerText = nome;
        ul.appendChild(li);
    });
}