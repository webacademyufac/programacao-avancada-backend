const vetor = [1,2,3,4,5]

const objeto = {
    n1: vetor[0],
    n2: vetor[1],
    n3: vetor[2],
    n4: vetor[3],
    n5: vetor[4]
}
const {n1,n2,n3,n4,n5} = objeto
const x = JSON.stringify({n1,n2,n3,n4,n5})
console.log(x)
console.log(vetor)
console.log(objeto)