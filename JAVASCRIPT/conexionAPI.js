async function listarProductos() {
    return fetch("http://localhost:3000/productosMarvel")
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

const crearPersonaje = (nombre, alineacion, imagen) => {
    return fetch("http://localhost:3000/productosMarvel", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            nombre,
            alineacion,
            imagen
        })
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

const borrarPersonaje = (id) => {
    return fetch(`http://localhost:3000/productosMarvel/${id}`, {
        method: "DELETE"
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export const conexionAPI = {
    listarProductos,
    crearPersonaje,
    borrarPersonaje,

}



