/*console.log("hello world, javascript")

//variaveis

//variavel sem escopo
var x = 10

//varivavel com escopo
let y = ""

//varivael com escopo e imutavel
const z = ''

y = 20

console.log(y)

//se if for verdadeiro e vai ser pq 1 retorna true ele altera a variavel Y no escopo do bloco para 15 e escreve o valor no console
if(1){
   let y = 15
    console.log(y)
}

console.log(y)

//declara uma constante nome com valor "Abimael"
const nome = "Abimael"

console.log(nome)//escreve o valor que o nome tem no console
console.log(typeof nome)//verifica o tipo do nome

//declara uma constante idade com valor 21
const idade = 21

console.log(idade)//escreve o valor que o idade tem no console
console.log(typeof idade)//verifica o tipo de idade


const peso = 61.2

console.log(peso)
console.log(typeof peso)

*/

//null
//atribui o valor null, que em um condicional retorna false
const nada = null
console.log(nada)
console.log(typeof nada)
/*

//undefined

//atribui o valor undefined, que em um condicional retorna false
let indefinido
console.log(indefinido)
console.log(typeof indefinido)


//bool
//um boolean pode ser true ou false
const vouf = true
console.log(vouf)
console.log(typeof vouf)


//array
//declaração de um array com elementos de tipos variados, o array em si é um tipo Object
const vetor = ['java', 10, false]
console.log(vetor[1])
console.log(typeof vetor)
console.log(vetor.length)
*/

