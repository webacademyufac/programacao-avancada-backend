const vetor = [10, 20, 30, 40, 50]


const obj = {
    n1:vetor[0],
    n2:vetor[1],
    n3:vetor[2],
    n4:vetor[3],
    n5:vetor[4]
}

// const {n1, n2, n3, n4, n5} = obj

const [n1, n2, n3, n4, n5] = vetor

const json = JSON.stringify({
    "n1":n1,
    "n2":n2,
    "n3":n3,
    "n4":n4,
    "n5":n5
})
console.log(json)

console.log(n2)