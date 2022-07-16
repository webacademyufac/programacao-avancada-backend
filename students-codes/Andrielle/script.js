// //Object literals
// const usuario = {
//     email: "teste@gmail.com",
//     senha: "teste",
//     nome: "Batman",
//     idade: 42
// }


// console.log(usuario)

// const nome = "panda"
// console.log(nome.split(''))
// console.log(nome.toUpperCase())
// console.log(nome.replace('fofo', 'cute').toUpperCase())
// console.log(nome.indexOf('fo')) // retorna posicao da string no vetor
// console.log(nome.slice(0,8)) // retorna o conteudo nesse intervalo


// //array, vetor e lista
// const lista = ["a","e","i","o","u"]
// console.log(lista.push('b'))
// console.log(lista.pop())
// console.log(lista)

// const produto = {
//     nome: "chocolate",
//     preco: 24.99,
//     emEstoque: true,
//     sabor: ["branco", "preto"]
// }


// const {sabor, preco } = produto
// console.log(sabor," - ", preco)

// console.log("ARRAY", produto)
// const json = JSON.stringify(produto)
// console.log("JSON",json)

//DESAFIO 1
// console.log("DESAFIO 1")
// const vetor = [1, 2, 3, 4, 5]

// const objeto = {
//     n1: vetor[0],
//     n2: vetor[1],
//     n3: vetor[2],
//     n4: vetor[3],
//     n5: vetor[4]
// }

// const {n1, n2, n3, n4, n5} = objeto
// const jsonNumeros = JSON.stringify({n1, n2, n3, n4, n5})
// console.log(jsonNumeros)

// //Desafio 2
// console.log("DESAFIO 2")
// function calculadora ( num1, num2 ) {
//     const resultado = {
//         "soma": num1 + num2,
//         "subtracao": num1 - num2,
//         "divisao": num1/num2,
//         "multiplicao":  num1*num2
//      }

//     const jsonResultados = JSON.stringify(resultado)
//     console.log(jsonResultados)
    
// }

// calculadora(3,2)
// //Operador ternario
// n = 18
// const ternario = n > 20 ? true : false
// console.log(ternario)


// //Repeticao
// let contador = 0
// const lista = [18, 08, 22]

// while(contador < lista.length)
// {
//     console.log( `ta chegando ... ${lista[contador]}` )
//     contador ++
// }


// const a=10, b=8
// console.log('8 =! ' + (a+b))

// const nomes = ['Batman', 'SuperMan', 'WonderWoman']
// console.log("ForEach")
// nomes.forEach(
//     function(nome){
//         console.log(nome)
//     }
// )
// console.log("Array Function ->")
// nomes.forEach(nome => console.log(nome))

// FUNCAO
function soma(a,b){
    console.log("sua soma é:",(a+b))
}

soma(2,2)

const funcao = function soma(a,b){
    return (a+b)
}   

console.log( funcao(1,1))


//Arrow function
const subtracao = (a,b) => (a-b)
console.log("resultado eh", subtracao(10,5))

const lista = ['panda','f','o','f','o']
console.log(lista.map( elemento => elemento.length ))

//Clousures - fechamento

let y = 10

// function casa() {
//     function quarto(){
//         return y +10
//     }
//     return quarto()
// }


const casa = () => ( () => (y+10) )() 
console.log(casa())

//Orientação objetos
class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }

    infoPessoa(){
        return (`A pessoa ${this.nome} tem ${this.idade} anos`)
    }
}

const alguem = new Pessoa("Andrielle", 22);
console.log(alguem.infoPessoa())

const fulano = new Pessoa("Ada", 42);
console.log(fulano.infoPessoa())

//Herança
class Aluno extends Pessoa {
    constructor(nome, idade, coeficienteRendimento){
        super(nome,idade)
        this.coeficienteRendimento = coeficienteRendimento
    }

    infoAluno(){
        return  (`A pessoa ${this.nome} tem ${this.idade} anos com um CR de ${this.coeficienteRendimento}`)
    }
}

const nerd = new Aluno("Batman",35,10)
console.log(nerd.infoAluno())

//DOM - Document Obejct Model

const titulo = document.getElementById("titulo")
console.log(titulo)
const titulo2 = document.querySelector(`#titulo`)
console.log(titulo2)

const texto = document.querySelectorAll(`.texto`)
console.log(texto)

// pega o conteudo do texto
texto.forEach((texto) => console.log(texto.textContent))

//Manipulacao
const alteraTexto = texto[6].innerHTML += ` Vinicius de Morais`


texto[0].style.backgroundColor =  'pink'
texto[1].style.backgroundColor =  'yellow'
texto[2].style.backgroundColor =  'lavenderblush	'
texto[3].style.backgroundColor =  'cyan'
texto[4].style.backgroundColor =  'khaki'
texto[5].style.backgroundColor =  'dimgray'

const botao = document.getElementById('botao')
botao.addEventListener('click', function(){
    console.log("testando botao")

    const textoBotao = document.getElementById('textoBotao')
    textoBotao.innerHTML += `\n Você apertou no botão!`
})
