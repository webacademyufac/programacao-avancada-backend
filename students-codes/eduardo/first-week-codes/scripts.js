/* 
O código deste documento serve como material de consulta/estudo sobre fundamentos de programação em JavaScript e foi desenvolvido durante a disciplina de Programação Avançada Backend da primeira turma do WebAcademy.
 */

//==============================================

// O objeto console permite acessar métodos que exibem conteúdo no console, a partir da inspeção das páginas no navegador.
// Strings em JS podem ser escritas entre aspas simples ou duplas.
// Não é necessário ; para encerrar instruções.
console.log("Hello, world, Javascript!")

//==============================================

// Variáveis
// Em virtude da tipagem dinâmica, não é necessário especificar tipo de variáveis em JS. Os tipos são entendidos pela própria linguagem na atribuição dos valores.
// Declarando variável de escopo global.
var x = 10 
// let e const são formas mais modernas e convenientes de declarar variáveis.
// let carrega informação de escopo, ou seja, pode existir somente dentro de um bloco.
let y = 50
// const armazena constantes, ou seja, valores que não podem ser alterados durante a execução.
const z = "''"

// Alterando o valor da variável y de inteiro para string.
y = 'testando...'
console.log(y)

// Estruturas de seleção são abordadas em seção específica do código. Destaque na estrutura abaixo para o fato de que existem diferentes maneiras de testar condições em JS.
if(1){
    // A variável y declarada dentro do bloco if possui escopo local, ou seja, mesmo que tenha o mesmo nome, é diferente da que foi declarada anteriormente pois está em um bloco de código mais interno e só existe dentro dele.
    let y = 15
    console.log(y)
}

// A instrução a seguir exibirá o texto da variável global y.
console.log(y)

//==============================================

//Tipos
/*
const nome = "Victor"
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
const vetor = ['Java', 10, false]
console.log(vetor[1])
console.log(typeof vetor)
console.log(vetor.length)


//object literals
const usuario = { 
    email: 'eu@email.com',
    senha: 'teste123', 
    nome: 'Victor', 
    idade: 31
}

console.log(typeof usuario)

const nome = 'Victor Vieira'
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

//const lista = ['a','b','c','d','e']
console.log(lista.length)
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

//object literals - estruturas que descrema entidade.
const produto = {
    nome: 'Camisa',
    preco: 9.99,
    emEstoque: true,
    tamanho: ['P', 'M', 'G'],
    'Cor': 'azul'
}

console.log(produto['preco'])

//destructuring - recurso para objetos, para extrair conteúdo de dentro deles
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

//estruturas, métodos de listas, funções

const n = 100
if(n > 10){ // > < >= <= == !=
    console.log('Teste de entrada no if.')
}

const texto = '0'
if(texto === 0)
    console.log("Os dados são iguais.")
else if(true) 
    console.log('Segundo if - if aninhado.')
else
    console.log('Saída...') // erro na hora de pensar o código...

//operador ternário
const resultado =  n > 20 ? true : false
console.log(resultado)
console.log(typeof resultado)

//repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle

let contador = 0
const lista = [1, 7, 3, 64, 2, 0]
while(contador < lista.length){
    console.log('O \'elemento\' da\n vez é ' + lista[contador] + '.')
    contador++ // contador = contador + 1
}

const outraLista = ['a', 'b', 'd', 'e', 'c']
for(let contador = 0; contador < outraLista.length; contador++)
    console.log(`O elemento da 
    vez é ${outraLista[contador]}.`) //template literais, ou template strings

const testeLiteral = (`\``==="`")
console.log(`\\`)

const a=3, b=5
console.log('Oito é '+(a+b)+' \ne não '+(2*a+b))
console.log(`Oito é ${(a+b)} 
e não ${(2*a+b)}`)

//métodos de listas-arrays-vetores
const nomes = ['Abimael','Cleyciane','Paulo','Victor']
nomes.forEach(function(nome){
    console.log(nome)
})

const nomesModificados = nomes.map(function(nome){
    if(nome === 'Paulo'){
        nome = 'O Grande'
        return nome
    }else
        return nome
})

nomesModificados.forEach(function(nome){
    console.log(nome)
})

const numerosGrandes = ['60','1','9','17','99','94'].filter(function(numero){
    return (numero>10)
})

numerosGrandes.forEach(function(numero){
    console.log(numero)
})

console.log(numerosGrandes.reduce(function(total,numero){
    return parseInt(total)+parseInt(numero)
}))



//funções

function minhaFuncao(){
    console.log('Estou dentro da minha função.')
}

minhaFuncao()

const funcao = function minhaFuncao(nome, sobrenome){
    console.log(typeof nome)
    return (`${nome} ${sobrenome}`)
}

const nome = 'Victor'
const sobrenome = 'Vieira'
console.log(funcao(nome, sobrenome))
minhaFuncao(10,20)

console.log(typeof funcao)

//arrow functions - funções flecha
const soma = (a,b) => a+b

console.log(soma(5,3))

const lista = ['esse cara é maior','b','c','d']

console.log(lista.map(elemento => elemento.length))

//closures - fechametos

let x = 10

function fora(){
    //não é uma clousure
    function somarXMais5(){
        return x+5
    }
    return somarXMais5()
}
console.log(fora())

function fora(){
    let x = 7
    function somarXMais5(){
        return x+5
    }
    return somarXMais5()
}
console.log(fora())

const fora = () => ((x=7), ()=>x+5)  ()

*/

