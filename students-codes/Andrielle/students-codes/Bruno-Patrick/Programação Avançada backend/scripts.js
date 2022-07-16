console.log("Javascript!")

var x = 10
let y

const z = (msg) => {
    if(typeof msg != 'string'){
        console.log("Argumento informado não é uma string")
    }else{
        console.log("Argumento informado é uma string")
    }
}
let argumento = () => {
    const input = prompt("Digite um argumento: ")
    return input
}
// z(argumento())

// Object Literals
const usuario = {
    email: '021996.bmx@gmail.com',
    senha: 'Uma senha aí',
    nome: 'Bruno Patrick',
    idade: 20,
    texto: "Na verdade ele disse 'traa' "
}
console.log(usuario)

for(i in usuario){
    console.log(i)
}

const lista = ['1', '2']
console.log(lista)

const {email, nome} = usuario
console.log(email)
console.log(nome)

const [var1, mil] = lista
console.log(var1 + ' | ' + mil)

const json = JSON.stringify(usuario)
console.log(json)