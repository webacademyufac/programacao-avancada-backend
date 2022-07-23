/*Desafio 1: armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedade n1, n2, n3, n4, n5. 
Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.
*/

//1- armazenando os dados numéricos em um vetor
const vetor = [1,2,3,4,5]

//2- copiando para um objeto com as propriedades n1, n2, n3, n4, n5.
const [n1, n2, n3, n4, n5] = vetor
console.log(typeof [n1, n2, n3, n4, n5])

//3- construindo um objeto JSON com os valores das variáveis
const json =  {
    numero1: n1,
    numero2: n2,
    numero3: n3,
    numero4: n4,
    numero5: n5
}
console.log(typeof json)
console.log(json)

//4- convertendo em JSON os valores dos objetos
const convertJson = JSON.stringify(json)
console.log(typeof convertJson)
console.log(convertJson)