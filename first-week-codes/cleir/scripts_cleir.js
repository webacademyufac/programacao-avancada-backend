console.log("Hello, world, Javascript!")

//variáveis
var x = 10 //number
//formas mais convenientes de declarar variáveis
let y = 50
const z = "''"

y = 20
console.log(y)
// mostrado bloco tipo if 
if(1){
    let y = 15
    console.log(y)
}

console.log(y)

// aula de tipos 

// variavel tipo string 
const nome1 = "Victor"
console.log(nome1)
console.log(typeof nome1)
// variavel tipo number 
const idade = 31
console.log(idade)
console.log(typeof idade)

// varivel em javascript sempre e real 
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

// manipulação de texto com uppercase e lowercase
const nome2 = 'Victor Vieira'
console.log(nome2.length)
//const stringParaVetor = nome.split('')
//console.log(stringParaVetor)
console.log(nome22.toUpperCase())
console.log(nome2.toLowerCase())
const nomeMaiusculo = nome2.toUpperCase()
console.log(nomeMaiusculo)

console.log(nomeMaiusculo[0])
console.log(nomeMaiusculo[nomeMaiusculo.length-1])
console.log(nomeMaiusculo.slice(0,6))

//arrays, vetores, listas
// aula de arrays vetores e lista 
const lista = ['a','b','c','d','e']
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

//Desafio 1: armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedade n1, n2, n3, n4, n5.
// Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

// cração do vetor
const vetor1 = [1, 2, 3, 4, 5]

// atribuindo o vetor ao objeto 
const objeto = {
    n1: vetor1[0],
    n2: vetor1[1],
    n3: vetor1[2],
    n4: vetor1[3],
    n5: vetor1[4]
}

// criando o destructuring do objeto 

const { n1, n2, n3, n4, n5 } = objeto

// transformando em um objeto JSON
const jsonVetor = JSON.stringify({ n1,n2,n3,n4,n5 })
console.log(jsonVetor)
console.log(typeof jsonVetor)

//Desafio 2: desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básica.
// Em outras palavras: crie um objeto calculadora, inicializando cada uma das operações com o resultado do processamento matemático vindo de duas variáveis
// e converta para um objeto JSON.

// declarando as variáveis a serem somadas 
const num1 = 10, num2 = 20

// ciando o objeto calculadora  com as operações a serem feitas 
const calculadora = {
    soma: num1+num2,
    sub: num1-num2,
    mult: num1*num2,
    div: num1/num2
}

// convertendo para um objeto JSON

const jsonCalc = JSON.stringify(calculadora)
console.log(jsonCalc)

//estruturas, métodos de listas, funções

const n = 100
if(n > 10){ // > < >= <= == !=
    console.log('Teste de entrada no if.')
}

// metodos para escrever codigos if 
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

// //repetição: precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle

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

// aprendendo a usar a função map

const nomesModificados = nomes.map(function(nome){
    if(nome === 'Paulo'){
        nome = 'O Grande'
        return nome
    }else
        return nome
})

// apedendo a usar o foreach

nomesModificados.forEach(function(nome){
    console.log(nome)
})

// apredendo a funçãoa filter
const numerosGrandes = ['60','1','9','17','99','94'].filter(function(numero){
    return (numero>10)
})

// mostrnaod os dados filtrados 
numerosGrandes.forEach(function(numero){
    console.log(numero)
})

// usando a função reducer 
console.log(numerosGrandes.reduce(function(total,numero){
    return parseInt(total)+parseInt(numero)
}))

// aula trabalhando com funções 
function minhafuncion(nome,sobrenome){
    console.log(`o primeiro nome é: ${nome} e o sobrenome é ${sobrenome}`)
}

minhafuncion('cleir','castro')

// passando parametros na função

function minhafuncion2(nome,sobrenome){
    return (`${nome} ${sobrenome}`)
}

console.log(minhafuncion2('cleir','castro'))


const funcao = function minhafuncion3(nome,sobrenome){
    return (`${nome} ${sobrenome}`)
}
const nome = 'cleir' 
const sobrenome = 'castro'
console.log(funcao(nome,sobrenome))

const soma = (a,b) => a+b
console.log(soma(1,2))

const lista = ['a','b','c','d', 'e']

console.log(lista.map((elemento)=>{
    return elemento.length
}))

let x= 10 
// aprendendo scopo da função 

function fora( ){
    function somarMais5(){
        return x + 5
    }
    return somarMais5()

}

console.log(fora())

let somax= 10
const fora2 = () => { const somarMais5V2 = () => somax+5 
return  somarMais5V2() 
}
console.log(fora2());
const fora3 = () => (()=> x+5) ()

console.log(fora3());
// fim aula de funções


// aula orientação a objetos

// criando classes 
class Produto {

    constructor(nome,preco){
        this.nome = nome
        this.preco = preco
    }

    detalesdoProduto(){
        return 'Opreço do produto é:'+this.preco
    }
}

const camisa = new Produto('Camisa', 19.99)

console.log(camisa.detalesdoProduto())

const meia = new Produto('meia',8.45)

console.log(meia.detalesdoProduto())

// herança

class ProdutoComTamanho extends Produto {
    constructor(nome,preco,tamanho){
    super(nome,preco)
    this.tamanho = tamanho
    }
    outraMensagemos(adjetivo){
        return `O produto ${this.nome} é ${adjetivo} é demais` 
    }
}
const camisa_tamanho = new ProdutoComTamanho('camisa', 19, 'M')
console.log(camisa_tamanho.outraMensagemos('ruim'))

// DOM - Document Object Model 

// aqui apredemos a manipulação de dados do html com javascript

const mesmoTitulo = document.querySelector('#titulo')
console.log(mesmoTitulo)

const todososparagrafos = document.querySelectorAll('.texto')
console.log(todososparagrafos)

todososparagrafos.forEach((texto)=> console.log(texto.textContent.toUpperCase))

const textoalerado = todososparagrafos[0].textContent
console.log(textoalerado)

todososparagrafos[4].innerHTML = textoalerado

todososparagrafos[2].style.backgorundColor ='red'
todososparagrafos[3].classList.add('outra-classe')
todososparagrafos[3].classList.remove('texto')



