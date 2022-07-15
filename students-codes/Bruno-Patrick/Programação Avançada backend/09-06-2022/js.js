
let x = 11

const fora = () => { const somaXMais5 = () => x+5
    return somaXMais5() }

console.log(fora())

// Sim, amigos. Isto é uma função.
const fora2 = () => ((x=8) => x+5) ()

console.log(fora2())