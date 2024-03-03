/* SECCIONES WEB*/

const SeccionAnadir = document.querySelector("taskadd-form")
const SeccionCheckState = document.querySelector("check-tasks")
const SeccionMostrar = document.querySelector("state-tasks")

/* BOTONES NAVEGACION */

const BtnAnadirTarea = document.getElementById("BtnAnadirTarea")
const BtnCheck = document.getElementById("BtnGestorTareas")
const BtnMostrar = document.getElementById("BtnEstadoTareas")

/* FUNCIONAMIENTO NAVEGACION */

function MostrarAnadir() {

    SeccionAnadir.style.display = "block"
    SeccionCheckState.style.display = "none"
    SeccionMostrar.style.display = "none"
}
function MostrarCheck() {
    SeccionAnadir.style.display = "none"
    SeccionCheckState.style.display = "block"
    SeccionMostrar.style.display = "none"
}
function MostrarEstados() {
    SeccionAnadir.style.display = "none"
    SeccionCheckState.style.display = "none"
    SeccionMostrar.style.display = "block"
}

window.onload = function() {
    MostrarAnadir()
}
