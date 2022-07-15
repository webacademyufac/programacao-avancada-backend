
function data() {
    const actual = new Date()
    const data = {
        dia:actual.getDate(),
        mes:actual.getMonth(),
        ano:actual.getFullYear(),
        hora:actual.getHours(),
        minuto:actual.getMinutes(),
        segundos:actual.getSeconds()
    }
    console.log(`${data.dia}/${data.mes}/${data.ano} ${data.hora}:${data.minuto}:${data.segundos}`)
}
// setTimeout(data, 5000)
// setTimeout(data, 5000)
// setTimeout(data, 5000)
setInterval(data, 5000)
console.log(data())