/*
//objeto literals
//declaração de um objeto com proriedade chave:valor com tipos strings e number e o objeto é um tipo array
const usuario = {
    email: 'abimaelqm@hotmail.com',
    senha: '51655165',
    nome: 'Abimael',
    idade: 21
}

console.log(usuario.nome)
console.log(typeof usuario)

const nome = 'Abimael'
//transforma a string nome em um vetor com os caracteres da string
const stringParaVetor = nome.split('')
console.log(stringParaVetor)
console.log(Object(nome))
console.log(Array(nome))
console.log(nome.toUpperCase())
console.log(nome.toLowerCase())

const nomeMaisculo = nome.toUpperCase()

console.log(nomeMaisculo)
console.log(nomeMaisculo[nomeMaisculo.length-1])

console.log(nomeMaisculo.slice(1,6))

//arry vetor lista
const lista = ['a','b','c','d','e','f','g']

//.length mostra o tamanho do array
// console.log(lista.length) 
// console.log(lista[1])
// console.log(typeof lista)
// console.log(lista)

//push adiciona no final array
// lista.push('bb')
// console.log(lista)
//pop retira o ultimo elemento do array
// lista.pop()
// console.log(lista)
//shift retira o primeiro elemento do array
// lista.shift()
// console.log(lista)
//unshift adiciona no final do array
// lista.unshift('bala')
// console.log(lista)

//object literals - estrutura que descreve entidade
//criação de um objeto literal que representa uma entidade, no caso um produto
const produto = {
    nome: 'Camisa',
    preco: 9.99,
    emEstoque: true,
    size: ['P','M','G'],
    'cor': 'vermelha'
}

console.log(produto.cor)
console.log(produto['cor'])

//destructuring - recurso de objetos para extrair variaveis de dentro dele

//para facilitar o uso de uma propriedade do obejto se usa a desistruturação, que deve usar variaveis com o mesmo nome da propriedade do objeto 
const { preco, emEstoque } = produto
console.log(preco, emEstoque)

//para facilitar o acesso aos dados do vetor se usa a desistruturação, mas diferente do objeto que tem propriedades, o do vetor pega os valores e poe na variavel pela ordem que estã no vetor
const [ char1, char2 ] = lista
console.log(char1)
console.log(char2)

//JSON JavaScript Object Notation

const doguinho = {
    nome: 'Scooby',
    idade: 10,
}

const json = JSON.stringify(doguinho)
console.log(json)
const json2 = JSON.parse(json)
console.log(json2)


const jsonErrado = JSON.stringify({"nome":"Scooby","idade":10})
console.log(jsonErrado)


//estruturas, metodos de lista, funções

const n = 10

if(n>10){
    console.log('Teste de entrada no if')
}

const texto = 0

if(texto == '0'){
    console.log('Os dados são iguais')
}else console.log('os dados não sao iguais')

//operador ternario
//antes da ? ele verifica se é verdadeiro, se for ele executa o que esta depois da interrogação e antes dos dois pontos(:) se for falso, executa o comando depois dos dois pontos(:)
const resultado = n>20 ? true:false

console.log(resultado)
console.log(typeof resultado)


//Repetição: precisa de 3 partes - variavel de controle e a inicialização da variavel, condiçãp de parada e alteraçãodo valor da variavel de controle

let cont = 0
const listar = [1,2,3,4,5,6,7]
//enquanto o index for menor que o tamanho do array ele exibe o elemento do array no index da vez
while(cont< listar.length) {
    console.log('O \'elemento da lista\' é '+listar[cont]+'.')
    cont++
}

const outraLista = ['a','jota', 'ana', 'ja']
//do index 0 ate o tamanho do array - 1 ele exibe o elemento do index
for(let contador = 0; contador < outraLista.length; contador++){
    console.log(`O elemento da lista é ${outraLista[contador]}.`)
}


console.log(`\``==="`")

const a = 3, b = 5

console.log("Oito é "+ (a+b)+ "\ne não "+(2*a+b))

//template string, usado para poder escrever constantes ou variaveis junto a string sem precisar concatenar, isso usando crase e onde for por algum dado, usar `${dado}`
console.log(`Oito é ${a+b} 
e não ${2*a+b}`)

//metodos de listas arrays vetores
const nomes = ['Abimael', 'Cleyciane', 'Paulo', 'Victor']

nomes.forEach((nome)=> console.log(nome))

//o map percorre e altera passando o array alterado para outra "variavel"
const nomesModificados = nomes.map((nome) => {
    if(nome === 'Paulo')
        return nome = 'O grande'
    else
        return nome
})

nomesModificados.forEach((nome)=> console.log(nome))

//flter cria outro array com base em um array e a condição implantada pelo filter
const numerosGrandes = [4, 9, 44, 66, 55, 99].filter((numero) => numero>10)

console.log(numerosGrandes)

//reduce faz a soma dos elementos do array
console.log(numerosGrandes.reduce((accumulator, number) => accumulator + number,0))




//funções

function minhaFuncao(){
    console.log('Estou dentro da minha funcao')
}

minhaFuncao()

// Na criação da função se chama parametros
const funcao = function minhaFuncao(nome, sobrenome ){
    console.log(typeof nome)
    console.log(`o nome completo é ${nome} ${sobrenome}`)
    return (`${nome} ${sobrenome}`)
}

const nome = "Abimael"
const sobrenome = "Lima"

//Na criação da função se chama parametros (nome,sobrenome )
console.log(funcao(nome,sobrenome))

//arrow functions

//se o que ela faz e apenas uma execução entao nao precisa usar o return pois ja retorna por si.
const soma = (a,b)=> a+b

soma()

const lista = ['Esse cara é maior','a','b','c','d']

console.log(lista.map( elemento => elemento.length))

//Clouseres

let x = 10

//O x que é chamado para o calculo é o que esta mais proximo do encapsulamento que foi chamado, de dentro pra fora

// const fora = () => {
//     let x = 2
//     function somaMais5(){
//         return x+5
//     }
//     return somaMais5()
// }

//faz o mesmo que a função acima so que com a escrita reduzida
const fora = () => (x= 3 ,() => x+5)()


console.log(fora())

*/

