try{
    const URL = "http://jsonplaceholder.typicode.com/users/";
    fetch(URL)
    .then(res => res.json())
    .then(res => {
        let names = [];
        res.forEach(user => names.push(user['name']))
        const ul = document.getElementById('info');
        names.forEach(name => {
            const li = document.createElement('li');
            const h4 = document.createElement('h4');
            h4.innerHTML = `${name}`;
            ul.appendChild(li);
            li.appendChild(h4);
        })
      })
}
    catch(err) {
        console.error('Naão foi possivel acessar', err);
    }