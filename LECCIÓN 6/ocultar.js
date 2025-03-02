const parrafo = document.getElementById("parrafo");
const button = document.getElementById("cambiarContenido");

const textoButton = ["Mostrar contenido","Ocultar contenido"]

// Se incializa un contador
let indexButton = 0;

button.addEventListener("click",(evento) =>{
    evento.preventDefault();

    // Borrar o agregar la clase hide al parrafo dependiendo de su índice
    if(indexButton === 0){
        parrafo.classList.remove("hide"); // Si es 1 se remueve la clase hide
    }
    else{
        parrafo.classList.add("hide"); // Si es 0 se agrega la clase hide
    }

    // Hacer un ciclo para los indices del array textoButon
    indexButton = (indexButton + 1) % textoButton.length;

    // Si indexButton = 0 entonces:
    // indexButton = (0 + 1) % 2 = 1 % 2 = 1
    // Luego:
    // indexButton = (1 + 1) % 2 = 2 % 2 = 0
    // Y así va en un ciclo.

    // Se cambia el texto del botón 
    button.textContent = textoButton[indexButton];
})