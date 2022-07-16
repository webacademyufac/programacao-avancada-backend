// console.log("Hello world, JavaScript");

// //variáveis
// var x  = 10; //number
// //formas mais convenientes de declarar variáveis
// let y = 50; //
// const z = '';

// y = 20;

// console.log(y);

// if(true){
//     let y = 15;
//     console.log(y);
// }

// console.log(y);

// //tipos
// //string
// const nome = "Murilo";
// console.log(nome);
// console.log(typeof nome);

// //number
// const idade = 23;
// console.log(idade);
// console.log(typeof idade);

// //number
// const peso = 72.3;
// console.log(peso);
// console.log(typeof peso);

// //null
// const nada = null;
// console.log(typeof nada);

// //indefined
// let indefinido;
// console.log(indefinido);
// console.log(typeof indefinido);

// //boll
// const vouf = true;
// console.log(vouf);
// console.log(typeof vouf);

// //array
// const vetor = ['Java', 'C', 'PHP'];
// console.log(vetor);
// console.log(typeof vetor);
// console.log(vetor.length);

//object literals
// const usuario = {
//     email: 'eu@email.com',
//     senha: 'teste123',
//     nome: 'Victor',
//     idade: 31
// }

// console.log(typeof usuario.nome);

// const nome = 'Victor Vieira';
// console.log(nome.length);
// //const stringParaVetor = nome.split(' ');
// //console.log(stringParaVetor);

// console.log(nome.toUpperCase());
// console.log(nome.toLowerCase());

// const nomeMaiusculo = nome.toUpperCase();
// console.log(nomeMaiusculo);

// console.log(nomeMaiusculo[0]);
// console.log(nomeMaiusculo[nomeMaiusculo.length-1]);
// console.log(nomeMaiusculo.slice(0,6));

// //arrays, vetores, listas
// const lista = ['ab','b','c','d','e'];
// console.log(lista.length);
// console.log(lista[2]);
// console.log(typeof lista);
// lista[5] = 'f';
// lista[0] = 'x';
// console.log(lista);

// // lista  = 'Testando atribuição de texto para lista.'
// lista.push('g');
// console.log(lista);
// lista.pop();
// console.log(lista);
// lista.shift();
// lista.unshift('h');
// console.log(lista);


// //object literals - são estruturas que descrevem alguma entidade
// const produto = {
//     nome: 'Camisa',
//     preco: 9.99,
//     emEstoque: true,
//     size: ['P','M','G'],
//     'Cor': 'azul'
// }

// produto['Cor'];
// produto.nome;

// //destructuring - recurso para objetos para extrair conteúdo de dentro deles
// const {preco, emEstoque} = produto;
// console.log(preco);
// console.log(emEstoque);

// const [char1, char2] = lista;
// console.log(char1);
// console.log(char2);

// //JSON - JavaScript Object Notation
// const doguinho = {
//     "nome":"Scooby",
//     "idade":10
// }

// const json = JSON.stringify(doguinho);
// console.log(json);
// console.log(typeof json);
// const json2 = JSON.parse(json);
// const jsonErrado = JSON.stringify('{"nome":"Scooby", "idade":10"}');
// console.log(jsonErrado);

// //Desafio 1
// const vetor = [23, 1.70, 85, 8, 2017];
// const objeto = {
//     n1:vetor[0],
//     n2:vetor[1],
//     n3:vetor[2],
//     n4:vetor[3],
//     n5:vetor[4]
// }
// const {n1,n2,n3,n4,n5} = objeto;
// const pessoa = {
//     "Idade":n1,
//     "Altura":n2,
//     "Peso":n3,
//     "Período":n4,
//     "AnoIngresso":n5
// }
// const pessoaJson = JSON.stringify(pessoa);

//Desafio 2
// const calculadora = {
//     soma:
// }

