let json = []

const calculadora = () => {
    
    let div = document.getElementById('div')
    let somas = document.getElementById('soma')
    let mult = document.getElementById('mult')
    let sub = document.getElementById('sub')

    div.addEventListener('click', () => {
        const x = prompt("Digite o primeiro número: ")
        const y = prompt("Digite o segundo número: ")
        const n1 = parseFloat(x)
        const n2 = parseFloat(y)
        const resultado = divisao(n1, n2)
        const text = JSON.stringify({
            "Resultado da Divisão":resultado
        })
        json.push(text)
    })

    somas.addEventListener('click', () => {
        let x = prompt("Digite o primeiro número: ")
        let y = prompt("Digite o segundo número: ")
        const n1 = parseFloat(x)
        const n2 = parseFloat(y)
        const resultado = soma(n1, n2)
        const text = JSON.stringify({
            "Resultado da Soma":resultado
        })
        json.push(text)    })
    sub.addEventListener('click', () => {
        const x = prompt("Digite o primeiro número: ")
        const y = prompt("Digite o segundo número: ")
        const n1 = parseFloat(x)
        const n2 = parseFloat(y)
        const resultado = subtracao(n1, n2)
        const text = JSON.stringify({
            "Resultado da Subtração":resultado
        })
        json.push(text)
    })

    mult.addEventListener('click', () => {
        const x = prompt("Digite o primeiro número: ")
        const y = prompt("Digite o segundo número: ")
        const n1 = parseFloat(x)
        const n2 = parseFloat(y)
        const resultado = multiplicacao(n1, n2)
        const text = JSON.stringify({
            "Resultado da Multiplicação":resultado
        })
        json.push(text)
    })

}

calculadora()

function get_number(){
    let x = prompt("Digite o valor do número: ")
    x = parseFloat(x)
    return x
}

const soma = (a,b) => a+b

const multiplicacao = (a, b) => a*b

const divisao= (a, b) => a/b

const subtracao = (a, b) => a-b



const calculadora_obj = JSON.stringify({
    soma:soma(74,69),
    multi:multiplicacao(10,20),
    div:divisao(10,2),
    subtracao:subtracao(20,10)
})

const mage = document.getElementById('magia')
let safe = []
mage.addEventListener('click', () => {
    
    const calculadora_obj_dois = JSON.stringify({
        soma:soma(get_number(),get_number()),
        multiplicação:multiplicacao(get_number(),get_number()),
        divisão:divisao(get_number(), get_number()),
        subtração:subtracao(get_number(),get_number())
    })
    safe.push(calculadora_obj_dois)
})

// MANEIRA CORRETA

const num1 = 10, num2 = 20

const calculadoraCorreta = {
    soma: num1+num2,
    sub: num1-num2,
    mult: num1*num2,
    div: num1/num2
}

const calcJSON = JSON.stringify(calculadoraCorreta)