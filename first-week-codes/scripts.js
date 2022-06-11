//teste do console log
console.log('Hello world, Javascript!')

//teste de variáveis
var x = 10 //number

//formas mais convenientes de declaração de variáveis
let y = 50      //pode ser atualizada mas não declarada de novo
const z = 20    //não pode ser atualizada nem declarada
y = 20
console.log(y)

//
if(1){
    let y = 25
    console.log(y)
}
console.log(y)

//identificação de tipos

//string
const nomeTeste = 'Teste'
console.log(nomeTeste)
console.log(typeof nomeTeste)

//number
const pesoTeste = 70.2
console.log(pesoTeste)
console.log(typeof pesoTeste)

//null
const nadaTeste = null
console.log(nadaTeste)
console.log(typeof nadaTeste)

//undefined
let indefinidoTeste     //não pode ser const
console.log(indefinidoTeste)
console.log(typeof indefinidoTeste)

//boolean
const bolTeste = true
console.log(bolTeste)
console.log(typeof bolTeste)

//array
const vetorTeste = ['Java', 'Javascript', , indefinidoTeste, 'Python']   //inserido um espaço vazio no array, é exibido "vazio" no console no espaço correspondente
console.log(vetorTeste)
console.log(typeof vetorTeste)
console.log(vetorTeste.length)  //retorna o tamanho de um array


//object literals
const usuario = {
    email:'felipe@gmail.com',
    senha: 'teste123',
    nome: 'Felipe',
    idade: 21
}

console.log(typeof usuario)     //tipo objeto - um conjunto de propriedades que funcionam como variáveis

const nome = 'Felipe Bezerra'   
console.log(nome)               //teste de retorno de propriedade do objeto

const stringParaVetor = nome.split('')  //divide uma string em um vetor de caracteres separado
console.log(stringParaVetor)

const nomeMaiusculo = nome.toUpperCase()    //muda a string para apenas caracteres maiúsculos
console.log(nomeMaiusculo)

const nomeMinusculo = nome.toLowerCase()    //muda a string para apenas caracteres minúsculos
console.log(nomeMinusculo)

console.log(nomeMaiusculo[nomeMaiusculo.length-1])  //retorna a última letra da string
console.log(nomeMaiusculo.slice(0,6))   //retorna uma substring composta pelos 6 primeiros caracteres da original

//arrays, vetores e listas
const lista = ['0','b','c','d']
console.log(lista.length)
lista[0] = 'a'      //substitui um elemento da lista
lista[4] = 'b'      //insere um elemento no final da lista
console.log(lista.length)
lista.pop()         //remove um elemento do final da lista
lista.push('e')     //insere o argumento como elemento no fim da lista
lista.shift()       //remove um elemento do início da lista
console.log(lista)

//object literals
const produto = {
    nome: 'Camisa',
    preco: 9.99,
    emEstoque: true,
    size: ['P', 'M', 'G'],
    Cor: 'azul'
}
console.log(produto['Cor'])

//desestruturação de variáveis
const {preco, emEstoque} = produto
console.log(preco)
console.log(emEstoque)

//JSON - Javascript Object Notation
const doguinho = {
    "nome": "Scooby",
    "idade": 10
}

const json = JSON.stringify(doguinho)
console.log(json)
console.log(typeof json)

//Desafio 01
const notas_vet = [10.0, 9.0, 9.5, 8.0, 8.5]

const notas_obj = {
    n1: notas_vet[0],
    n2: notas_vet[1],
    n3: notas_vet[2],
    n4: notas_vet[3],
    n5: notas_vet[4]
}

const {n1, n2, n3, n4, n5} = notas_obj

const notas_json = JSON.stringify({n1, n2, n3, n4, n5})
console.log(notas_json)

//Desafio 02
const valor1 = 10, valor2 = 20

const calculadora = {
    soma: valor1 + valor2,
    sub: valor1 - valor2,
    mult: valor1 * valor2,
    div: valor1 / valor2
}

const calc_json = JSON.stringify(calculadora)
console.log(calc_json)

//estruturas, métodos de listas, funções
const n = 100
//estrutura condicional if - vai executar se a condição for cumprida
if(n > 10){ // >, <, >=, <=, == e != são os operadores utilizáveis em condições
    console.log('Teste de entrada no if.')
}

const texto = 0
if(texto === '0'){  //compara o valor e o tipo de um dado
    console.log('Os dadaos são iguais.')
} else if(true){    //vai executar se a primeira condição não for cumprida
    console.log('Segundo if - if aninhado.')
} else              //vai executar se a segunda condição não for cumprida
    console.log('Nunca')    //erro de consistência na criação do código

