
// console.log("Hello World, Javascript!")

// // const x = 10

// // let y = ""
// // const z = ''

// // const t = z+10

// // y = "jorge"
// // console.log(y)

// // if(1){
// //     let y = "sergio"
// //     console.log(y)
// // }

// // console.log(y)

// // // const nome = "rogerio"
// // // console.log(nome)
// // // console.log(typeof nome)

// // const idade = 28
// // console.log(idade)

// // const peso = 80.5
// // console.log(peso)
// // console.log(typeof peso)

// // //null
// // const nada = null
// // console.log(nada)
// // console.log(typeof nada)

// // //undefined
// // let indefinido 
// // console.log(indefinido)
// // console.log(typeof indefinido)

// // //booleano
// // const vouf = true
// // console.log(vouf)
// // console.log(typeof vouf)

// // //array
// // const array = ["rogerio","sergio", "leticia"]
// // console.log(array)
// // console.log(array.length)
// // console.log(typeof array)


// // //oop com object literals

// // const usuario = {
// //     email: "email@email.com",
// //     senha: "5764",
// //     nome: "rogerio",
// //     leticia: false
// // }
// // console.log(typeof usuario)
// // console.log(usuario.email,",", usuario.nome,",", usuario.leticia)

// // const nome = 'Leticia Rogeriana'
// // const stringtoarray = nome.split("")
// // console.log(nome.length, nome)
// // console.log(stringtoarray)

// // console.log(nome.toLowerCase())

// // const nomeMaiusculo = nome.toUpperCase()
// // console.log(nomeMaiusculo)

// // console.log(nomeMaiusculo.indexOf("CIA"))
// // console.log(nomeMaiusculo[0])
// // console.log(nomeMaiusculo[nomeMaiusculo.length-1])

// // console.log(nomeMaiusculo.slice(0, 7))

// const lista = ['r', 'o', 'g', 'e', 'r', 'i', 'o']
// // console.log(lista)
// // console.log(typeof lista)
// // lista[3] = "É"
// // lista[6] = "-O"
// // console.log(lista)

// // lista.push(" ")
// // lista.push("L")
// // lista.push("i")
// // lista.push("N")
// // lista.push("D")
// // lista.push("O")
// // console.log(lista)
// // lista.pop()
// // lista.pop()
// // lista.pop()
// // lista.pop()
// // lista.pop()
// // lista.shift()

// // console.log(lista)

// const produto = {
//     nome: "blusa",
//     preco: "9.99",
//     condicao: "em estoque",
//     size:["P", "M", "G"],
//     'cor': "azul"
// }

// console.log(produto.size)
// console.log(produto['cor'])

// const {preco, condicao} = produto
// console.log(preco)
// console.log(condicao)

// const[a1, b1] = lista
// console.log(a1, b1 + " gerio")


// //JSON

// const dogo = {
//     nome: "cachorro",
//     idade: 3
// }
// console.log(dogo)

// const json = JSON.stringify(dogo)
// // const json2 = JSON.stringify('{"nome":"cachorro","idade":3}')
// const jsonp = JSON.parse(json)
// console.log(json)
// console.log(jsonp)


// //desafio


// const vet = [1, 2, 3, 4, 5]

// const vetobj = {
//     n1: vet[0],
//     n2: vet[1],
//     n3: vet[2],
//     n4: vet[4],
//     n5: vet[5]
// }

// const { n1, n2, n3, n4, n5 } = vetobj

// const vetjson = JSON.stringify(n1, n2, n3, n4, n5)

// console.log(vetjson)



//aula 2


// const n = 10
// if(n>10){
//     console.log('teste de entrada no if')
// }

// const texto = false

// if (texto === 0)
//     console.log("é rogerio")
// else if(true)
//     console.log("talvez seja rogerio")
// else
//     console.log("não é rogerio")

// const resultado = n > 20 ? true : false
// if (resultado == true)
//     console.log("boa, rogerio!", typeof resultado)
// else
//     console.log("vixe, rogerio...", typeof resultado)



// const lista = [1 , 7, 3, 64, 2, 0]
// let contador = 0


// while(contador < lista.length){
//     console.log("o elemento da vez é: "+lista[contador])
//     contador++
// }
// console.log("\n")

// const lista2 = ['a', 'b', 'c', 'd', 'e']

// for (i=0;i<lista2.length;i++)
// console.log(`a letra da vez é: ${lista2[i]}`)
// if (lista2[i]==lista2[lista2.length-1])
//     console.log("\n rogerio")


// // const testeLiteral =(`\``==="`") //literal strings é tipo fstring

// // console.log(testeLiteral)

// console.log("\n")
// console.log("\n")
// const a=5, b=5
// console.log(`o resultado de a+b é ${a+b}, 
// não ${a*b}`)



