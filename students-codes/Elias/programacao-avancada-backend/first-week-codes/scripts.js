// console.log("Hello, World, Javascript!")

//variaveis 
// var x = 10 //number
// //formas mais convenientes de declarar variáveis 
// let y = 18 
// const z = "''"

// const t = z+10

// y = 20
// console.log(y)
// if(1){
//     let y = 15
//     console.log(y)
// }

// console.log(y)

// //tipos

// const nome = "Elias"
// console.log(nome)
// console.log(typeof nome)

// const idade = 18
// console.log(idade)
// console.log(typeof idade)

// const peso = 75.4
// console.log(peso)
// // console.log(typeof peso)

// //null
// const nada = null
// console.log(nada)
// console.log(typeof nada)

    
// //undefined
// let indefinido 
// console.log(indefinido)
// console.log(typeof indefinido)

// //bool
// const vouf =  true
// console.log(vouf)
// console.log(typeof vouf)

// //array
// const vetor = ['Java', 17, false]
// console.log(vetor)
// console.log(vetor.length)

//object literals
// const usuario = {
//     email: 'eu@email.com',
//     senha: 'teste123',
//     nome: 'Elias',
//     idade: 18
// }

// console.log(usuario.nome)

// console.log(typeof usuario)

// const nome = 'Cacau Elias'
// // console.log(nome.length)
// // const stringParaVetor = nome.split('')
// // console.log(stringParaVetor[stringParaVetor.length-1])
// console.log(nome.toLocaleUpperCase())
// console.log(nome.toLocaleLowerCase())
// const nomeMaiusculo = nome.toUpperCase()
// console.log(nomeMaiusculo)
// console.log(nomeMaiusculo.indexOf('IAS'))
// console.log(nomeMaiusculo.slice(0,3))

// arrays, vetores, listas
// const lista = ['a', 'b', 'c', 'd', 'e']
// console.log(lista.length)
// lista[5] = 'f'
// lista[0] = 'x'
// console.log(lista)
// lista.push('g')
// console.log(lista)
// lista.pop()
// lista[5] = 'f'
// console.log(lista)
// lista.shift()
// console.log(lista)
// lista.unshift('a')
// console.log(lista)

// //objetct literals - estruturas que descrevem entidade
// const produto = {
//     nome: 'Camisa Corinthians',
//     preco: 9.99,
//     emEstoque: true,
//     size: ['p','m','g'],
//     'cor': 'azul'
// }

// console.log(produto.cor)
// console.log(produto['cor'])

// // destructuring - recurso para objetos para extarir contúdo de dentro deles (os objetos)
// const { preco, emEstoque } = produto
// const preco = produto.preco
// console.log(preco)
// console.log(emEstoque)

// const [char1, char2] = lista
// console.log(char1)
// console.log(char2)

// // JSON - JavaScript Object Notation
// const doguinho = {
//     nome: 'rex',
//     idade: 10
// }

// const json = JSON.stringify(doguinho)
// console.log(json)
// console.log(typeof json)
// const json2 = JSON.parse(json)  
// console.log(json2)
// console.log(typeof json2)

// const jsonerrado = JSON.stringify('{"nome":"rex","idade":10}')
// console.log(jsonerrado)

// * DESAFIO 1 * 
// armazene 5 dados numericos em um vetor. Em seguido, copie para um objeto com as propriedades n1, n2, n3, n4, n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis

// const vet = [1, 2, 3, 4, 5]
// console.log(vet)

// const objeto = {
//     n1: vet[0],
//     n2: vet[1],
//     n3: vet[2],
//     n4: vet[3],
//     n5: vet[4]
// }
// console.log(objeto)

// const { n1, n2, n3, n4, n5 } = objeto
// const nota1 = objeto.n1
// const nota2 = objeto.n2
// const nota3 = objeto.n3
// const nota4 = objeto.n4
// const nota5 = objeto.n5

// console.log(nota1)
// console.log(nota5)

// const json = JSON.stringify({n1,n2,n3,n4,n5})
// console.log(json)

// * DESAFIO 2 *
// desenvolva uma calculadora que armazene um objeto JSON o resultado das 4 operações básicas. Em outras palavras: crie um objeto calculadora, inicializando cada uma das operações com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

// const x = 10
// const y = 2
// const calculadora = {
//     soma: x + y,
//     sub: x - y,
//     div: x/y,
//     mult: x*y
// }

// const jsonCalculadora = JSON.stringify(calculadora)
// console.log(jsonCalculadora)

// // estrturas, métodos de listas, funções

// const n = 10
// if(n > 10){
//     console.log('Teste de entrada no if')
// }

// const texto = 0
// if(texto === '0'){
//     console.log("Teste de entrada no if com string")
// }else if(true){
//     console.log("Segundo if - if aninhado")
// }else{
//     console.log("Tercerio if - aninhado") // erro na hora de pensar o código
// }

// //operador ternário
// const resultado = n > 20 ? console.log("n maior que 20"):console.log("menor que 20")

// //repetição precisa de 3 partes - variável de controle e a inicialização dela; condição/critério de parada; alteração do valor da variável de controle

// let contador = 0
// const lista = [1, 7, 3, 64, 2, 8]
// while(contador < lista.length){
//     console.log('O elemento da vez é: ' + lista[contador] + '.')
//     contador++
// }

