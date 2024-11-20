const horas = document.getElementById("horas")
const minutos = document.getElementById("minutos")
const segundos = document.getElementById("segundos")

const relogio = setInterval(function time() {
    let dateToday = new Date()
    let hor = dateToday.getHours().toString().padStart(2, "0")
    let min = dateToday.getMinutes().toString().padStart(2, "0")
    let seg = dateToday.getSeconds().toString().padStart(2, "0")

    horas.textContent = hor
    minutos.textContent = min
    segundos.textContent = seg
})
