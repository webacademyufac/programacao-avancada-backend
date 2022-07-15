/* 

Transforme a função a seguir em uma arrow function.

function fora(){
    function somarXMais5(){
        return x+5
    }
    return somarXMais5()
}

*/

const fora = () => (x=5, () => x+2) () // Arrow function com closure
console.log(fora())