// const nomes = ['rogerio', 'sergio', 'leticia', 'carlos eduardo amorim da costa']
// nomes.forEach(function(nome){ //foreach é tipo for bar in foo do python
//     console.log(nome)
// })

// const nomesModificados = nomes.map(function(nome){
//     if(nomes == "rogerio"){
//         (nome += ' o inigualavel!')
//         return nome
//     }else{
//         return nome
//     }
// })


// console.log("\n")
// console.log("\n")
// const numerosGrandes = ['6', '1', '8', '17', '99', '94'].filter //autoexplicativo
// (function(numero){
//     return (numero>10)
// })

// numerosGrandes.forEach(function(numero){
//     console.log(numero)
// })

// console.log(numerosGrandes.reduce(function(total, numero){
//     return parseInt(total)+parseInt(numero) //tal qual int(variavel) do python
// }))


//FUNÇÕES


// const funcao = function minhaFuncao(nome, sobrenome){
//     console.log(typeof nome)
//     return (`estou dentro do ${nome} de sobrenome ${sobrenome}`)
// }
// const nome = 'rogerio'
// const sobrenome = 'leticiana'
// console.log(funcao(nome, sobrenome))


// // arrow functions

// const soma = (a,b) => a+b
// console.log(soma(20,5))

// const listei = ['rogerio', 'jorge', 'sergio', 'leticia']

// console.log(listei.map((elemento) => elemento.length))


// clousures

// function fora(){
//     function somarx5(){
//         return x+5
//     }
//     return somarx5()
// }


// let x = 10




// const fora = () =>{
//     let x = 20
//     const dentro = () => x+5
//     return dentro()
// }

// const fora00 = () =>  ((x=7), () => x+5 ) () //o () funciona como return do escopo de onde ele  

// console.log(fora00())
// console.log(typeof fora00())




// OOP

class Produto {
    constructor(nome, preco) { //this é o quivalente ao self do python graças a deus
        this.nome = nome
        this.preco = preco
    }
    detalhes(){
        return(`\no preço do >${this.nome} é R$ ${this.preco}\n`)
    }
}

const rogerio = new Produto('rogerio', 0.99)
console.log(rogerio.nome, rogerio.preco)
console.log(rogerio.detalhes())

const sergio = new Produto('sergio', 0.49)
console.log(sergio.detalhes())


class ProdTamanho extends Produto {
    constructor(nome, preco, tamanho) {
        super(nome, preco)
        this.tamanho = tamanho
    }
    detalhes(){
        return(`\no preço do >${this.nome} é R$ ${this.preco} e possui tamanho "${this.tamanho}" \n`)
    }
    mensagem(adjetivo){
        return `\na pessoa de nome >${this.nome}, é mmuito ${adjetivo}.\n`
    }
}


// dom tree
const leticia = new ProdTamanho('leticia', 0.74, "pp")
console.log(leticia.detalhes())
console.log(leticia.mensagem("rogeria"))


const titulo = document.getElementById('titulo')
console.log(titulo)

const mesmoTitulo = document.querySelector('#titulo') //seleciona o elemento presente no html
console.log(mesmoTitulo)

const todosOsParagrafos = document.querySelectorAll('.texto')

todosOsParagrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()))

//manipulação
const textoAlterado = todosOsParagrafos[0].textContent
console.log(textoAlterado)

todosOsParagrafos[3].innerHTML = textoAlterado

todosOsParagrafos[3].classList.remove('texto')

// titulo.remove()


//eventos

const botao = document.getElementById('botao')

botao.addEventListener('click', function (){    //aceita um segundo parametro que é indefinido e pode aceitar diversas diretrizes e parametros
todosOsParagrafos[1].style.background = 'rgb(174, 99, 99)'
todosOsParagrafos[1].style.color = 'black'

})


//desafio
const vet = [1, 2, 3, 4, 5]

// const vetobj = {
//     n1: vet[0],
//     n2: vet[1],
//     n3: vet[2],
//     n4: vet[4],
//     n5: vet[5]
// }

// const { n1, n2, n3, n4, n5 } = vetobj

// const vetjson = JSON.stringify({n1, n2, n3, n4, n5})
// // const vetjson = JSON.stringify({n1, n2, n3, n4, n5})

// console.log(vetjson)

// const a = 10
// const b = 2

// const calculadora = {
//     soma: a+b,
//     subtracao: a-b,
//     divisao: a/b,
//     multiplicacao: a*b
// }

// const {soma, subtracao, divisao, multiplicacao} = calculadora

// const jsoncalcula = JSON.stringify({soma, subtracao, divisao, multiplicacao})
// console.log(jsoncalcula)
