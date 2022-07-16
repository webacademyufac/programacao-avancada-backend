// console.log("Hello, world, Javascript!")
/*

//Resumão básico como introdução para posteriormente utilizar nodeJs

//variáveis javascript 
var x = 10 //number
//formas mais convenientes de declarar variáveis
let y = 50
const z = "''"

y = 20
console.log(y)

if(1){
    let y = 15
    console.log(y)
}

console.log(y)

//tipos de variáveis

const nome = "Aluizio"
console.log(nome)
console.log(typeof nome)

const idade = 31
console.log(idade)
console.log(typeof idade)

const peso = 72.3
console.log(peso)
console.log(typeof peso)

//null
const nada = null
console.log(nada)
console.log(typeof nada)

//undefined
let indefinido
console.log(indefinido)
console.log(typeof indefinido)

//bool
const vouf = true
console.log(vouf)
console.log(typeof vouf)

//array
const vetor = ['PHP', 10, false]
console.log(vetor[1])
console.log(typeof vetor)
console.log(vetor.length)


//objetos literais
const usuario = { 
    email: 'eu@email.com',
    senha: 'teste123', 
    nome: 'Eu', 
    idade: 31
}

console.log(typeof usuario)

const nome = 'Eu Fulano'
console.log(nome.length)
//const stringParaVetor = nome.split('')
//console.log(stringParaVetor)
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())
const nomeMaiusculo = nome.toUpperCase()
console.log(nomeMaiusculo)

console.log(nomeMaiusculo[0])
console.log(nomeMaiusculo[nomeMaiusculo.length-1])
console.log(nomeMaiusculo.slice(0,6))

//arrays, vetores, listas
*/
//const lista = ['a','b','c','d','e']
/*console.log(lista.length)
console.log(lista[2])
console.log(typeof lista)
lista[5] = 'f'
console.log(lista[5])
lista[0] = 'x'
console.log(lista)
//lista = 'Testando atribuição de texto para lista.'
lista.push('g')
console.log(lista)
lista.pop()
console.log(lista)
lista.shift()
lista.shift()
lista.shift()
console.log(lista)
lista.unshift('h')
console.log(lista)

//objetos literais
const produto = {
    nome: 'Camisa',
    preco: 9.99,
    emEstoque: true,
    tamanho: ['P', 'M', 'G'],
    'Cor': 'azul'
}

console.log(produto['preco'])

//desestruturando objetos para obter dados
const { preco, emEstoque } = produto
console.log(preco)
console.log(emEstoque)

const [char1, char2] = lista
console.log(char1)
console.log(char2)

//JSON - JavaScript Object Notation
const doguinho = {
    nome: 'Scooby',
    idade: 10
}

const json = JSON.stringify(doguinho)
console.log(json)
console.log(typeof json)
const json2 = JSON.parse(json)
console.log(json2)
console.log(typeof json2)

const jsonErrado = JSON.stringify('{"nome":"Scooby","idade":10,}')
console.log(jsonErrado)

Desafio 1: armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedade n1, n2, n3, n4, n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const vetor = [1, 2, 3, 4, 5]

const objeto = {
    n1: vetor[0],
    n2: vetor[1],
    n3: vetor[2],
    n4: vetor[3],
    n5: vetor[4]
}

const { n1, n2, n3, n4, n5 } = objeto

const jsonVetor = JSON.stringify({ n1,n2,n3,n4,n5 })
console.log(jsonVetor)
console.log(typeof jsonVetor)

Desafio 2: desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básica. Em outras palavras: crie um objeto calculadora, inicializando cada uma das operações com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

const num1 = 10, num2 = 20

const calculadora = {
    soma: num1+num2,
    sub: num1-num2,
    mult: num1*num2,
    div: num1/num2
}

const jsonCalc = JSON.stringify(calculadora)
console.log(jsonCalc)
*/
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

// operador ternário
// const resultado =  n > 20 ? true : false
// console.log(resultado)
// console.log(typeof resultado)

// repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle

