document.getElementById("comentarioForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evita que la página se recargue
    
    let comentarioTexto = document.getElementById("comentarioInput").value;
    let fechaHora = new Date().toLocaleString();

    if (comentarioTexto.trim() === "") return;

    let comentarioDiv = document.createElement("div");
    comentarioDiv.classList.add("comentario");

    comentarioDiv.innerHTML = `
        <p>${comentarioTexto}</p>
        <span class="fecha">${fechaHora}</span>
        <button class="eliminar">X</button>
    `;

    document.getElementById("comentarios").appendChild(comentarioDiv);
    document.getElementById("comentarioInput").value = "";  // Limpia el campo

    comentarioDiv.querySelector(".eliminar").addEventListener("click", function() {
        comentarioDiv.remove();
    });
});
