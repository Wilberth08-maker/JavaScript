// Contar los pares

console.log("Contador de pares");

function contarPares(numeros){
    let contador = 0;
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            contador++;
        }
    }
    return contador;
}

console.log(contarPares([1,2,3,4,5,6,7,8,9,10,11,12]))

// Crear una función que reciba un array de números y retorne el número más grande

console.log("Número mayor");

function numeroMayor(numeros){
    let mayor = numeros [0];
    for(let i = 0; i <= numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    return mayor;
}

console.log(numeroMayor([100,250,15,1,20,251]))

// Promedio de estudiantes

console.log("Promedio de estudiantes");

const estudiante = {
    nombre: "Wilberth",
    edad: 18,
    notas: [100, 90, 95]
}
const estudiante2 = {
    nombre: "Jasiel",
    edad: 14,
    notas: [100, 90, 85]
}

function promedio(estudiante){
    let suma = 0;
    for(let i = 0; i < estudiante.notas.length; i++){
        suma += estudiante.notas[i];
    }
    return suma / estudiante.notas.length;
}

console.log(promedio(estudiante));
console.log(promedio(estudiante2));

// Generar un reporte de calificaciones para cada estudiante

console.log("Reporte de estudiantes");


const estudiantes = [
    {nombre: "Wilberth", notas: [95,90,95]},
    {nombre: "Jasiel", notas: [80,90,85]},
    {nombre: "Jorge", notas: [100,90,95]},
]

function generarReporte(estudiantes){
    let reporte = [];
    for(let i = 0; i < estudiantes.length; i++){
        let suma = 0;
        for(let j = 0; j < estudiantes[i].notas.length; j++){
            suma += estudiantes[i].notas[j];
        }
        let promedio = suma / estudiantes[i].notas.length;
        reporte.push({nombre: estudiantes[i].nombre,
            promedio: promedio})
    }
    return reporte;
}

console.log(generarReporte(estudiantes));