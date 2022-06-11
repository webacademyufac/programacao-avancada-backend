
/*
console.log("hello world java")

//criando variaveis 

var x = 10 //number 

let y = 40
const z = "''"

y = 20
console.log(y)
if(true){
    
    let y = 41
    console.log(y)
}

// tipos de variaveis , String , inteiro , booleano
const nome = "Victor"
console.log(nome)
console.log(typeof nome)

const idade = 35
console.log(idade)
console.log(typeof idade)

const idade1 = 35.1
console.log(idade1)
console.log(typeof idade1)

const nada = null
console.log(nada)
console.log(typeof nada)

let indefinido 
console.log(indefinido)
console.log(typeof indefinido)

const vouf = true
console.log(vouf)
console.log(typeof vouf)


 //Arrays
const vou = ['Java','C','php']
console.log(vou)
console.log(typeof vou)
console.log(vou.length)

//objects literals 

const usuario = {
     email: 'eu@email.com',
     senha: 'teste123', 
     nome: 'Victor',
     idade: 31
}

console.log(usuario.nome)

const nome1 = "Victor"
console.log(nome.length)
const stringparavetor = nome.split('')
console.log(stringparavetor)
console.log(nome.toUpperCase())

const nomeMaiusculo = nome.toUpperCase()
console.log(nomeMaiusculo[nomeMaiusculo.length-1])
console.log(nomeMaiusculo.slice(0,5))

//arrays,vetores,listas

const lista = ['a','b','c','d','e']
console.log(lista[0])
console.log(typeof lista)
lista[5] = 'f'
console.log(lista[5])
console.log(lista)

lista.push('g')
console.log(lista)
lista.pop()
console.log(lista)
lista.shift()
lista.unshift('h')
console.log(lista)

//objets literals - estruturas que descrevem atitude
const produto = {
    nome: 'Camisa',
    preco: 9.99,
    emEstoque: true,
    size:['P','M','G'],
    'Cor': "azul"
}

produto.nome
produto['nome']

//descruct - recurso para objetos para extrair variaveis de dentro deles

const{preco,emEstoque} = produto
console.log(preco)
console.log(emEstoque)

const[char1, char2] = lista
console.log(char1)
console.log(char2)

//json javascript object notation
const doguinho = {
    nome: 'Scooby',
    idade: 10
}
const json = JSON.stringify(doguinho)
console.log(json)


const lista1 = [1,2,3,4,5]

const object ={
     n1: lista[0],
     n2: lista[1],
     n3: lista[2],
     n4: lista[3],
     n5: lista[4]

}
const[a,b,c,d,e] = object
const jsonVetor = JSON.stringify({ a,b,c,d,e })
console.log(jsonVetor)
console.log(typeof jsonVetor)




//estruturas,metodos de listas , funçoes 

const n = 10
if( n > 10 ){
    console.log('Teste de entrada do if')
}

const texto = 'texto'
if(texto == 'texto')
         console.log('os dados são iguais')
else if(true){
    console.log('segundo if - aninhado')    
}

//operador ternario
const resultado = n > 20 ? true : false
console.log(resultado)
console.log(typeof resultado)

let contador = 1
const lista2 = [1,2,3,4,5,6,7]
while(contador <=  lista2.length){
     console.log('o elemento da vez' + lista[contador]+'.')
     contador++ 

}

const outralista = ['a','b','c','d','e','g']
for(let contador = 0;contador < outralista.length; contador++)
   console.log(`çççççççç ${outralista[contador]} . `)

   const n1 = 100
if(n1 > 10){ // > < >= <= == !=
    console.log('Teste de entrada no if.')
}

const texto1 = '0'
if(texto1 === 0)
    console.log("Os dados são iguais.")
else if(true) 
    console.log('Segundo if - if aninhado.')
else
    console.log('Saída...') // erro na hora de pensar o código...


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
*/
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

//clousures - fechametos

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

//const fora = () => ((x=7), ()=>x+5)  ()

//orientação a objetos

class Produto{
    constructor(nome,preco){   
     this.nome = nome 
     this.preco = preco 
    }
    detalhesDoProduto(){
        return `o preco do produto ${this.nome} é R$ ${this.preco}`
    }
}

const oculos = new Produto('Oculos',19.90)

const meia = new Produto('meia', 8.5)
console.log(meia)
console.log(meia.detalhesDoProduto())

//herança

class ProdutoComTamanho extends Produto{
    constructor(nome,preco,tamanho){
        super(nome,preco)
        this.tamanho = tamanho
    }
    outraMensagem(adjetivo){
        return `O produto ${this.nome} e ${adjetivo} demais`
    }
}

const camisa = new ProdutoComTamanho('Camisa',19.90,'M')
console.log(camisa)
console.log(typeof camisa)
console.log(camisa.detalhesDoProduto())
console.log(camisa.outraMensagem('bom'))

//Dom - Document object Model

const titulo = document.getElementById('titulo')
console.log(titulo)

//query selector

const mesmoTitulo = document.querySelector('#titulo')
console.log(mesmoTitulo)

const Todososparagrafos = document.querySelectorAll('.texto')
console.log(Todososparagrafos)

Todososparagrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()))

//manipulaçao de dados html

const textoAlterado = Todososparagrafos[0].textContent
console.log(textoAlterado)

Todososparagrafos[4].innerHTML = textoAlterado

Todososparagrafos[3].style.backgroundColor = 'blue'

Todososparagrafos[5].classList.add('outra-classe')

Todososparagrafos[5].classList.remove('texto')

//botao - eventos

const botao = document.getElementById('botao')

botao.addEventListener('click', function(){
    console.log('testando botao')
})

