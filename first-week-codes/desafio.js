
console.log("Desafio 1")
console.log("##################################")

// Lista com numeros 
const listaNumeros = [1,2,3,4,5]

// Objeto com atributos 
const obj = {

    n1: listaNumeros[0],
    n2: listaNumeros[1],
    n3: listaNumeros[2],
    n4: listaNumeros[3],
    n5: listaNumeros[4]
}

// Operação de desempacontamento
const {n1,n2,n3,n4,n5} = obj

const json = JSON.stringify(obj)

console.log(json)

console.log("##################################")
console.log("Desafio 2")

const calculadora = {

    soma: n1 + n2,
    subtracao: n4-n2,
    multiplicacao: n2*n3,
    divisao: n4/n2
}

const jsonMath = JSON.stringify(calculadora)

console.log(jsonMath)

const vetor = [1,2,3,4,5]

const objeto = {

    n1: vetor[0],
    n2: vetor[1],
    n3: vetor[2],
    n4: vetor[3],
    n5: vetor[4],

}





