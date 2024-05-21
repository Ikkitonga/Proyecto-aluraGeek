import { conexionAPI } from "./conexionAPI.js";


const tarjetas = document.querySelector("[data-lista]")


tarjetas.addEventListener("click", async (event) => {
    event.preventDefault();


    const deleteButton = event.target.closest(".borrar");
    if (deleteButton) {
        const id = deleteButton.dataset.id;
        try {
            await conexionAPI.borrarPersonaje(id);
            console.log('Producto eliminado con éxito');
            const cardToRemove = deleteButton.closest(".card");
            if (cardToRemove) {
                cardToRemove.remove();
            } else {
                console.error('No se pudo encontrar el elemento padre .card');
            }
        } catch (err) {
            console.error('Error al eliminar el producto:', err);
        }
    }
});



