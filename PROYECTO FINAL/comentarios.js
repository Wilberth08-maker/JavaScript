document.getElementById("comentarioForm").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let autorTexto = document.getElementById("autorInput").value;
    let comentarioTexto = document.getElementById("comentarioInput").value;
    let fechaHora = new Date().toLocaleString();

    if(autorTexto.trim() === ""){
        autorTexto = "ANONIMO"
    };
 
    if(comentarioTexto.trim() === "") return;

    let comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario")

    comentarioDiv.innerHTML =`
    <p class="autor">${autorTexto}</p>
    <p>${comentarioTexto}</p>
        <span class="fecha">${fechaHora}</span>
    <button class = "eliminar" > Eliminar comentario </button>
    `;    

    document.getElementById("comentarios").appendChild(comentarioDiv);
    document.getElementById("autorInput").value = "";
    document.getElementById("comentarioInput").value = "";    

    comentarioDiv.querySelector(".eliminar").addEventListener("click",() => {
        comentarioDiv.remove();
    });
});