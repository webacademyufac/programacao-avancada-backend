const dados = [ 1, 2, 3, 4, 5]


// const dadosObjeto = {}
// dadosObjeto.n1 = dados[0]
// dadosObjeto.n2 = dados[1]
// dadosObjeto.n3 = dados[2]
// dadosObjeto.n4 = dados[3]
// dadosObjeto.n5 = dados[4]
// console.log(dadosObjeto)


const [ n1, n2, n3, n4, n5 ] = dados

const dadosObjeto = {
    n1: n1,
    n2: n2,
    n3: n3,
    n4: n4,
    n5: n5
}

const json = JSON.stringify({n1,n2,n3,n4,n5})

console.log(json)
