 console.log("Hello World, Javascript")

 //variaveis
  var x = 10 number
//formas mais convenientes
 let y = 50
 const z = "''"
 y = 20
 console.log(y)

  if(true){
         let y = 15
   console.log("Deu certo "+ y)
 }
    console.log(y)

 // Tipos
  const nome = "Eduardo"
  console.log(nome)
  console.log(typeof nome)

  const idade = 22
  console.log(idade)
  console.log(typeof idade)

  const peso = 86.4
  console.log(peso)
  console.log(typeof peso)

//   null
  const nada = null
  console.log(null)
  console.log(typeof null)

//   undefined
  let indefinido
  console.log(indefinido)
  console.log(typeof indefinido)

//   bool
  const vouf = true
  console.log(vouf)
  console.log(typeof vouf)

//   arrays
  const vetor = ["java",10 ,false]
  console.log(vetor)
  console.log(typeof vetor)
  console.log(vetor.length)

//  object literals exemplo (`${nome} ${sobrenome}`)
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

 console.log(typeof funcao) const usuario = {
      email:'teste@hotmail.com',
      senha:'teste123',
      nome: 'Eduardo',
      idade: 22
  }

  console.log(typeof usuario)

  const nome = 'Eduardo Renan'
  console.log(nome.length)
   const stringParaVetor = nome.split('')
   console.log(stringParaVetor)
  //Maiúsculo toUpperCase
  console.log(nome.toUpperCase())
  //Minúsculo toLowerCase
  console.log(nome.toLowerCase())
  const nomeMaiusculo = nome.toUpperCase()
  console.log(nomeMaiusculo[0])
  console.log(nomeMaiusculo[nomeMaiusculo.length -1])
  console.log(nomeMaiusculo.slice(0,3))

//  Arrays, Vetore, Listas

  const lista = ['a','b','c','d','e']
  console.log(lista.length)
  console.log(lista[2])
  console.log(typeof lista)
  lista[5] = 'f'
  console.log(lista[5])
  lista[0] = 'x'
  console.log(lista)
  lista = 'Testando atributo de texto para lista.'
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

//  Object Literals = Estruturas que descrevem entidade
 const produto = {
      preco: 9.99,
      nome:'Camisa',
      emEstoque: true,
      size:['P','M','G'],
      'cor':'azul'
  }
  console.log(produto['cor'])

//  Destructuring - recurso para objetos para extrair conteudo de dentro deles
  const {preco, emEstoque} = produto                           
  console.log(preco)
  console.log(emEstoque)

  const[char1,char2] = lista
  console.log(char1)
  console.log(char2)

// JSON = Javascript Object Notation
  const doguinho = {
      nome: 'sofia',
      idade: 13
  }
  const json = JSON.stringify(doguinho)
  console.log(json)
  console.log(typeof json)
  json2 = JSON.parse(json)
  console.log(json)
  console.log(typeof json2)
  const jsonErrado = JSON.stringify('{"nome":"sofia","idade":13}')
  console.log(jsonErrado)

  const n = 10
  const texto = '0'
  if (texto === 0)
     console.log("Os dados são iguais. ")
  else if (true)
      console.log("Segundo if = if atingido ")
  else
      console.log("saida.....")

//  Operador Ternario 

 const resultado = n > 20 ? true : false
 console.log(resultado)
 console.log(typeof resultado)

//  repetição: precisa de 3 partes = variavel de controle e a incialização dela: condição/criterio de parada: alteração do valor da variavel de controle
 let contador = 1
 const lista =  [2, 7, 3, 64, 2, 0]
 while(contador < lista.length){
     console.log("O elemento da vez é " + lista[contador])
     contador++ contador = contador + 1 
 }
 const outraLista = ['a','b','c','d','e']
 for (let contador = 0; contador < outraLista.length; contador++)
 console.log(`O elemento da vez é ${outraLista[contador]}`) template literais, ou template strings

 const testeliteral = (`\'` === "'")
 console.log(testeliteral)

 const a=3, b=5
 console.log("oito é " +[a+b]+ " e não " +[2*a+b]) 
 console.log(`oito é ${(a+b)} e não ${(2*a+b)}`) 

