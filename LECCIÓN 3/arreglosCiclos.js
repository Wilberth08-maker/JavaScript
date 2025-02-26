// Proyecto. Lección 3 - Arreglos y cliclos en JavaScript

let frutas = ["sandía",  "uvas", "melón", "platano", "manzana", "pitahaya", "pera", "uvas",
    "papaya", "toronja", "mango", "pitahaya", "piña", "cereza", "durazno", "toronja",
    "naranja", "sandía", "pitahaya", "manzana",  "uvas", "cereza"]

let cantidadDeFrutas = {}; // Se define el objeto para almacenar la cantidad de cada tipo de fruta

for(let i=0; i < frutas.length; i++ ){     // Se crea un for que vaya desde 0 hasta frutas.lenght y se incremente en 1
   
    let fruta = frutas[i];      // Se define la variabñe fruta, el cual es frutas en la posición de i.
   
    if(cantidadDeFrutas[fruta] !== undefined){ // Si ya tiene un valor y no es undefined:   
       
        cantidadDeFrutas[fruta]++;            // Se incrementa 1
    }
    
    else{
        cantidadDeFrutas[fruta]=1;         // De lo contrario solo hay uno
    }
}

console.log(cantidadDeFrutas)