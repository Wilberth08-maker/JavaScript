function sumar(a, b){       // Función para sumar.
    return a + b;
}

function restar(a, b){      // Función para restar.
    return a - b;
}

function multiplicar(a, b){     // Función para multiplicar.
    return a * b;
}

function dividir(a, b){     // Función para dividir.

    if(b === 0){        // Excepción, no se puede dividir entre cero, es una inderteminación.

        return "ERROR. División entre cero"

    }

    return a / b;
}

// LLAMAR A VALORES ALEATORIOS DENTRO DE LAS FUNCIONES

console.log(`La suma de 5 y 3:`, sumar(5, 3));
console.log(`La resta de 20 y 45:`, restar(20, 45));
console.log(`La multiplicación de 7 y 3:`, multiplicar(7, 3));
console.log(`La división de 21 entre 0:`, dividir(21, 0));
console.log(`La multiplicación de 5/3 y 3/5:`, multiplicar(dividir(5, 3), dividir(3, 5)));