//   metodos de listas arrays vetores
  const nomes = ['Abimael', 'Paulo', 'Victor', 'Cleyciane']
 nomes.forEach(function(nome){
     console.log(nome)
 })

 const nomesModificados = nomes.map(function(nome){
     if (nome === 'Paulo')
     return (nome = 'o Grande')
     else
         return nome
 })
 nomesModificados.forEach(function(nome){
     console.log(nome)
 })

 const numerosGrandes = ['60', '1', '9', '99', '17', '94'].filter(function(numero){
     return (numero>10)
 })
 numerosGrandes.forEach(function(numero){
     console.log(numero)
 })
 console.log(numerosGrandes.reduce(function(total,numero){
     return parseInt(total)+parseInt(numero)
 }))    


// função

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

 arrow functions - funções flecha
 const soma = (a,b) => a+b

 console.log(soma(5,3))

 const lista = ['esse cara é maior','b','c','d']

 console.log(lista.map(elemento => elemento.length))



// Closures - fechamentos

// solução da atividade eduardo
 let x = 10
 function fora (){return x+5}
 console.log(fora())

// resolução professor
  let x = 10
  const fora = () => ((x=7), () => x+5) ()
  console.log(fora())

//Função inicial
 let x = 10
 function fora (){
     let x = 7
     function somarXMais5(){
         return x+5
     }
     return somarXMais5()
 }
 console.log(fora())

//  Orientação a Objeto

 class Produto {
     constructor(nome,preco){
        this referencia um cara fora   
        this.nome = nome
        this.preco = preco
     }
     detalhesDoProduto(){
         return(`O preço do produto ${this.nome} é R$ ${this.preco}`)
     }
 }
 const oculos = new Produto('oculos',19.90)
 console.log(typeof oculos)
 console.log(oculos.nome)
 console.log(oculos.detalhesDoProduto())

 const meia = new Produto ('Meia',8.5)
 console.log(meia.detalhesDoProduto())

//  Herança tem que ter extends

 class ProdutoComTamanho extends Produto{
     constructor(nome,preco,tamanho){
         super(nome,preco)
         this.tamanho = tamanho
     }
     outraMensagem(adjetivo){
         return `O produto ${this.nome} é ${adjetivo} demais `
     }
 }
 const camisa = new ProdutoComTamanho('camisa',26.99,'M')
 console.log(camisa.detalhesDoProduto())
 console.log(camisa.outraMensagem('bom'))

// Document Object Model - DOM

const titulo = document.getElementById('titulo')
console.log(titulo)

// Query Selector Mais específico 

const mesmoTitulo = document.querySelector('#titulo')
console.log(mesmoTitulo)

const todosOsParagrafos = document.querySelectorAll('.texto')
console.log(typeof todosOsParagrafos)
console.log(todosOsParagrafos)

todosOsParagrafos.forEach((texto) => console.log(texto.textContent.toUpperCase()))

// Manipulando DOM

// Manipulando HTML
const textoAlterado = todosOsParagrafos[0].textContent
console.log(textoAlterado)
todosOsParagrafos[4].innerHTML = textoAlterado

// Manipulando CSS
todosOsParagrafos[2].style.backgroundColor = 'red'

// Manipulando classes
todosOsParagrafos[3].classList.add('outraClasse')

todosOsParagrafos[3].classList.remove('texto')
titulo.remove()

// Remover Elemento
todosOsParagrafos[0].remove()

// Eventos
const botao = document.getElementById('botao')

botao.addEventListener('click',function(){
    todosOsParagrafos[2].style.backgroundColor = 'red'
})

//  Desafio1
 const armazenado = [1,2,3,4,5]
 console.log(armazenado)
 const valorArmazenado = {
     n1:1,
     n2:2,
     n3:3,
     n4:4,
     n5:5
 }
 const {n1,n2,n3,n4,n5} = valorArmazenado
 console.log(n1)
 console.log(n2)
 console.log(n3)
 console.log(n4)
 console.log(n5)

 const json4 = JSON.stringify({n1,n2,n3,n4,n5})
 console.log(json4)

// Desafio2
 const x = 10
 const y = 2
 const soma = (x+y)
 const sub = (x-y)
 const multi = (x*y)
 const divi = (x/y)

 console.log("soma: "+soma)
 console.log("subtração: "+sub)
 console.log("multiplicação: "+multi)
 console.log("divisão: "+divi)

 const calculadora = {soma,sub,multi,divi}
 const json5 = JSON.stringify(calculadora)
 console.log(json5)


