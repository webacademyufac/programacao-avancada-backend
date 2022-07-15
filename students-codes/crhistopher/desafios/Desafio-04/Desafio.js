//Desafio

function data() {
    const data = new Date()  
    const horas = String(data.getHours())
    const minutos = String(data.getMinutes())
    const segundos = String(data.getSeconds())
    const agora = `${horas}:${minutos}:${segundos}`
    console.log(agora)
  }
  
  
  setTimeout(data,5000)
  setTimeout(data,5000)
  setTimeout(data,5000)
  
  // setInterval(data,5000)
  // setInterval(data,5000)
  // setInterval(data,5000)