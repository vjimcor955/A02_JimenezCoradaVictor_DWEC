// Selectores

const agregarBtn = document.querySelector(".button.u-full-width.button-primary")
const mensaje = document.querySelector("#mensaje")
const listaMensajes = document.querySelector("#lista-mensajes")


// Variables

let mensajes = []


// Listeners

agregarBtn.addEventListener("click", anadirMensaje)
listaMensajes.addEventListener("click", eliminarMensaje)


// Funciones

comprobarLocalStorage()

// Compruebo si el LocalStorage contiene algo y lo muestro
function comprobarLocalStorage() {
    const listaLS = localStorage.getItem("mensajes")
    mensajes = JSON.parse(listaLS)

    mostrarHTML()
}

// Funcion que añade mensajes a la lista y actualiza la pantalla y el LocalStorage
function anadirMensaje(evento) {
    evento.preventDefault()
    mensajes.push(mensaje.value)

    actualizarLocalStorage()
    mostrarHTML()
}

// Funcion que elimina mensajes de la lista y actualiza la pantalla y el LocalStorage
function eliminarMensaje(evento) {
    if (evento.target.classList.contains("borrar-mensaje")) {
        const mensajeId = evento.target.parentElement.getAttribute("id")
        mensajes.splice(mensajeId-1, 1)

        actualizarLocalStorage()
        mostrarHTML()
    }
}

// Funcion que actualiza la pantalla
function mostrarHTML() {
    limpiarHTML()

    let id = 1
    mensajes.forEach(mensaje => {
        const mensajeP = document.createElement("p")
        mensajeP.id = id
        mensajeP.innerHTML = `${mensaje}<a href="#" class="button borrar-mensaje">X</a>`
        listaMensajes.appendChild(mensajeP)
        id++
    })
}7

// Funcion que borra la lista
function limpiarHTML() {
    while (listaMensajes.firstChild) {
        listaMensajes.firstChild.remove()
    }
}

// Funcion que actualiza el LocalStorage
function actualizarLocalStorage() {
    localStorage.setItem("mensajes", JSON.stringify(mensajes))
}