//Resolução do desafio 2:
//Desafio 2: desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básica. Em outras palavras: crie um objeto calculadora, inicializando cada uma das operações com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.
// const num1 = 10, num2 = 20
// const calculadora = {
//     soma: num1+num2,
//     sub: num1-num2,
//     mult: num1*num2,
//     div: num1/num2
// }
// const jsonCalc = JSON.stringify(calculadora)
// console.log(jsonCalc)

//Aula 3 - Faltei
//Código abaixo foi pego do repositório do profesor

//estruturas, métodos de listas, funções
// const n = 100
// if(n > 10){ // > < >= <= == !=
//     console.log('Teste de entrada no if.')
// }
// const texto = '0'
// if(texto === 0)
//     console.log("Os dados são iguais.")
// else if(true) 
//     console.log('Segundo if - if aninhado.')
// else
//     console.log('Saída...') // erro na hora de pensar o código...

// //operador ternário
// const resultado =  n > 20 ? true : false
// console.log(resultado)
// console.log(typeof resultado)

// //repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle
// let contador = 0
// const lista3 = [1, 7, 3, 64, 2, 0]
// while(contador < lista3.length){
//     console.log('O \'elemento\' da\n vez é ' + lista3[contador] + '.')
//     contador++ // contador = contador + 1
// }
// const outraLista = ['a', 'b', 'd', 'e', 'c']
// for(let contador = 0; contador < outraLista.length; contador++)
//     console.log(`O elemento da vez é ${outraLista[contador]}.`) //template literais, ou template strings
// const testeLiteral = (`\``==="`")
// console.log(`\\`)
// const a=3, b=5
// console.log('Oito é '+(a+b)+' \ne não '+(2*a+b))
// console.log(`Oito é ${(a+b)} e não ${(2*a+b)}`)

// //métodos de listas-arrays-vetores
// const nomes = ['Abimael','Cleyciane','Paulo','Victor']
// nomes.forEach(function(nome){
//     console.log(nome)
// })
// const nomesModificados = nomes.map(function(nome){
//     if(nome === 'Paulo'){
//         nome = 'O Grande'
//         return nome
//     }else
//         return nome
// })
// nomesModificados.forEach(function(nome){
//     console.log(nome)
// })
// const numerosGrandes = ['60','1','9','17','99','94'].filter(function(numero){
//     return (numero>10)
// })
// numerosGrandes.forEach(function(numero){
//     console.log(numero)
// })
// console.log(numerosGrandes.reduce(function(total,numero){
//     return parseInt(total)+parseInt(numero)
// }))

// //Aula 4
// function minhaFuncao(){
//     console.log('Estou dentro da minha função.');
// }

// minhaFuncao();

// const funcao = function minhaFuncao(nome,sobrenome){
//     console.log(typeof nome);
//     return (`${nome} ${sobrenome}`);
// }

// const nome = 'Victor';
// const sobrenome = 'Vieira';
// console.log(funcao('Victor','Vieira'));
// minhaFuncao(10,20);

// console.log(typeof funcao);

// //arrow functions - funções flecha

// const soma = (a,b) => a+b;

// console.log(soma(5,3));

// const lista = ['a','b','c','d'];

// console.log(lista.map((elemento) => elemento.length));

// //closures - fechamentos

// let x = 10;
// function fora(){
//     let x = 7;
//     function somarXMais5(){
//         return x + 5;
//     }
//     return somarXMais5();
// }
// console.log(fora());

// //minha solução
// // let x = 10;
// // const fora = () => {
// //     const somarXMais5 = () => x + 5;
// //     return somarXMais5();
// // }
// // console.log(fora());

// // //solução do professor
// // let x = 10;
// // let fora = () => ((x=7), () => x + 5) ();

// // console.log(fora());
// // console.log(typeof fora());

// //Aula 5
// //Orientação a Objetos

// class Produto {
//     constructor(nome,preco){
//         this.nome = nome;
//         this.preco = preco;
//     }
//     detalhesDoProduto(){
//         return `O preço do produto ${this.nome} é R$ ${this.preco}.`;
//     }
// }

