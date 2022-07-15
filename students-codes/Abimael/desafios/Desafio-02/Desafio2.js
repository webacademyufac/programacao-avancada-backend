//Desefio 2: desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 
// operações básica. Em outras palavras: crie um objeto calculadora, inicializando cada uma 
// das operações com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.


const calculadora = {
    sum: (a, b) => {
        resultados.soma = a + b
    },
    sub: (a, b) => {
        resultados.subtracao = a - b
    },
    multi: (a ,b ) => {
        resultados.produto = a*b
    },
    div: (a, b) => {
        resultados.divisao = a/b
    }
    
}

const resultados = {
    soma: 0,
    subtracao: 0,
    produto: 0,
    divisao: 0
}

calculadora.sum(3, 5)
calculadora.sub(3, 5)
calculadora.multi(3, 5)
calculadora.div(3, 5)

const json = JSON.stringify(resultados)
console.log(json)