// let contador = 0
// const lista = [1, 7, 3, 64, 2, 0]
// while(contador < lista.length){
//     console.log('O \'elemento\' da\n vez é ' + lista[contador] + '.')
//     contador++ // contador = contador + 1
// }

// const outraLista = ['a', 'b', 'd', 'e', 'c']
// for(let contador = 0; contador < outraLista.length; contador++)
//     console.log(`O elemento da 
//     vez é ${outraLista[contador]}.`) //template literais, ou template strings

// const testeLiteral = (`\``==="`")
// console.log(`\\`)

// const a=3, b=5
// console.log('Oito é '+(a+b)+' \ne não '+(2*a+b))
// console.log(`Oito é ${(a+b)} 
// e não ${(2*a+b)}`)

// //métodos de listas-arrays-vetores
// const nomes = ['Abimael','Cleyciane','Paulo','Aluizio']
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

// function minhaFuncao(){
//     console.log("Teste");
// }
// minhaFuncao();

// const funcao = function minhaFuncao(nome, sobrenome){
//     // console.log(`O nome completo é ${nome} ${sobrenome}.`)
//     // console.log(typeof nome, typeof sobrenome);
//     return (`O nome completo é ${nome} ${sobrenome}.`);
// }
// const nome = 'Aluízio'
// const sobrenome = 'Catão'
// console.log(funcao(nome, sobrenome))
// funcao(10, 31)

// //arrow function
// const soma = (a, b) => {
//     return a + b;
// }
// console.log(soma(2,3))

// const lista = ['esse cara é maior', 'b', 'c', 'd']

// console.log(lista.map(elemento => elemento.length ))

// //Exemplo de Clousure
// function makeFunc() {
//     const name = "Mozilla";
    
//     function displayName() {
//         console.log(name);
//     }
    
//     return displayName;
// }
  
// const myFunc = makeFunc();
// myFunc();

// let x = 20
// const fora = () => {
//     let x = 18
//     function somarXMais5(){
//         console.log(x + 5);
//     }
//     return somarXMais5();
// }
// fora()

//REsoolução do professor 01
// let x = 10
// let fora = () => (() => x+ 5)()
// console.log(fora())
// console.log(typeof fora())

//REsolução do Professor 02
// let x = 10
// const fora = () => ((x + 7), () => x + 5) ()
// console.log(fora())
//Fim da resolução do professor
//Fim do Exemplo de Clousure

//Vamos falar de orientação a objetos 
// class Produto {
//     constructor(nome, preco){
//         this.nome = nome
//         this.preco = preco
//     }
//     detalhesDoProduto(){
//         console.log(`O preço do produto ${this.nome} é R$ ${this.preco}`)
//     }
// }

// const camisa = new Produto('Camisa', 19.90)
// console.log(camisa.nome)
// console.log(typeof camisa)
// console.log(camisa.detalhesDoProduto())

// const meia = new Produto('Meia', 8.50)
// console.log(meia.nome)
// console.log(typeof meia)
// console.log(meia.detalhesDoProduto())

// //Vamos falar sobre herança.

// class ProdutoComTamanho extends Produto{
//     constructor(nome, preco, tamanho){
//         super(nome, preco)
//         this.tamanho = tamanho
//     }
//     outraMensagem(adjetivo){
//         return `O produto ${this.nome} é ${adjetivo} demais.`
//     }
// }
// const tenis = new ProdutoComTamanho('Nike', 26.50, 39)
// console.log(tenis.nome)
// console.log(tenis.preco)
// console.log(tenis.tamanho)
// console.log(tenis.detalhesDoProduto())
// console.log(tenis.outraMensagem('Lindo'))

// //dom dom dom dom DOM - Vamos jogar DOOM agora

// const titulo = document.getElementById('title')
// console.log(title)

// //Query selector
// const mesmoTitle = document.querySelector('#title')
// console.log(mesmoTitle)

// const todosOsPs = document.querySelectorAll('.texto')
// console.log(todosOsPs)
// console.log(todosOsPs[1])
// console.log(typeof todosOsPs)

