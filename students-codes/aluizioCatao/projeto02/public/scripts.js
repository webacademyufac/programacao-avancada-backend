const ul = document.querySelector("ul");
const input = document.querySelector("input");
const form = document.querySelector("form");

// Acessa nossa API pelo console do navegador
// fetch('http://localhost:3000/').then(data => data.json()).then(data => console.log(data));

async function load() {
  const res = await fetch("http://localhost:3000/").then((data) => data.json());
  res.urls.map((name, url) => addElement(name, url));
}

load();

   // Função para inserir os dados do formulário no arquivo JSON
   function inserir ({name, url}) {
    fetch('http://localhost:3000/'+'?name='+name+'&url='+url)
}

   // Função para deletas os dados do formulário no arquivo JSON
  function deletar ({name,url}) {
    fetch('http://localhost:3000/'+'?name='+name+'&url='+url+'&del=1')
}

function addElement({ name, url }) {
  let li = document.createElement("li");
  li.appendChild(
    document.createElement("li")
  ).innerHTML = `Nome: ${name} - URL: <a href="${url}">${url}</a> - <button class="mb-3 btn btn-danger btn-sm remove" onclick="removeElement(this)">Remover</button> <br/>`;
  ul.appendChild(li);
}

function removeElement(element, {name, url}) {
  //alert("Tem certeza que deseja excluir?");
  deletar({name,url})
  element.parentNode.parentNode.remove();
}

form.addEventListener("submit", (event) => {
  // Ele verifica se o submit existe e caso não existe o preventDefault vai parar o evento.
  event.preventDefault();
  // Essa variavel value, ela recebe os valores do input que o usuário realizou ao adicionar as informações.
  let { value } = input;
  // Verifica se o campo que precisa ser preenchido esta vazio ou não.
  // Na opção ele informa ao usuário q a informação, sendo uma alerta na pagina.
  if (!value) return alert("Preencha o campo!");

  // O método split() separa o nome e url que foram enviados pelo formulário nas variáveis NAME e URL
  // Desde que estejam separadas por vírgula
  const [name, url] = value.split(",");

  // Verifica se o texto passado pelo input/form está de acordo com o solicitado, separado por vírgula o nome e a url.
  if (!url)
    // Ele alerta sobre o formato correto que precisa estar no campo de nome e url.
    return alert("O texto não está formatado da maneira correta.");
  // Verifica se a url está formatada corretamente com o http. Também verifica se existe um espaço entre o nome e a vírgula e caso não esteja correto vai retornar a mensagem de que a url esta invalida.
  if (!/^http/.test(url)) return alert("Digite a url da maneira correta.");
  // Esse código após todas as verificações ele adciona na opção de favoritos o nome a URL que foi adicionado.
  addElement({ name, url });
   // Chama a função INSERIR para adicionar os dados no URL.JSON
   inserir({name, url})
  // Após adicionar a URL ele define o value como vázio.
  input.value = "";
});
