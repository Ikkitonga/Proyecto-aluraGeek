import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const alineacion = document.querySelector("[data-alineacion]").value;
    const imagen = document.querySelector("[data-imagen]").value;


    conexionAPI.crearPersonaje(nombre, alineacion, imagen)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

})