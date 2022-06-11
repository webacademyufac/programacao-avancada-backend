console.log("Hello, world, Javascript!")

var x = 10

let y = 50
const z = "''"

y = 20
console.log(y)
if(true){
    let y = 15
    console.log(y)
}
console.log(y)

const nome1 = "Leandro"
console.log(nome1)
console.log(typeof nome1)

const idade = 21
console.log(idade)
console.log(typeof idade)

const peso = 54.45
console.log(peso)
console.log(typeof peso)

const nada = null
console.log(nada)
console.log(typeof nada)

const indefinido = null
console.log(indefinido)
console.log(typeof indefinido)

const vouf = true
console.log(vouf)
console.log(typeof vouf)

const vetor = ['Java', 10, "PHP"]
console.log(vetor)
console.log(typeof vetor)
console.log(vetor.length)

const usuario = {
    email: 'leandro@email.com',
    senha: 'teste123',
    nome: 'maria',
    idade: 31
}

console.log(usuario)

const nomenome = 'pedro Vieira'
console.log(nomenome.length)
console.log(nomenome.toUpperCase())
console.log(nomenome.toLowerCase())
const nomeMaiusculo = nomenome.toUpperCase()
console.log(nomeMaiusculo)
console.log(nomeMaiusculo[0])
console.log(nomeMaiusculo[nomeMaiusculo.length-1])
console.log(nomeMaiusculo.slice(0,6))

//arrays, vetores, listas
const lista = ['aa', 'b', 'c', 'd', 'e']
console.log(lista)
console.log(lista.length)
console.log(lista[2])
console.log(typeof lista)
lista[5] = 'f'
console.log(lista[5])
lista[0] = 'x'
console.log(lista)
//lista = 'Testando atribuição de texto para lista'
lista.push('g')
console.log(lista)
lista.pop()
console.log(lista)
lista.shift() //tira o primeiro do vetor
lista.shift()
console.log(lista)
lista.unshift('ab') //insere no início do vetor
console.log(lista)

//objects literals - estruturas que descrema entidade
const produto = {
    nome: "Camisa",
    preco: 9.99,
    emEstoque: true,
    size: ['P', 'M', 'G'],
    'Cor': 'azul'

}
console.log(produto)
console.log(produto['preco'])

//destructing - recurso para objetos para extrair conteúdo de dentro deles
const {preco, emEstoque } = produto
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


const n = 10
if(n > 10){
    console.log('Teste de entrada do if.')
}

const texto = 0
if(texto === '0'){ //triple equals compara também o tipo dos dados
    console.log("Os dados são iguais.")
}
else if(true){
    console.log('Segundo if - if aninhado')
}
else
    console.log('Saída...')

//oparador ternário
const resultado = n > 20 ? true : false //se n > 20, resultado = true, se não, resultado = false;
console.log(resultado)
console.log(typeof resultado)

//repetição: início, condição, passo
let contador = 0
const lista = [1, 7, 3, 64, 2, 0]

// Laço while no javascript
while(contador < lista.length){
    console.log('O elemento da vez é ' + lista[contador] + '.')
    contador++
}

console.log('')

const outraLista = ['a', 'b', 'c', 'd', 'e', 'c']
// Laço for
for(let contador = 0; contador < outraLista.length; contador++){
    console.log('O elemento da vez é ' + outraLista[contador] + '.')
}
// Uso de Literal strings
const testeLiteral = (`\`` === "`") //true
console.log(testeLiteral)

const a=3, b=5
console.log('Oito é ' + (a+b) + ' \n e não ' + (2*a+b))
console.log(`Oito é ${(a+b)} e não ${2*a+b}`)

//método de listas-arrays-vetores
const nomes =['Abimael', 'Cleyciane', 'Paulo', 'Jose']
nomes.forEach(function(nome){
    console.log(nome)
})

// Função map para pecorrer e modificar cada elemento de uma array
const nomesModificados = nomes.map(function(nome){
    if(nome === 'Paulo')
        return (nome = 'O Grande')
    else
        return nome
})

nomesModificados.forEach(function(nome){
    console.log(nome)
})

// O filter serve para percorrer um vetor e retornar somente aqueles que atendam a uma codição logica
const numerosGrandes = ['60', '1', '9', '17', '99', '94'].filter(function(numero){
    return (numero>10)
})

console.log(numerosGrandes)
numerosGrandes.forEach(function(numeros){
    console.log(numeros)
})

console.log(numerosGrandes.reduce(function(total, numero){
    return parseInt(total)+parseInt(numero)
}))

// Funçõe em javascript
function minhaFuncao(){
    
    console.log("Estou dentro da minha função.")
    
}

minhaFuncao()

// Função com argumentos
const funcao = function minhaFuncao(nome, sobrenome){

    console.log(`O nome completo é ${nome} ${sobrenome}`)
    return `${nome} ${sobrenome}`
}

const nome = 'Leandro';
const sobrenome = 'silva'
// Passando paramentro para uma função
console.log(funcao(nome,sobrenome))

minhaFuncao(1,5)

// Arrow function

const soma = (a,b)=> a+b

console.log(soma(5,3))

const lista = ['a','b','c','d']

console.log(lista.map(elemento=> elemento.length))


//  Clousure

let x = 10


console.log((()=> (()=>x+5)())())


// Classes
class Produto{

    constructor(nome,preco){

        this.nome = nome
        this.preco = preco

    }

    detalhesDoProduto(){

        return `O preço do produto ${this.nome} é R$ ${this.preco}`
    }
}

// const camisa = new Produto('camisa',19.90)

// console.log(camisa.detalhesDoProduto());


const meia = new Produto('Meia',8.5)

console.log(meia.detalhesDoProduto())

// Herança


class ProdutoComTamanho extends Produto{

    constructor(nome,preco,tamanho){

        super(nome,preco)

        this.tamanho = tamanho
    }

    outraMensagem(adjetivo){

        return `O produto ${this.nome} é ${adjetivo} demais`
    }
    // Sobscrevendo um metodo
    detalhesDoProduto(){

        return `O preço do produto ${this.nome} é R$ ${this.preco}, seu tamanho é ${this.tamanho}`
    }
}

const camisa = new ProdutoComTamanho('camisa',19.90,'M')

console.log(camisa.outraMensagem("Linda"))
console.log(camisa.detalhesDoProduto())

// DOM - Document Object Model

// Obter elemento pelo id
const titulo = document.getElementById("titulo");


console.log(titulo)

// Uso de querySelector
const mesmoTitulo = document.querySelector("#titulo")

console.log(mesmoTitulo)

const todosOsParagrafos = document.querySelectorAll(".texto")

console.log(todosOsParagrafos)

todosOsParagrafos.forEach( item => console.log(item.textContent.toUpperCase()))

// Manipulação 

// textContent obtem o conteudo de uma elemento
const textoAlterado = todosOsParagrafos[0].textContent
console.log(textoAlterado)

// Modifica o conteudo de um elemento
todosOsParagrafos[4].innerHTML = textoAlterado

// Trabanhando com estilo com javascript
todosOsParagrafos[2].style.backgroundColor = 'red'

todosOsParagrafos[3].classList.add("outra-classe")

todosOsParagrafos[3].classList.remove("texto")

titulo.remove()

// Eventos

const botao = document.getElementById('botao')
// Ouvindo evento de click
botao.addEventListener('click',()=> console.log("Botão clicado"))