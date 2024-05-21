import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");


function crearCard(nombre, alineacion, imagen, id) {
    const cards = document.createElement("div");
    cards.className = "contenedor_productos";
    cards.innerHTML =
        `<div class="productos_tarjeta">
                <img src="${imagen}" alt="${nombre}" class="producto_img">
         <div class="producto_titulo">
                <p class="producto_nombre">${nombre}</p>
         <div class="productos_alineacion_tachito">
                <p class="producto_alineacion">${alineacion}</p>
                <span class="borrar" data-id="${id}"><i class="fa-solid fa-trash-can"></i></span>
         </div>
         </div>
    </div>`;

    lista.appendChild(cards);
    return cards;
}

const render = async () => {
    try {
        const listaAPI = await conexionAPI.listarProductos();

        listaAPI.forEach(element => lista.appendChild(crearCard(element.nombre, element.alineacion, element.imagen, element.id)));
    } catch (error) {
        console.log(error);
    }
}

render()














