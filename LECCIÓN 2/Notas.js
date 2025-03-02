// Crear un programa en JavaScript que evalúe la nota de un estudiante
// y genere un mensaje personalizado basado en la nota.

// 1. Indicar la calificación.
let nota = Number(prompt("Ingrese la nota del estudiante 0-100: "));

// 2. Plantear las condiciones.

// 2.1. Si la nota es mayor o igual a 90
if(nota >= 90){

    alert("El estudiante aprueba con Excelente.")
    console.log("Excelente")

}   else if(nota >= 75){ // 2.2. Si la nota es mayor o igual a 75 y menor a 90.

    alert("El estudiante aprueba con Bien.")
    console.log("Bien")

}   else if(nota >= 60){ // 2.3. Si la nota es mayor o igual a 60 y menor a 75.

    alert("El estudiante aprueba con Suficiente.")
    console.log("Suficiente")

}   else { // 2.4. Si la nota es menor a 60.

    alert("El estudiante NO aprueba.")
    console.log("No aprueba")

}