//Orientação a Objetos
/* 
class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }
    detalhesDoProduto() {
        return `O preço do produto ${this.nome} é R$ ${this.preco}.`
    }
}

const oculos = new Produto('óculos', 19.90)


//herança

class ProdutoComTamanho extends Produto {
    constructor(nome, preco, tamanho) {
        super(nome, preco)
        this.tamanho = tamanho
    }

    outraMensagem(adjetivo) {
        return `O produto ${this.nome} é ${adjetivo} demais.`
    }
}

const camisa = new ProdutoComTamanho('camisa', 26.99, 'M')
console.log(camisa.detalhesDoProduto())
console.log(camisa.outraMensagem('bom'))

//console.log(oculos.outraMensagem())

//DOM - Document Object Model

const titulo = document.getElementById('titulo')
console.log(titulo)

//query selector

const mesmoTitulo = document.querySelector('#titulo')
console.log(mesmoTitulo)

const todosOsParagrafos = document.querySelectorAll('.texto')
console.log(todosOsParagrafos)

todosOsParagrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()))

//manipulação

const textoAlterado = todosOsParagrafos[0].textContent
console.log(textoAlterado)

todosOsParagrafos[4].innerHTML = textoAlterado

todosOsParagrafos[3].classList.add('outra-classe')

todosOsParagrafos[3].classList.remove('texto')

titulo.remove()

todosOsParagrafos[0].remove()

//eventos

const botao = document.getElementById('botao')

botao.addEventListener('click', function () {
    todosOsParagrafos[2].style.backgroundColor = 'red'
})
 */
// JavaSctipt síncrono
/* 
function somar() {
    const resultado = 1 + 1
    if (resultado === 2) sucesso()
    else erro()
}

function sucesso() {
    console.log('Sucesso! A soma foi 2.')
}

function erro() {
    console.log('A soma não foi 2. Alguma coisa deu errado...')
}

somar() */

// Promises são classes em JavaScript. Métodos: then e catch.
/* 
const p = new Promise((resolve, reject) => {
    const resultado = 1 + 1
    if (resultado === 2) resolve('Sucesso! A soma foi 2.')
    else reject('A soma não foi 2. Alguma coisa deu errado...')
})

p
    .then((mensagem) => {console.log('Isso é o que está dentro do then: ' + mensagem)})
    .catch((mensagem) => {console.log('Isso é o que está dentro do catch: ' + mensagem)})

console.log(p)

console.log('Teste')
 

// callback

const melhorProgramador = 'Paulo'

function quemEhOMelhor (callback , calbackErro) {
    if(melhorProgramador==='Victor'){
        callback({
            nome: melhorProgramador,
            mensagem: ' humildemente é o melhor!'
        })
    } else {
        calbackErro({
            mensagem01: 'Tá errado...',
            mensagem02: '? Sério?'
        })
    }
}

quemEhOMelhor(
    (resultado) => {console.log(resultado.nome + resultado.mensagem)},
    (erro) => {console.log(erro.mensagem01 + melhorProgramador + erro.mensagem02)}
)

// transformando de callback para promise

const melhorProgramador = 'Paulo Sampaio'

function quemEhOMelhor() {
    return new Promise((resolve, reject) => {
        if (melhorProgramador === 'Victor') {
            resolve({
                nome: melhorProgramador,
                mensagem: ' humildemente é o melhor!'
            })
        } else {
            reject({
                mensagem01: 'Tá errado...',
                mensagem02: '? Sério?'
            })
        }
    })
}

console.log(quemEhOMelhor())

quemEhOMelhor()
    .then((resultado) => { console.log(resultado.nome + resultado.mensagem) })
    .catch((erro) => { console.log(erro.mensagem01 + melhorProgramador + erro.mensagem02) })

*/


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


