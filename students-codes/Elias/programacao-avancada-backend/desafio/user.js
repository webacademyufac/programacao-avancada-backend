fetch('https://jsonplaceholder.typicode.com/users')
.then(T => T.json())
.then(console.log)