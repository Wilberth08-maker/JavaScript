const button = document.getElementById("cambiarContenido");
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");

let mensajeTitulo = "El contenido ha sido actualizado"
let mensajesParrafo = ["Se cambio el contenido", "De nuevo se cambio el contenido", "Otra vez...","Me estoy cansando...","...","Voy a autodestruirme en...", "3", "2", "1", "Era juego :)", "Te dare otra oportunidad"];

// Controlar el índice de cada elemento del array(contador)
let indiceParrafo = 0;

button.addEventListener("click",(evento) =>{
    evento.preventDefault();
    titulo.textContent  = mensajeTitulo;
    parrafo.textContent = mensajesParrafo[indiceParrafo];   

    // Incrementar 1 un el índice del array
    indiceParrafo++;

    // Si el índice es mayor al tamaño del array se reinicia el contador
    if(indiceParrafo >= mensajesParrafo.length){
        indiceParrafo = 0;
    }
    
})






