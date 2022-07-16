const ul = document.getElementById('users');
const url = 'http://jsonplaceholder.typicode.com/users'

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  return data.map(function(user) {
    ul.innerHTML += `<li>${user.name}</li>`;
  })
})
.catch(function(error) {
  console.log(error);
});