/* Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedade n1, n2, n3, n4, n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis. */

const vetor1 = [1,2,3,4,5];

// console.log(vetor1);


const objetoVetor = {
    objetoVetor1: vetor1
}
// console.log(typeof objetoVetor)

const {objetoVetor1} = objetoVetor;

// console.log(objetoVetor1)

const jsonObjetoVetor1 = JSON.stringify(objetoVetor1);

console.log(jsonObjetoVetor1);