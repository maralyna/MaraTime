function relogio(){
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    let mostrar = document.getElementById("time")
    let formato = hora+ " : "+minutos+" : "+segundos
    mostrar.innerHTML = formato
    if (hora < 10){
        hora="0"+hora
    }
    if(minutos < 10){
        minutos="0"+minutos
    }
    if(segundos < 10){
        segundos="0"+segundos
    }
}
window.setInterval("relogio()",1000)