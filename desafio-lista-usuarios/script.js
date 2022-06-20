const url = 'http://jsonplaceholder.typicode.com/users'
const ul = document.getElementById('users');

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let users = data;
  return users.map(function(user) {
    ul.innerHTML += `<li>${user.name}</li>`;
  })
})
.catch(function(error) {
  console.log(error);
});