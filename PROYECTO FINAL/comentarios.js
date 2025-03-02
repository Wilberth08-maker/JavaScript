document.getElementById("comentarioForm").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let autorTexto = document.getElementById("autorInput").value;
    let comentarioTexto = document.getElementById("comentarioInput").value;
    let fechaHora = new Date().toLocaleString();

    if(autorTexto.trim() === ""){
        autorTexto = "ANONIMO"
    };
 
    if(comentarioTexto.trim() === "") return;

    // Los datos guardados esten en un array
    let datosGuardados = JSON.parse(localStorage.getItem("cajaComentarios")) || [];

    // Si datos guardados no es un array inicializarlo como un array vacio
    if (!Array.isArray(datosGuardados)) {
        datosGuardados = [];
    }

    // Crear un nuevo comentario
    const nuevoComentario = {
        autor: autorTexto,
        comentario: comentarioTexto,
        fecha: fechaHora,
    };

    // Agregar el nuevo comentario al array
    datosGuardados.push(nuevoComentario);

    // Guardar el nuevo comentario en el localeStorage
    localStorage.setItem("cajaComentarios", JSON.stringify(datosGuardados));

    // Verificar si se guardo en el localeStorage
    console.log(localStorage.getItem("cajaComentarios"));

    // Mostrar el comentario
    agregarComentario(nuevoComentario);
   
    // Limpiar los inputs
    document.getElementById("autorInput").value = "";
    document.getElementById("comentarioInput").value = "";    
});

// Función para mostrar el comentario
function agregarComentario (comentario) {

    let comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario")

    comentarioDiv.innerHTML =`
    <p class="autor">${comentario.autor}</p>
    <p>${comentario.comentario}</p>
        <span class="fecha">${comentario.fecha}</span>
    <button class = "eliminar" > Eliminar comentario </button>
    `;    

    // Agregar el comentario
    document.getElementById("comentarios").appendChild(comentarioDiv);

    // Eliminar el comentario del DOM y del localStorage
    comentarioDiv.querySelector(".eliminar").addEventListener("click",() => {
        comentarioDiv.remove();
        eliminarComentario(comentario);
    });
}

function eliminarComentario(comentarioEliminar){
        
    // Obtener los comentarios guardados
    let comentariosGuardados = JSON.parse(localStorage.getItem("cajaComentarios")) || [];

    // Filtar comentario a eliminar por su hora
    comentariosGuardados = comentariosGuardados.filter(comentario => comentario.fecha !== comentarioEliminar.fecha);

    // Actualizar el localStorage
    localStorage.setItem("cajaComentarios", JSON.stringify(comentariosGuardados));
}

// Mostrar los comentarios guardados al recagar la página
document.addEventListener("DOMContentLoaded", () => {

    // Obtener los comentarios guardados
    let comentariosGuardados = JSON.parse(localStorage.getItem("cajaComentarios")) || [];

    // Pasar cada comentario a la función agregarComentario
    comentariosGuardados.forEach(comentario => agregarComentario(comentario));
});
