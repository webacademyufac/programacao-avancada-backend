/* 

// Tipos de variáveis

var x = 10
let x = 10
    // |
    // |__ Duas formas semelhates, apesar de let ser mais usual

const x = 10
    // |
    // |_Declara x como uma constante, seu valor não pode ser alterado nunca mais (constante)

// Tipos de dados

const tipoNumber = 10
    // |__É um NUMBER
    console.log(tipoNumber)

const numberTambem = 10.2
    // |__Apesar de ser um float, o JS interpreta esses números como NUMBER tambem
    console.log(numberTambem)

const nada = NULL
    // |__é um objeto do tipo NULL
    console.log(nada)
    // |
const indefinido = undefined
    // |__é objeto do tipo INDEFINIDO
    // |
    // |__>Apesar de NULL e undefined, filosoficamente, representarem o nada,
    // |__>o JS os vê como TIPOS de dados diferentes. Portanto, dependendo de sua aplicação
    // |__>atente-se o dado que está sendo passado é NULL ou UNDEFINED

const vouf = true
    // |__é do tipo BOOL
                  // |__bool pode ser True ou False
                                        //   |__ Também podem ser representados por 1 e 0, respectivamente.


const vetor = ['Java', 10, false]
    // |__é do tipo ARRAY (também chamados de vetor ou lista)
console.log(vetor[1])
console.log(typeof vetor)
console.log(vetor.length)


    // |---> usuário é um OBJECT LITERAL
const usuario = { 
    email: 'eu@email.com', // propriedade email do objeto usuário, usuario.email
    senha: 'teste123', //propriedade senha do objeto usuário, usuario.senha
    nome: 'Victor', 
    idade: 31
}
console.log(usuario)
console.log(usuario.email)
console.log(usuario.senha)

const nome = 'Bruno Patrick'
console.log(nome.length)
const stringParaVetor = nome.split('') //['B', 'r', 'u', 'n', 'o', ' ', 'P', 'a', 't', 'r', 'i', 'c', 'k']
// |__Fragmenta 'Bruno Patrick' para dentro de um vetor
// |-->Cada caractere em uma posição

// Lembre que stringParaVetor é ['B', 'r', 'u', 'n', 'o', ' ', 'P', 'a', 't', 'r', 'i', 'c', 'k']
stringParaVetor.shift()
// |__Remove o primeiro elemento do array
// |__A saída será ['r', 'u', 'n', 'o', ' ', 'P', 'a', 't', 'r', 'i', 'c', 'k']

console.log(stringParaVetor.length)
// |__Retorna o tamanho do ARRAY (quantidade de elementos)

//destructuring - recurso para objetos, para extrair conteúdo de dentro deles
// LEMBRE DO OBJECT LITERAL usuario
                
                // const usuario = { 
                //     email: 'eu@email.com',
                //     senha: 'teste123',
                //     nome: 'Victor', 
                //     idade: 31
                // }

// O Destructuring consiste em:
const {email, senha} = usuario
    // |__Criei duas variáveis ao mesmo tempo (Devem possuir o exato mesmo nome da propriedade do objeto)
    // |-- cujo seus valores é o valor que há dentro do objeto
    // email = 'eu@email.com' | senha = 'teste123'
console.log(email)
console.log(senha)

//JSON - JavaScript Object Notation

const doguinho = {
    nome: 'Scooby',  
    idade: 10   //Nota-se que a última propriedade não possui vírgula
}

const json = JSON.stringify(doguinho)
console.log(json)
    // |__Temos duas formas de manipular o JSON
    // |__Podemos criar um objeto JSON à partir de um object literal
    // |__Ou podemos escrever o JSON manualmente

const jsonManual = JSON.stringify('{
    "nome":"Scooby",
    "idade":10
}')
console.log(jsonManual)

// FIM TOPICO JSON

const texto = '0'
if(texto === 0)
    console.log("Os dados são iguais.")
else if(true) 
    console.log('Segundo if - if aninhado.')
else
    console.log('Saída...') // erro na hora de pensar o código...

//operador ternário
const resultado =  n > 20 ? true : false
    // |_Armazena em resultado True se n>20 e False se n<=20
console.log(resultado)
console.log(typeof resultado)

//repetição: precisa de 3 partes - variável de controle e a inicialização dela; 
// condição/critério de parada; alteração do valor da variável de controle

let contador = 0
const lista = [1, 7, 3, 64, 2, 0]
while(contador < lista.length){
    console.log('O \'elemento\' da\n vez é ' + lista[contador] + '.')
    contador++ // contador = contador + 1
}

const outraLista = ['a', 'b', 'd', 'e', 'c']
for(let contador = 0; contador < outraLista.length; contador++)
    console.log(`O elemento da vez é ${outraLista[contador]}.`) //template literais, ou template strings

//métodos de listas-arrays-vetores
const nomes = ['Abimael','Cleyciane','Paulo','Victor']
nomes.forEach(function(nome){
    console.log(nome)
})
    // |__O ForEach aplica sobre o elemento da vez no array alguma ação

const nomesModificados = nomes.map(function(nome){
    if(nome === 'Paulo'){
        nome = 'O Grande'
        return nome
    }else
        return nome
})
    
    // |__O map também irá aplicar uma ação no elemento da vez

        // A Diferença está no retorno de ForEach e Map
        // O Map te permite editar os valores desse array e retornar o array editado, por exemplo.
        // O ForEach não possui esse retorno, o retorno do ForEach caso você tentasse alterar
        // e retornar o array editado, por exemplo, seria UNDEFINED


console.log(numerosGrandes.reduce(function(total,numero){
    return parseInt(total)+parseInt(numero)
}))
    // |__parseInt ou parseFloat faz a conversão do TIPO de dado para, number (representação inteira)
    // e number (representação float)

        // |_Exemplo: Se você usar const entrada = prompt("Digite um número: ")
        // Esse número que você digitou seria armazenado como STRING
        // Então você fosse fazer uma operação matemática, por exemplo, ele concatenaria o valor
        // Então você converte o tipo de dado para number para poder fazer uma operação matemática


//arrow functions - funções flecha
const soma = (a,b) => a+b
    // |__ É caracterizado por () => { }
            // |__ () resume function nome_da_funçao()
                    // |__ Porém a Arrow Function é anônima, ou seja, ela não precisa de nome.
            // |__ => {  } É o redirecionamento da saída, o que está dentro das chaves são as ações que a função ou método irá realizar


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

const fora = () => ((x=7), ()=>x+5)  ()

    // Uma Clousere é uma função que conhece seu escopo.
    // Dessa forma essa função não ira confundir valores de variáveis com nomes iguais.
                // const x = 10 -> Escopo Global
                    // function fora(){
                    //     let x = 7 
                    //     function somarXMais5(){
                    //         return x+5
                    //     }
                    //     return somarXMais5()
                    // }
                        // |__ A função irá reconhecer x = 7, ele reconhece a variável mais INTERNA
*/