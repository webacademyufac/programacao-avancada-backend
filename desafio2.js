const n1 = 10,n2 = 5
const objeto = {
soma: n1 + n2,
divisao: n1 / n2,
multiplicacao: n1 * n2,
subtracao: n1 - n2,
}

const {soma, divisao, multiplicacao, subtracao} = objeto
const x = JSON.stringify({soma, divisao, multiplicacao, subtracao})
console.log(x)
