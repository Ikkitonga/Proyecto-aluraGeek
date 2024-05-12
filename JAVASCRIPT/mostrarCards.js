import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearCard(nombre, alineacion, imagen) {
    const cards = document.createElement("div");
    cards.className = "contenedor_productos";
    cards.innerHTML = `<div class="productos_tarjeta">
    <img src="${imagen}" alt="" class="producto_img">
    <div class="producto_titulo">
        <p class="producto_nombre">${nombre}</p>
        <div class="productos_alineacion_tachito">
            <p class="producto_alineacion">${alineacion}</p>
            <span><i class="fa-solid fa-trash-can"></i></span>
        </div>
        </div>
    </div>`

    return cards;
}


async function listarProductos() {
    const listaAPI = await conexionAPI.listarProductos();

    listaAPI.forEach(element => lista.appendChild(crearCard(element.nombre, element.alineacion, element.imagen)));
}

listarProductos()