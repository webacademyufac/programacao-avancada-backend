const ul = document.getElementById('fetch')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        for (names in data){
          const li = document.createElement('li')
          const content = document.createTextNode(data[names].name)
          li.appendChild(content)
          ul.appendChild(li)
        }
    })
    .catch(console.error);