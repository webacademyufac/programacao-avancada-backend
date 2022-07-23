/* Desefio 2: desenvolva uma calculadora que armazene em um objeto JSON o 
resultado das 4 operações básica. Em outras palavras: crie um objeto calculadora, 
inicializando cada uma das operações com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.*/

//1- criando as variaveis para a calculadora
const v1 = 5;
const v2 = 5;
const soma = 0, subtracao = 0, mutiplicacao = 0, divisao = 0;

//2- construindo um objeto e realizando os calculos
const resultado = {
    soma: v1+v2,
    subtracao: v1-v2,
    mutiplicacao: v1*v2,
    divisao: v1/v2
}
//3- imprimindo os tipos
console.log(typeof resultado)
console.log(resultado)

//4- convertendo em json
const jsonResultado = JSON.stringify(resultado)

//5- imprimindo o resultado
console.log(typeof jsonResultado)
console.log(jsonResultado)
