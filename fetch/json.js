
// requisição com o Fetch

fetch('http://jsonplaceholder.typicode.com/users')
.then(T => T.json())
.then((data) => {
    const list = document.querySelector('#fill_list')

    data.map((item) => {
        const li = document.createElement('li')

        li.setAttribute('id', item.id)
        li.innerHTML = item.name
        list.appendChild(li)
    })
})