/*
//Orientação a objetos

//criação de uma classe Produto
//seu nome por padrao deve iniciar com letra maiuscula
class Produto {
    //construtor define as caracteristicas da classe
    constructor(nome,preco){
        this.nome = nome
        this.preco = preco
    }

    //metodo d
    detalhesDoProduto = () => `O preço do produto ${this.nome} é R$${this.preco}`

}

//Criação do objeto oculos a partir da classe Produto
const oculos = new Produto("Óculos", 19.99)

console.log(oculos.detalhesDoProduto())
console.log(oculos)

//Criação do objeto meia a partir da classe Produto
const meia = new Produto("Meia", 2.55) 

console.log(meia.detalhesDoProduto())
console.log(meia)


//heranças 
//Criando uma classe ProdutoTamanho que recebe a classe Produto como herança
class ProdutoComTamanho extends Produto {
    constructor(nome, preco, tamanho){
        // passando as caracteristicas de Produto por meio do super() para o ProdutoTamanho
        super(nome,preco)
        this.tamanho = tamanho
    }
    //Ele tambem recebe os metodos criados na classe pai
    outraMensagem = (adjetivo) => `O produto ${this.nome} é ${adjetivo} demais`

}
//criação do objeto camisa a partir da classe filha ProdutoTamanho 
const camisa = new ProdutoComTamanho("Camisa", 253.56, "M")
console.log(camisa.detalhesDoProduto())
console.log(camisa.outraMensagem("Linda"))
*/

/*
//DOM - Document Object Model
*/
//getElementById
//capturando o titulo pelo id usando o getElementById
const titulo = document.getElementById('titulo')
console.log(titulo)

//querySelector

//capturando o titulo pelo id usando o querySelector
const mesmoTitulo = document.querySelector('#titulo')
console.log(mesmoTitulo)

//capturando todos os paragrafos com a class texto
const paragrafos = document.querySelectorAll('.texto')
console.log(paragrafos)

// percorrendo todos o paragrafos e colocando em caixa alta
paragrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()))


//manipulação

//capturando o texto de um dos paragrafos
const textoAleatorio = paragrafos[0].textContent

//usando o texto capturado do paragrafoe colocando em outro
paragrafos[3].innerHTML = textoAleatorio
//mudando o estilo de um dos paragrados
paragrafos[0].style.backgroundColor = 'red'

titulo.innerText = 'Proximo video'

//remove() remove o elemento html
paragrafos[2].remove()

//Captura o elemento html e salva na constante botao
const botao = document.querySelector('#botao')

//adicionaum evento click no botao que mostra o texto "Testando o botao" no console.log
botao.addEventListener('click', () => console.log("Testando o botao"))



// JavaScript Sincrono

// function somar(){
//     const resultado = 1+1
//     if(resultado===2) sucesso()
//     else erro()
// }

// function sucesso(){
//     console.log("Sucesso! A soma foi 2")
// }

// function erro(){
//     console.log("A soma não foi 2. Alguma coisa deu errado...")
// }

// somar()

/*
//Promisses sao classes em JavaScript. Metodos: then e catch

const p = new Promise((resolve, reject) => {
    const resultado = 1+1
    if(resultado===2)resolve("Sucesso! A soma foi 2")
    else reject("A soma não foi 2. Alguma coisa deu errado...")
})

p
    .then((mensagem) => {console.log(`Isso é o que está dentro do then: ${mensagem}`)})
    .catch((mensagem) => {console.log(`Isso é o que está dentro do catch: ${mensagem}`)})

console.log(p)
console.log("teste")
*/

/*
//callback
const melhorProgramador = 'Abimael'

function quemEhOMelhor (callback, CallbackErro) {
   
    if(melhorProgramador==='Abimael'){
        callback({
            nome: melhorProgramador,
            mensagem: "Omilior"
        })
    }else {
        CallbackErro({
            mensagem1: 'Está errado...',
            mensagem2: '? sério?'
        })
    }
}

quemEhOMelhor(
    ({nome, mensagem}) => {console.log(`${nome} ${mensagem}`)},
    ({mensagem1, mensagem2}) => {console.log(mensagem1+ melhorProgramador +mensagem2)}
)
*/

// Transformando callback em promise
const melhorProgramador = 'Abimael'

function quemEhOMelhor () {
    return new Promise ((resolve, reject) => {
        if(melhorProgramador==='Abimael'){
            resolve({
                nome: melhorProgramador,
                mensagem: "Omilior"
            })
        }else {
            reject({
                mensagem1: 'Está errado...',
                mensagem2: '? sério?'
            })
        }
    })
    
}
console.log(quemEhOMelhor())

quemEhOMelhor()
    .then(({nome, mensagem}) => {console.log(`${nome} ${mensagem}`)})
    .catch(({mensagem1, mensagem2}) => {console.log(mensagem1+ melhorProgramador +mensagem2)})


