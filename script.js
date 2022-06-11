// criacao de funcoes e teste de hierarquia
console.log("Hello World JS")

var x = 10;

let y = 50
const z = '0'

y = 20
console.log(y)
if(true){
    let y = 15
    console.log(y)
}
console.log(y)

// tipagem

const nome2 = 'pedro victor'
console.log(nome)
console.log(typeof nome)

const idade = '17'
console.log(idade)
console.log(typeof idade)

const peso = '82.6'
console.log(peso)
console.log(typeof peso)

const nulo = null
console.log(nulo)
console.log(typeof nulo)

const indefinido = '1'
console.log(indefinido)
console.log(typeof indefinido)



const usuario = {
    email:'pedro@gmail.com',
    senha: 'pedro123',
    nome: 'pedro',
    idade: 17
}
console.log(usuario)

const n = 10
if ( n > 10) {
    console.log(n)
}
const texto = 'texto'
if (texto == 'texto') {
    console.log(texto)
}


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

function minhaFuncao(){
    console.log('funcao :D')
}

minhaFuncao()



minhaFuncao();

const funcao = function minhaFuncao(nome, sobrenome){
    console.log(typeof nome)
    return (`${nome} ${sobrenome}`)
}

const nome = 'pedro'
const sobrenome = 'victor'
console.log(minhaFuncao('pedro','victor'))
minhaFuncao(10,20)

console.log(typeof funcao)

const soma = function somadois(a,b){
    return a + b 

}

const soma1 = (a,b) => {
    Soma1 = a + b
    console.log(soma1)
}


const lista = ['p','e','k','a']
console.log(lista.map((elemento) => {
    return elemento.length
}))

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

// 
// function fora(){
//     const soma = function somarX () => {
//         return x + 5
//     }
//     return somarX()
// }

minhaFuncaos = () => {
    console.log('oiii')
}
let x = 10
let teste = () => (() => x + 5) ()
console.log(teste())


// orientacao a objeto

class Produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    detalhesDoProduto(){
        return `o preco do produto ${this.nome} e R$ ${this.preco}`    
    }
}

//estruturas, métodos de listas, funções


const camisa = new Produto('camisa',19.90)
console.log(camisa.nome)
console.log(camisa.detalhesDoProduto())
console.log(typeof camisa)

const meia = new Produto('meia',8.5)
console.log(meia.detalhesDoProduto())

//heranca

class ProdutoComTamanho extends Produto{
    constructor(nome, preco, tamanho){
        super(nome,preco)
        this.tamanho = tamanho
    }
    outraMensagem(adjetivo){
        return `O produto ${this.nome} e ${this.adjetivo} demais`
    }
}
const camisa2 = new ProdutoComTamanho('camisa',26.99,'M')
console.log(camisa2.detalhesDoProduto())
console.log(camisa2.outraMensagem())


const titulo = document.getElementById('titulo')
console.log(titulo)

const mesmoTitulo = document.querySelector('#titulo')
console.log(mesmoTitulo)

const todosOsParagrafos = document.querySelectorAll('.texto')
console.log(todosOsParagrafos)

todosOsParagrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()))
 
//manipulacao

const textoAlterado = todosOsParagrafos[0].textContent
console.log(textoAlterado)
todosOsParagrafos[4].innerHTML = textoAlterado
todosOsParagrafos[0].style.backgroundColor = 'purple'
todosOsParagrafos[1].style.backgroundColor = 'green'
todosOsParagrafos[2].style.backgroundColor = 'purple'
todosOsParagrafos[3].style.backgroundColor = 'green'
todosOsParagrafos[4].style.backgroundColor = 'purple'


const botao = document.getElementById('botao')

botao.addEventListener('click', function() {
    console.log('testando o botao')
})