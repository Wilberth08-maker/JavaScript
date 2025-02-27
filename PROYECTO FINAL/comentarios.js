document.getElementById("comentarioForm").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let comentarioTexto = document.getElementById("comentarioInput").value;
    let fechaHora = new Date().toLocaleString();

    if(comentarioTexto.trim() === "") return;

    let comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario")

    comentarioDiv.innerHTML =`
    <p>${comentarioTexto}</p>
        <span class="fecha">${fechaHora}</span>
        <button class = "eliminar" > x</button>
    `;       
    

    document.getElementById("comentarios").appendChild(comentarioDiv);
    document.getElementById("comentarioInput").value = "";

    comentarioDiv.querySelector(".eliminar").addEventListener("click",() => {
        comentarioDiv.remove();
    });
});