// const outraLista = ['a', 'b', 'c', 'd', 'e', 'f']
// for(let contador = 0 ; contador < outraLista.length ; contador++){
//     console.log('O elemento da vez é: ' + outraLista[contador] + '.')}

// for(let contador = 0 ; contador < outraLista.length ; contador++){
//     console.log(`O elemento da vez é
//      ${outraLista[contador]}.`)}
//      // template literais, ou template strings

// const testeLiteral = ('\''==="'")
// console.log(testeLiteral)
// console.log("\\")

// const a=3, b=5
// console.log("Oito é " +(a+b)+' \ne não '+(2*a+b))
// console.log(`Oito é ${a+b}
// e não ${2*a+b}`)

// métodos de listas-arrays-vetores
/*
const nomes = ['Rogério', 'João', 'Talarico', 'Claudionor', 'Paulo']

// percorrer o vetor e printar no console o conteudo de cada posição do vetor

nomes.forEach(function(nome){ //rodar no array
    console.log(nome)
})

// buscar no vetor e modifica-lo no return

const nomesModificados = nomes.map(function(nome){
    if (nome === 'Paulo') //buscar no array
        return nome = 'O grande'
    else    
        return nome
})

nomesModificados.forEach(function(nome){
    console.log(nome)
})

//realizar a filtragem do vetor com os parametros estabelecidos

const numerosGrandes = ['6', '1', '9', '17', '99', '94'].filter(function(numero){
    return (numero > 10) //filtrar os valores no array
})

numerosGrandes.forEach(function(numero){
    console.log(numero)
})

// interar cada elemento do vetor para gerar um unico valor

console.log(numerosGrandes.reduce(function(total, numero){
    return parseInt(total)+parseInt(numero) //reduce calcula os valores no array (reduz)
}))*/

// funções

/*
function minhaFuncao(nome, sobrenome){
    return (`Nome Completo: ${nome} ${sobrenome}`)
}

console.log(minhaFuncao('Elias', 'Cacau'))
console.log(minhaFuncao(10, 20))

// arrow functions - funções flecha
const soma = (a, b) => a+b

//const soma = (a, b) => return a+b
// const soma = function soma(a, b){
//     return a + b
// }

console.log(soma(5,3))

const lista = ['Motorola','Samsung','Apple','Xiaomi']

//console.log(lista.map(elemento => elemento.length))
console.log(lista.map((elemento) => {
    return elemento.length
}))*/

// closures - fechamentos

// let x = 10

// não é uma closure porque não possui o let x = valor (qualquer numero)
// function fora(){
//     function somaXmais5(){
//         return x+5
//     }
//     return somaXmais5()
// }

// const fora = () => ((x=7) => x +5) ()
// function fora(){
//     let x = 5
//     function somaXmais5(){
//         return x+5
//     }
//     return somaXmais5()
// }

// console.log(typeof fora)
// console.log(fora())

// Orientação a objeto

class Produto{ // criando uma classe
    constructor(nome, preco){ // objetos da classe
        this.nome = nome
        this.preco = preco
    }
    detalhesDoProduto(){ // método
        return `O preço do produto ${this.nome} é: R$ ${this.preco}.`
    }
}

const camisa = new Produto('Camisa', 19.90) // objeto
console.log(camisa.detalhesDoProduto())

const meia = new Produto('Meia', 4.99)
console.log(meia.detalhesDoProduto())

class ProdutoComTamanho extends Produto{ //herança da classe Produto
    constructor(nome, preco, tamanho){
        super(nome, preco)
        this.tamanho = tamanho
    }
    outraMensagem(valor){ // novo método
        return `O produto ${this.nome} é ${valor} demais!`
    }
}

const short = new ProdutoComTamanho('Calção', 30, 'P') // objeto da classe filha (herdada)
console.log(short.outraMensagem('grande')) //utilizando método da classe filha (herdada)
console.log(short.detalhesDoProduto()) // utilizando método da classe mãe

// DOM - Document Object Model

const titulo = document.getElementById("titulo")
console.log(titulo)

// query selector id = # , class = .

const mesmoTitulo = document.querySelector('#titulo')
console.log(mesmoTitulo)

const todosOsParagrafos = document.querySelectorAll('.texto')
console.log(typeof todosOsParagrafos)
console.log(todosOsParagrafos)

// percorrendo o vetor com todos os paragrafos do HTML e printando a partir da variavel que roda o vetor 'texto', utilizando o 'textContent' conteudo que esta dentro do vetor do html, caso nao utilizado vai pegar o html .toUpperCase() para transformar todas as letras em maiúsculo
todosOsParagrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()))

// manipulação

const textoAlterado = todosOsParagrafos[0].textContent
console.log(textoAlterado)

// innerHTML sobreescreve o html

todosOsParagrafos[4].innerHTML = textoAlterado

// estilizando o paragrafo 2 com vermelho

//todosOsParagrafos[2].style.backgroundColor = 'red'

// modificando a class de um <p>

todosOsParagrafos[3].classList.add('outra-classe')

todosOsParagrafos[3].classList.remove('texto')

//titulo.remove()

// apagando todos os <p>

// todosOsParagrafos.forEach((texto) => texto.remove())

// eventos

const botao = document.getElementById('botao')

botao.addEventListener('click', function(){
    todosOsParagrafos[2].style.backgroundColor = 'red'
})