// console.log("Hello world, JavaScript");

// //variáveis
// var x  = 10; //number
// //formas mais convenientes de declarar variáveis
// let y = 50; //
// const z = '';

// y = 20;

// console.log(y);

// if(true){
//     let y = 15;
//     console.log(y);
// }

// console.log(y);

// //tipos
// //string
// const nome = "Murilo";
// console.log(nome);
// console.log(typeof nome);

// //number
// const idade = 23;
// console.log(idade);
// console.log(typeof idade);

// //number
// const peso = 72.3;
// console.log(peso);
// console.log(typeof peso);

// //null
// const nada = null;
// console.log(typeof nada);

// //indefined
// let indefinido;
// console.log(indefinido);
// console.log(typeof indefinido);

// //boll
// const vouf = true;
// console.log(vouf);
// console.log(typeof vouf);

// //array
// const vetor = ['Java', 'C', 'PHP'];
// console.log(vetor);
// console.log(typeof vetor);
// console.log(vetor.length);

//object literals
// const usuario = {
//     email: 'eu@email.com',
//     senha: 'teste123',
//     nome: 'Victor',
//     idade: 31
// }

// console.log(typeof usuario.nome);

// const nome = 'Victor Vieira';
// console.log(nome.length);
// //const stringParaVetor = nome.split(' ');
// //console.log(stringParaVetor);

// console.log(nome.toUpperCase());
// console.log(nome.toLowerCase());

// const nomeMaiusculo = nome.toUpperCase();
// console.log(nomeMaiusculo);

// console.log(nomeMaiusculo[0]);
// console.log(nomeMaiusculo[nomeMaiusculo.length-1]);
// console.log(nomeMaiusculo.slice(0,6));

// //arrays, vetores, listas
// const lista = ['ab','b','c','d','e'];
// console.log(lista.length);
// console.log(lista[2]);
// console.log(typeof lista);
// lista[5] = 'f';
// lista[0] = 'x';
// console.log(lista);

// // lista  = 'Testando atribuição de texto para lista.'
// lista.push('g');
// console.log(lista);
// lista.pop();
// console.log(lista);
// lista.shift();
// lista.unshift('h');
// console.log(lista);


// //object literals - são estruturas que descrevem alguma entidade
// const produto = {
//     nome: 'Camisa',
//     preco: 9.99,
//     emEstoque: true,
//     size: ['P','M','G'],
//     'Cor': 'azul'
// }

// produto['Cor'];
// produto.nome;

// //destructuring - recurso para objetos para extrair conteúdo de dentro deles
// const {preco, emEstoque} = produto;
// console.log(preco);
// console.log(emEstoque);

// const [char1, char2] = lista;
// console.log(char1);
// console.log(char2);

// //JSON - JavaScript Object Notation
// const doguinho = {
//     "nome":"Scooby",
//     "idade":10
// }

// const json = JSON.stringify(doguinho);
// console.log(json);
// console.log(typeof json);
// const json2 = JSON.parse(json);
// const jsonErrado = JSON.stringify('{"nome":"Scooby", "idade":10"}');
// console.log(jsonErrado);

// //Desafio 1
// const vetor = [23, 1.70, 85, 8, 2017];
// const objeto = {
//     n1:vetor[0],
//     n2:vetor[1],
//     n3:vetor[2],
//     n4:vetor[3],
//     n5:vetor[4]
// }
// const {n1,n2,n3,n4,n5} = objeto;
// const pessoa = {
//     "Idade":n1,
//     "Altura":n2,
//     "Peso":n3,
//     "Período":n4,
//     "AnoIngresso":n5
// }
// const pessoaJson = JSON.stringify(pessoa);

//Desafio 2
// const calculadora = {
//     soma:
// }

//Aula 4
function minhaFuncao(){
    console.log('Estou dentro da minha função.');
}

minhaFuncao();

const funcao = function minhaFuncao(nome,sobrenome){
    console.log(typeof nome);
    return (`${nome} ${sobrenome}`);
}

const nome = 'Victor';
const sobrenome = 'Vieira';
console.log(funcao('Victor','Vieira'));
minhaFuncao(10,20);

console.log(typeof funcao);

//arrow functions - funções flecha

const soma = (a,b) => a+b;

console.log(soma(5,3));

const lista = ['a','b','c','d'];

console.log(lista.map((elemento) => elemento.length));

//closures - fechamentos

let x = 10;
function fora(){
    let x = 7;
    function somarXMais5(){
        return x + 5;
    }
    return somarXMais5();
}
console.log(fora());

//minha solução
// let x = 10;
// const fora = () => {
//     const somarXMais5 = () => x + 5;
//     return somarXMais5();
// }
// console.log(fora());

// //solução do professor
// let x = 10;
// let fora = () => ((x=7), () => x + 5) ();

// console.log(fora());
// console.log(typeof fora());