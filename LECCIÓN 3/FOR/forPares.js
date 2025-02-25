for(let index = 10; index >= 1; index --){ // Ciclo que imprime en la consola los números del 10 al 1
    console.log(index);   
}

console.log("EJERCICIO 2"); // Separación para el ejercicio 2

let suma = 0; // Se declara la variable para el acumulador
for(let num = 1; num <= 20; num ++){      

    if(num % 2 === 0){ // Se plantea la condición para saber si es un número par
       
        suma = suma + num; // Se suma el número par al acumulador suma
    
    }    
}
console.log(`La suma total de los pares es igual a ${suma}`);