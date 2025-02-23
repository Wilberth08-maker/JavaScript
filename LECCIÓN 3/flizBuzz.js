
// Crear un for para recorrer los números del 1 al 100 

for(let index=1; index<=100; index++){

    // Verificar si el número es múltiplo de 3 y de 5
    if(index % 3 === 0 && index % 5 === 0){
        console.log(index,"FlizzBuzz") // Imprimir FlizzBuzz
    }
    else if(index % 3 === 0){ // Si solo es múltiplo de 3
        console.log(index, "Flizz") // Imprimir Flizz
    }   
    else if(index % 5 === 0){ // Si solo es múltiplo de 5
        console.log(index, "Buzz") // Imprimir Buzz
    }   
    else{
        console.log(index) // De lo contrario si no es múltiplo de 3 ni de 5 imprimir solo el número 
    }
}