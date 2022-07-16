console.log('Hello, world, Javascript!')

//variáveis

var xNumber = 10 //number
//formas mais convenientes de declarar variáveis
let yNumber = 50
const z = "''"

yNumber = 20
console.log(yNumber)

if(true){
    let y = 15
    console.log(y)
}

console.log(y)

//tipos

const nomeTipos = "André"
console.log(nomeTipos)
console.log(typeof nomeTipos)

const idade = 25
console.log(idade)
console.log(typeof idade)

const peso = 76.5
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
const vetorArray = ['Java', 10, false]
console.log(vetorArray[1])
console.log(typeof vetorArray)
console.log(vetorArray.length)

//object literals - estruturas que descrema entidade
const usuario = {
    email: 'andre@gmail.com',
    senha: 'senha',
    nome: 'André',
    idade: 25
}

console.log(typeof usuario)

const nomeMeu = 'André Luiz'
console.log(nomeMeu.length)
// const stringParaVetor = nome.split('')
// console.log(stringParaVetor)
console.log(nomeMeu.toUpperCase())
console.log(nomeMeu.toLowerCase())
const nomeMaiusculo = nomeMeu.toUpperCase()
console.log(nomeMaiusculo)

console.log(nomeMaiusculo[0])
console.log(nomeMaiusculo[nomeMaiusculo.length-1])
console.log(nomeMaiusculo.slice(0,5))

//arrays, vetores, listas
const lista = ['a','b','c','d','e',]
console.log(lista.length)
console.log(lista[2])
console.log(typeof lista)
lista[5] = 'f'
console.log(lista[5])
lista[0] = 'x'
console.log(lista)
//lista = 'Testando atribuição de texto para lista'
lista.push('g') //adiciona elemento
console.log(lista)
lista.pop() //remove elemento
console.log(lista)
lista.shift() //remove o primeiro elemento
lista.shift()
lista.shift()
console.log(lista)
lista.unshift('h') //adiciona no primeiro elemento
console.log(lista)

//object literals - estruturas que descrema entidade
const produto = {
    nome: 'Camisa',
    preco: 9.99,
    emEstoque: true,
    size: ['P','M','G'],
    'Cor': 'azul'
}

console.log(produto['Cor'])

//destructuring - recurso para objetos para extrair conteúdo de dentro deles
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

const jsonErrado = JSON.stringify('{"nome":"Scooby","idade":10},')
console.log(jsonErrado)

//desafio 1
const vetor = [1,2,3,4,5]

const notas = {
    n1: vetor[0],
    n2: vetor[1],
    n3: vetor[2],
    n4: vetor[3],
    n5: vetor[4]
}

const { n1, n2, n3, n4, n5 } = notas

const json1 = JSON.stringify({n1, n2, n3, n4, n5})
console.log(json1)

//desafio 2
const xDesafio = 5
const yDesafio = 5

const calculadora = {
    soma: xDesafio+yDesafio,
    subtracao: xDesafio-yDesafio,
    multiplicacao: xDesafio*yDesafio,
    divisao: xDesafio/yDesafio
}

const jsonCalculadora = JSON.stringify(calculadora)

console.log(jsonCalculadora)

//estruturas, métodos de listas, funções

const n = 10
if (n > 10) // > < >= <= == !=
    console.log('Teste de entrada no if.')

const texto = 0
if (texto === '0') //=== iguala o valor e o tipo o elemento
    console.log('Os dados são iguais.')
else if (true)
    console.log('Segundo if - if aninhado')
else
    console.log('Saída...') //erro na hora de pensar no código

//operador ternário
const resultado = n > 20 ? true : false //? significa if, ao lado esquerdo se verdadeiro, e direito se falso
console.log(resultado)
console.log(typeof resultado)

let contador = 0
const listaTernaria = [1,7,3,64,2,0]
while (contador < lista.length) {
    console.log('O elemento da\n vez é '+ listaTernaria[contador] +'.')
    contador++
}

const outraLista = ['a', 'b', 'd' ,'e' ,'c']
for (let contador = 0; contador < outraLista.length; contador++)
    console.log(`O elemento da
     vez é ${outraLista[contador]}.`) //template literais, ou template string

const testeLiteral = (`\``==="`")
console.log(`\\`)

const a=3, b=5
console.log('Oito é '+(a+b)+' \ne não '+(2*a+b))
console.log(`Oito é ${(a+b)} 
e não ${(2*a+b)}`) //cifrão para colocar uma variável, juntamente com dólar

// //métdos de listas-arrays-vetores
const nomes = ['Abimael','Cleyciane','Paulo','Victor']
nomes.forEach(function(nome){
    console.log(nome)
})

const nomesModificados = nomes.map(function(nome){
    if(nome === 'Paulo')
        return nome = 'O Grande'
    else
        return nome
})
nomesModificados.forEach(function(nome){
    console.log(nome)
})

const numerosGrandes = ['6','1','9','17','99','94'].filter(function(numero){
    return (numero>10)
})

numerosGrandes.forEach(function(numero){
    console.log(numero)
})

console.log(numerosGrandes.reduce(function(total, numero){
    return parseInt(total)+parseInt(numero)
}))

//funções

function minhaFuncao() {
    console.log('Estou dentro da minha função.')
}
minhaFuncao()

const funcao = function minhaFuncao(nome, sobrenome) {
    console.log(typeof nome)
    return (`${nome} ${sobrenome}`)
}

const nome = 'André'
const sobrenome = 'Luiz'
console.log(funcao(nome, sobrenome))
minhaFuncao(10, 20)

console.log(typeof funcao)

//arrow functions - funções flecha
const soma = (a,b) => a+b

console.log(soma(5,6))

const lista = ['a', 'b', 'c', 'd']

console.log(lista.map(elemento => elemento.length))

//clousures - fechamentos

let x = 10
function fora(){
    let x = 7
    function somarXmais5(){ //função dentro de função
        return x+5
    }
    return somarXmais5()
}
console.log(fora())

//forma reduzida
let y = 10
const outroFora = () => (y=7, () => y+5) () //função, passando y como váriavel e chamando dentro de outra função

console.log(outroFora())


//Aula de sexta que faltei
//Orientação a Objetos

class Produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    detalhesDoProduto(){
        return `O preço do produto ${this.nome} é R$ ${this.preco}.`
    }
}

const oculos = new Produto('óculos', 19.90)


//herança
class ProdutoComTamanho extends Produto{
    constructor(nome, preco, tamanho){
        super(nome, preco)
        this.tamanho = tamanho
    }

    outraMensagem(adjetivo){
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

botao.addEventListener('click', function(){
    todosOsParagrafos[2].style.backgroundColor = 'red'
})
