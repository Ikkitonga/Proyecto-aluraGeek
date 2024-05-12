async function listarProductos(){
    const conexion = await fetch("http://localhost:3000/productosMarvel");

    const conexionObtenida = conexion.json();

    // console.log(conexionObtenida);
    return conexionObtenida
}

export const conexionAPI={
    listarProductos
}