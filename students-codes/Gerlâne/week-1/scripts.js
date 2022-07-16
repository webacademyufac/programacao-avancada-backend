/* 
//Hello World em JavaScript
console.log("Hello, world, Javascript!");

//variáveis
var x = 10; //number
//formas mais convenientes de declarar variáveis
let y = 50; //variável de escopo
const z = "''"; //vário uso de aspas

y = 20;
console.log(y);

if(1){ //estrutura condicional
  let y = 15;
  console.log(y);
}

console.log(y);

//tipos

const nome = "Victor"; //mesmo significado de 'Victor'
console.log(nome);
console.log(typeof nome); //mostra tipo da variável no console

const idade = 31;
console.log(idade);
console.log(typeof idade);

const peso = 72.3;
console.log(peso);
console.log(typeof peso);

//null
const nada = null;
console.log(nada);
console.log(typeof nada);

//undefined
let indefinido;
console.log(indefinido);
console.log(typeof indefinido);

//booleano
const vouf = true;
console.log(vouf);
console.log(typeof vouf);

//array
const vetor = ['Java', 10, false]; //array de string, number e boolean
console.log(vetor[1]);
console.log(typeof vetor);
console.log(vetor.length);


//object literals
const usuario = { 
  email: 'eu@email.com',
  senha: 'teste123', 
  nome: 'Victor', 
  idade: 31
}

console.log(typeof usuario);

const nome1 = 'Victor Vieira';
console.log(nome1.length);
const stringParaVetor = nome1.split(''); //divide a string em letras separadas
console.log(stringParaVetor);
console.log(nome1.toUpperCase()); //string fica em MAIÚSCULO 
console.log(nome1.toLowerCase()); //string fica em miniscúlo
const nomeMaiusculo = nome1.toUpperCase();
console.log(nomeMaiusculo);

console.log(nomeMaiusculo[0]); //arrays começam na posição 0
console.log(nomeMaiusculo[nomeMaiusculo.length-1]); //pega a última posição de um array
console.log(nomeMaiusculo.slice(0,6)); //pega uma parte da string, da primeira a sexta posição

//arrays, vetores, listas

const lista = ['a','b','c','d','e']

console.log(lista.length); //tamanho da lista
console.log(lista[2]); //terceira posição da lista
console.log(typeof lista);
lista[5] = 'f';
console.log(lista[5]);
lista[0] = 'x';
console.log(lista);

//lista = 'Testando atribuição de texto para lista.'

lista.push('g'); //coloca a letra g na última posição da lista
console.log(lista);
lista.pop(); //tira o g da última posição da lista
console.log(lista);
lista.shift(); //tira elementos do começo da lista
lista.shift(); //tira elementos do começo da lista
lista.shift(); //tira elementos do começo da lista
console.log(lista);
lista.unshift('h'); //acrescenta a letra h no começo da lista
console.log(lista);

//object literals - estruturas que descrema entidade

const produto = {
  nome: 'oculos',
  preco: 9.99,
  emEstoque: true,
  tamanho: ['P', 'M', 'G'],
  'Cor': 'azul' //declaração válida de um elemento de um objeto
}

console.log(produto['preco']); //mostra o elemento preço do objeto produto no console

//destructuring - recurso para objetos, para extrair conteúdo de dentro deles

const { preco, emEstoque } = produto; //as variáveis devem ter o mesmo nome dos elementos dentro do objeto
console.log(preco);
console.log(emEstoque);

const [char1, char2] = lista; //desctructuring de uma lista
console.log(char1);
console.log(char2);

//JSON - JavaScript Object Notation

const doguinho = {
  nome: 'Scooby',
  idade: 10
}

const json = JSON.stringify(doguinho); //transforma um objeto em uma string json
console.log(json);
console.log(typeof json);
const json2 = JSON.parse(json); //volta uma string json para o formato objeto
console.log(json2);
console.log(typeof json2);

const jsonErrado = JSON.stringify('{"nome":"Scooby","idade":10,}'); //não funciona por causa da vírgula no final
console.log(jsonErrado);


//  Desafio 1
//  - Armazene 5 dados númericos em um vetor
//  - Copie para um objeto com as propriedades n1, n2, n3, n4, n5
//  - Utilizando destructuring para copiar os valores para 5 variáveis
//  - Construa um objeto JSON com os valores das variáveis 


const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

const numerosObj = {
  n1: numeros[0],
  n2: numeros[1],
  n3: numeros[2],
  n4: numeros[3],
  n5: numeros[4]
};
console.log(numerosObj);

const { n1, n2, n3, n4, n5 } = numerosObj;
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);

const numerosJSON = JSON.stringify({ n1, n2, n3, n4, n5 });
console.log(numerosJSON);

const numerosJSON2 = JSON.parse(numerosJSON);
console.log(numerosJSON2);


// Desafio 2
// Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas
// Em outras palavras, inicializando cadauma das operações com os resultados do processamento
// matemático vindo de duas variáveis e converta para um objeto JSON


const var1 = 2;
console.log(var1);
const var2 = 3;
console.log(var2);

const calculadora = {
  adicao: var1 + var2,
  subtracao: var1 - var2,
  multiplicacao: var1 * var2,
  divisao: var1 / var2
}
console.log(calculadora);

const calculadoraJSON = JSON.stringify(calculadora);
console.log(calculadoraJSON);

const calculadoraJSON2 = JSON.parse(calculadoraJSON);
console.log(calculadoraJSON2);

//08-06-2022

//estruturas, métodos de listas, funções

const n = 100;
if(n > 10){ // > < >= <= == !=
    console.log('Teste de entrada no if.');
}

const texto = '0';
if(texto === 0) //estrutura condicional sem {}, somente uma linha após
  console.log("Os dados são iguais.");
else if(true) 
  console.log('Segundo if - if aninhado.');
else
  console.log('Saída...'); // erro na hora de pensar o código...

//operador ternário

const resultado =  n > 20 ? true : false; //condição ? se verdadeiro : se falso
console.log(resultado);
console.log(typeof resultado);

//repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle

let contador = 0;
const lista2 = [1, 7, 3, 64, 2, 0];
while(contador < lista2.length){ //manipulando lista com contador while
    console.log('O \'elemento\' da\n vez é ' + lista2[contador] + '.');
    contador++;// contador = contador + 1
}

const outraLista = ['a', 'b', 'd', 'e', 'c'];
for(let contador = 0; contador < outraLista.length; contador++) //manipulando lista com contador for
    console.log(`O elemento da 
    vez é ${outraLista[contador]}.`); //template literais, ou template strings

// `string ${variavél} string` sintaxe da utilização de template literals

const thing = (`\'`==="'"); //possuem o mesmo significado no console
console.log(thing);
console.log(`\\`); // mostra / no console

const a=3, b=5;
console.log('Oito é '+(a+b)+' \ne não '+(2*a+b)); // \n quebra linha
console.log(`Oito é ${(a+b)} 
e não ${(2*a+b)}`);

const nomes = ['Kinn', 'Khun', 'Kim'];
nomes.forEach(function(nome){ //função chamada dentro da execução de um método de array
  console.log(nome);
});

nomesModificados = nomes.map(function(nome){ //manipulação de array com função chamada dentro de um método de array
  if(nome === 'Khun')
    return (nome = 'The only one, the best')
  else
    return nome
});

nomesModificados.forEach(function(nome){ //console de todos os elementos de nomesModificados
  console.log(nome);
});

const numerosGrandes = ['6', '1', '9', '17', '99', '94'].filter( //retornas todos os elementos filtrados com base na cláusula especificada
  function(numero){
    return(numero>10)
  }
);

numerosGrandes.forEach(function(numero){
  console.log(numero);
});

console.log(numerosGrandes.reduce(function(total, numero){ //soma de todos os elementos de um array, os valores precisam ser convertidos para inteiros
  return parseInt(total)+parseInt(numero)
}));

// 09-06-2022

//funções

function minhaFuncao(){ //função declarada antes de ser chamada
  console.log('Dentro');
}
minhaFuncao();

//escopo que não retorna nada é um procedimento
//função retorna alguma coisa

const funcao = function minhaFuncao(nome, sobrenome){
  console.log(typeof nome);
  return(`${nome} ${sobrenome}`);
}

const nome2 = 'Maria';
const sobrenome = 'Chiquinha';
console.log(funcao(nome2, sobrenome));
minhaFuncao(10,20);

//arrow function

const soma = (a, b) => a+b;
console.log(soma(5+4));

const listaNova = ['i am a big boy', 'b', 'c', 'd'];
console.log(listaNova.map(elemento => elemento.length)); //para cada elemento é mostrado no console o seu tamanho

//clousures - fechamentos

// let x = 10;
// const fora = () => (() => x+5) (); //menor forma de se escrever a função fora() da linha 320
// console.log(fora());

let xx = 10;

const fora = () => (xx=7, () => xx+5) (); //menor forma de se escrever a função fora() da linha 320, onde x recebe 7 antes de fazer a soma

// function fora(){
//   let x = 7;
//   function somarXMais5(){
//     return x+5; 
//   }
//   return somarXMais5();
// }
console.log(fora());

//10-06-2022

//Orientação a objeto

class Produto { //declaração de classe
  constructor(nome, preco){
    this.nome = nome;
    this.preco = preco;
  }
  detalhesDoProduto(){
    return `O preço ${this.nome} é R$${this.preco}`;
  }
}

const oculos = new Produto('Óculos', 19,90);
console.log(oculos.nome);
console.log(typeof oculos);
console.log(oculos.detalhesDoProduto());

const meia = new Produto('Meia', 8.5);
console.log(meia.nome);
console.log(meia.detalhesDoProduto());

//Herança
//A partir de uma classe permitir que outras carreguem os atributos e métodos

class ProdutoComTamanho extends Produto{
  constructor(nome, preco, tamanho){
    super(nome, preco);
    this.tamanho = tamanho;
  }
  outraMensagem(adjetivo){
    return `O produto ${this.nome} é ${adjetivo} demais.`;
  }
}

const camisa = new ProdutoComTamanho('Camisa', 19.90, 'G');
console.log(camisa.detalhesDoProduto());
console.log(camisa.outraMensagem('feia'));

//DOM Document Object Model

const titulo = document.getElementById('titulo');
console.log(titulo);

//querry selector

const mesmoTitulo = document.querySelector('#titulo');
console.log(mesmoTitulo);

const todosOsParagrafos = document.querySelectorAll('.texto');
console.log(todosOsParagrafos);

todosOsParagrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()));

//textContent pega o texto do elemento

//Alterando elementos com DOM

const textoAlterado = todosOsParagrafos[0].textContent;

todosOsParagrafos[4].innerHTML = textoAlterado; //texto do primeiro paragráfo está sendo exibido no lugar do último

todosOsParagrafos[2].style.backgroundColor = 'black';
todosOsParagrafos[2].style.color = 'white';

todosOsParagrafos[3].classList.add('outra-classe'); //adicionando um classe
todosOsParagrafos[3].classList.remove('texto'); //removendo uma classe

titulo.remove(); //apagando o título da página
todosOsParagrafos[0].remove();

//eventos

const botao = document.getElementById('botao');
botao.addEventListener('click', function() {
  console.log('Click click click');
  todosOsParagrafos[2].style.backgroundColor = 'red';
  todosOsParagrafos[2].style.color = 'black';
})

//função callback - função passada de argumento para outra

//14-6-2022

function soma() {
  const resultado = 1 + 1;
  if(resultado === 2) sucesso();
  else erro();
}

function sucesso() {
  console.log('Sucesso! A soma foi 2.');
}

function erro() {
  console.log('Erro! A soma não é 2.');
}

function soma(sucesso, erro){
  const resultado = 1+1;
  if(resultado === 2) sucesso();
  else erro();
}

console.log('Teste');
console.log('Teste');
// soma();
soma(() => {console.log('')}, () => {console.log('Erro! A soma não é 2.')})
console.log('Teste');

//Promises são classes em JavaScript. Métodos: then (resposta válida, pode ser usado várias vezes), catch (usado uma vez, estados de erro)

const p = new Promise((resolve, reject) => {
  const resultado = 1+1;
  if(resultado === 2) resolve('Sucesso! A soma foi 2.');
  else reject('Erro! A soma não é 2.');
});

console.log(p);

p
.then((message) => {console.log('Dentro do then: ' + message)})
.catch((message) => {console.log('Dentro do catch: ' + message)});

console.log(p);

console.log('Oi oi oi oi oi');

//callback

const melhorProgramador = 'Gerlâne';

function quemEhOMelhor (callback, callbackErro){
  if(melhorProgramador === 'Ada'){
    callback({
      nome: melhorProgramador,
      mensagem: ' é a melhor de todas!'
    })
  }else{
    callbackErro({
      mensagem01: 'Tá errado',
      mensagem02: '? Sério?'
    })
  }
}

quemEhOMelhor(
  (resultado) => {console.log(resultado.nome + resultado.mensagem)},
  (erro) => {console.log(erro.mensagem01 +' '+ melhorProgramador + erro.mensagem02)}
)


*/

//callback para promise

const melhorProgramador = 'Ada';

function quemEhOMelhor() {
  return new Promise((resolve, reject) => {
    if (melhorProgramador === 'Ada') {
      resolve({
        nome: melhorProgramador,
        mensagem: ' é a melhor de todas!'
      })
    } else {
      reject({
        mensagem01: 'Tá errado!',
        mensagem02: '? Sério?'
      })
    }
  });
}

console.log(quemEhOMelhor());

quemEhOMelhor()
.then((resultado) => {console.log(resultado.nome + resultado.mensagem)})
.catch((erro) => {console.log(erro.mensagem01 +' '+ melhorProgramador + erro.mensagem02)});
