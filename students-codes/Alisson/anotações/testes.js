let x = 0
let y = 7

// Arrow function pegando novo valor x do escopo e multiplicando a variável global y
const resultado = () => (x=10, (x*y))
console.log(resultado())

// Aplicando Closure com arrow function

const Novoresultado = () => (x=5, () => x+2) ()
console.log(Novoresultado())


// Verifica se um número é par ou impar
let parOuImpar = function(numero) {
    if (numero % 2 === 0) {
        return 'par'
    }
    else {
        return 'impar'
    }
}

console.log(parOuImpar(2))

// Refatorando código anterior usando arrow function com if ternário

let parOuImpar2 = numero => numero %2 === 0 ? 'par (if ternário)' : 'impar (if ternário)'
console.log(parOuImpar2(5))