//operador ternário - forma de resumir uma estrutura condicional
const resultado = n > 20 ? true : false
console.log(resultado)
console.log(typeof resultado)

//estruturas de repetição precisam de 3 partes - variável de controle inicializada; condição/critério de parada; alteração do valor da variável de controle
let contador = 0
const lista = [1, 7, 3, 64, 2, 0]
while(contador < lista.length){     //repete a execução do bloco enquanto o contador não chegar ao tamanho da lista
    console.log('O elemento da vez é '+ lista[contador] + '.')
    contador++
}

//estrutura de repetição for padrão
const outraLista = ['a', 'b', 'd', 'e', 'c']
for(let contador = 0; contador < outraLista.length; contador++){
    console.log(`O elemento da vez é ${outraLista[contador]}.`)     //uso de literal para deixar o código mais resumido
    //template literals 
}

const testeLiteral = (`\``==="`")
console.log(testeLiteral)
console.log('adasdas\\asdadasd')

const a = 3, b = 5
console.log('Oito é ' + (a + b) + ' \ne não ' + (2 * a + b))    //o \n é usado para pular linhas em strings padrão
console.log(`Oito é ${(a + b)}                                  
e não ${(2 * a + b)}`)                                          //a linha da string pode ser pulada no próprio código em literals

//métodos de listas-arrays-vetores
const nomes = ['Abimael', 'Cleyciane', 'Paulo', 'Victor']

//lista cada string integrante da lista
nomes.forEach(function(nome){
    console.log(nome)
})

//localiza uma string específica na lista e a substitui pela string retornada
const nomesModificados = nomes.map(function(nome){
    if(nome === 'Paulo')
        return (nome = 'O Grande')
    else
        return nome
})

nomesModificados.forEach(function(nome){
    console.log(nome)
})

const numerosGrandes = ['6', '1', '9', '17', '99', '94'].filter(function(numero){
    return (numero>10)
})

numerosGrandes.forEach(function(numero){
    console.log(numero)
})

console.log(numerosGrandes.reduce(function(total, numero){
    return parseInt(total) + parseInt(numero)
}))

//funções
const funcao = function minhaFuncao(nomeFuncao, sobrenomeFuncao){
    //console.log(`O nome completo é ${nome} ${sobrenome}.`)
    return (`O nome completo é ${nome} ${sobrenome}.`)
}

const nomeFuncao = 'HAHAHAHAHHA'
const sobrenomeFuncao = 'PARABÉNS ZÉ VAI SER PAI DE NOVO'
console.log(funcao(nomeFuncao, sobrenomeFuncao))
console.log(typeof funcao)

//arrow functions - funções flecha
const soma = (a, b) => a + b
console.log(soma(8, 7))

const lista = ['a', 'b', 'c', 'd']
console.log(lista.map((elemento) => elemento.length))

//clousures - fechamentos

let x = 10

const fora = () => ((x = 7), () => x + 5) ()

function fora2(){
    x = 8
    function somarXmais5(){
        return x+5
    }
    return somarXmais5()
}
console.log(fora())
console.log(fora2())

//Orientação a objetos
class Produto {
    constructor(nome, preco){
        this.nome = nome
        this.preco = preco
    }
    detalhesdoProduto(){
        console.log(`O preço do produto ${this.nome} é R$ ${this.preco}`)
    }
}

const aaa = new Produto('Rubber Cock', 100)
console.log(aaa.nome)
console.log(typeof aaa.nome)
aaa.detalhesdoProduto

//Herança
class ProdutoComTamanho extends Produto{
    constructor(nome, preco, tamanho) {
        super(nome, preco)
        this.tamanho = tamanho
    }
    mensagemAdjetivo(adjetivo){
        return `O produto ${this.nome} é ${adjetivo}.`
    }
}

const camisa = new ProdutoComTamanho('camisa', 29.99, 'colossal')
camisa.detalhesdoProduto()
camisa.mensagemAdjetivo('pirocuda')

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

todosOsParagrafos[2].style.backgroundColor = 'red'

todosOsParagrafos[3].classList.add('outra-classe')

todosOsParagrafos[3].classList.remove('texto')

titulo.remove()

todosOsParagrafos[0].remove()

//eventos
const botao = document.getElementById('botao')
botao.addEventListener('click', console.log('PICAAAA'))