// todosOsPs.forEach((texto) => console.log(texto.textContent.toUpperCase()))

// //manipulação dentro do javascript

// const textoAlterado = todosOsPs[0].textContent
// console.log(textoAlterado)

// todosOsPs[5].innerHTML = "Hello World JavaScript"

// todosOsPs[2].style.backgroundColor = 'aquamarine'

// todosOsPs[3].classList.add('textp')
// todosOsPs[3].classList.remove('texto')

// titulo.remove()

// //Events de click

// const button = document.getElementById('button')
// button.addEventListener('click', () => {
//     console.log('TEstando Botão sendo clicado')
// })

// button.addEventListener('click', function(){
//     todosOsPs[2].style.backgroundColor = 'red'
// })
// 14-06-2022
// Aula de JavaScript Síncrono

// function soma(){
//     const resultado = 1 + 1;
//     resultado === 2 ? sucesso() : erro()
// }

// function sucesso(){
//     console.log("Sucesso! A soma foi 2.")
// }

// function erro(){
//     console.log("Erro! A soma não foi 2. Alguma coisa deu errado.....")
// }
// soma()
// soma(
//     () => {
//         console.log("Sucesso! A soma foi 2.")
//     },
//     () => {
//         console.log("Erro! A soma não foi 2. Alguma coisa deu errado.....")
//     }

// )

// As Promises são classes em JavaScript - Métodos a serem usados: then e catch
// const p = new Promise((resolve, reject) => {
//     const resultado = 1 + 1;
//     resultado === 2 ? resolve("Sucesso! A soma foi 2.") : reject("Erro! A soma não foi 2. Alguma coisa deu errado.....");
// })
// p.then((mensagem) => {
//      console.log(`Isso é o que está dentro do then: ${mensagem}`);
//  })
//  .catch((mensagem) => {
//     console.log(`Isso é o que está dentro do catch: ${mensagem}`);
//  })

 // Callbacks
//  const melhorDev = 'Aluaizio';
 
// function quemEhMelhorDev(callback, callcackErro){
//     melhorDev === 'Aluizio' 
//     ? callback({ nome: melhorDev, mensagem: `, Humildemente é o melhor!`})
//     : callcackErro({ mensagem01: 'Ta errado....', mensagem02: `${melhorDev}, sério?` })
// }

// quemEhMelhorDev(
//     (resultado) => {
//         console.log(resultado.nome + resultado.mensagem)
//     },
//     (erro) => {
//         console.log(erro.mensagem01 + erro.mensagem02)
//     }
// )

// function kemEhOMelhorDev(){
//     return new Promise((resolve, reject) => {
//         melhorDev === 'Aluizio' 
//         ? resolve({ nome: melhorDev, mensagem: `, Humildemente é o melhor!`})
//         : reject({ mensagem01: 'Ta errado....', mensagem02: `${melhorDev}?, sério?` })
//     })
// }

// kemEhOMelhorDev()
//     .then((resultado) => {
//         console.log(resultado.nome + resultado.mensagem)
//     })
//     .catch((erro) => {
//         console.log(erro.mensagem01 + erro.mensagem02)
//     })

// INÍCIO DO DESAFIO
// Resolução do Professor
fetch('http://jsonplaceholder.typicode.com/users') // Objeto do JS(ES6) que funciona comom uma Promise e trabalha requisiçoes e respostas HTTP
    .then((resultado) => resultado.json()) // Recebendo os dados e convertendo para JSON
    .then(function (dado){ // Recebendo os dados em um array
        return dado.map(function(item){ // Percorrendo todo o array com o método map
            const li = document.createElement('li') // Criando um elemento li
            li.innerHTML = `Nome:  ${item.name} | Sobrenome: ${item.username}` //Inserindo o elemento no HTML
            document.getElementById('nomes').appendChild(li) // Inserindo um nó do tipo li na estrutura do DOM
        })
    })
    .catch((error) => {
        console.log('Algo deu errado: ' + error)
    })
// FIM DO DESAFIO