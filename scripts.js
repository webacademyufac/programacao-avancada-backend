/*console.log("Hello, world, Javascript!")

//variáveis
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

//tipos

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
*/
const lista = ['a','b','c','d','e']
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
*/
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