// //const camisa = new Produto('Camisa',19.90);
// //console.log(camisa.nome);
// //console.log(typeof camisa);
// //console.log(camisa.detalhesDoProduto());

// //const meia = new Produto('camisa', 8.5);
// //console.log(meia.detalhesDoProduto());

// //herança
// class ProdutoComTamanho extends Produto {
//     constructor(nome,preco,tamanho){
//         super(nome, preco);
//         this.tamanho = tamanho;
//     }

//     outraMensagem(adjetivo){
//         return `O produto ${this.nome} é ${adjetivo} demais.`;
//     }
// }

// const camisa = new ProdutoComTamanho('camisa', 26.99, 'M');
// console.log(camisa.detalhesDoProduto());
// console.log(camisa.outraMensagem('bom'));

// const oculos = new ProdutoComTamanho('oculos', 99.99, 'M');
// console.log(oculos.outraMensagem('legal'));

// ///DOM - Document Object Model

// const titulo = document.getElementById('titulo');
// console.log(titulo);    

// //query selector
// //por id
// const mesmoTitulo = document.querySelector('#titulo');
// console.log(mesmoTitulo);

// //por class
// const todosOsParagrafos = document.querySelectorAll('.texto');
// console.log(todosOsParagrafos);

// todosOsParagrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()));

// //manipulação
// const textoAlterado = todosOsParagrafos[0].textContent;
// console.log(textoAlterado);

// todosOsParagrafos[4].innerHTML = textoAlterado;

// todosOsParagrafos[2].style.backgroundColor = 'red';

// todosOsParagrafos[3].classList.add('outra-classe');

// todosOsParagrafos[3].classList.remove('texto');

// titulo.remove();

// todosOsParagrafos[0].remove();

// //eventos

// const botao = document.getElementById('botao');

// botao.addEventListener('click', function(){
//     todosOsParagrafos[2].style.backgroundColor = 'blue'
// })

//Aula 7
//
//
//

const melhorPorgramador = 'Victor'

function quemEhOMelhor(callback, callbackErro){
    if(melhorProgramador === 'Victor'){
        callback({
            nome: melhorProgramador,
            mensagem: 'humildemente é o melhor!'
        })
    } else {
        callbackErro({
            mensagem01: 'Tá errado...',
            mensagem02: '? Sério?'
        })
    }
}

quemEhOMelhor(
    (resultado) => {console.log(resultado.nome + resultado.mensagem)},
    (erro) => {console.log(erro.mensagem1 + melhorPorgramador + erro.mensagem02)}
)

// Resolução do desafio de 14 de junho: Desafio do feriadão: Crie um documento HTML com apenas um elemento ul. No documento em JavaScript, utilize fetch (é uma API nativa do ES6 para requisições HTTP através de Promises) para pegar o conteúdo da página http://jsonplaceholder.typicode.com/users. Em seguida, dentro do fetch, utilize um then para converter o conteúdo da página para um objeto JSON e outro then para mapear o vetor com os dados do objeto JSON, puxando o nome e sebrenome de cada dado para a lista no HTML. Não se esqueça de fazer o catch no fetch indicando erro, quando houver. Inicie suas pesquisas para resolver ao problema em https://www.devmedia.com.br/javascript-fetch/41206.
fetch('http://jsonplaceholder.typicode.com/users') // Objeto do JavaScript (ES6) que funciona como uma Promise e trabalha requisições e respostas HTTP.
    .then((resp) => resp.json()) // Recebendo os dados e convertendo para um JSON.
    .then(function(dado){ // Recebendo os dados em um Array.
        return dado.map(function(item){ // Conseguimos varrer o array com o método map.
            const li = document.createElement('li') // Criando um elemento li.
            li.innerHTML = `Nome: ${item.name} | Sobrenome: ${item.username}` // Inserindo o elemento no HTML.
            document.getElementById('nomes').appendChild(li) // Inserindo um nó do tipo li na estrutura do DOM.
        })
    })
    .catch((error) => {
        console.log('Algo não deu certo: ' + error)
    })