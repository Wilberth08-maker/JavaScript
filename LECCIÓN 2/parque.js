// CLASE 2.

// App para validar la entrada al parque temático.

// 1. Edad y altura, tener 12 años y medir más de 140cm.

// 2. Pago o pase, debe haber hecho el pago de $20 o tener un pase VIP.

// 3. Condición de salud, No debe tener restricciones médicas.

// 4. Acompañante, si el visitante es menor de 16 años debe estar acompañado
// por un adulto.

let edad = Number(prompt("Ingresa tu edad"));

let altura = Number(prompt("Ingresa tu altura en CM"));

let pago = prompt("¿Hiciste el pago de la entrada? si - no").toLocaleLowerCase();

let pase = prompt("¿Tienes un pase VIP? si - no").toLocaleLowerCase();

let salud = prompt("¿Tienes alguna condición médica? si - no").toLocaleLowerCase();

let acompañante = prompt("¿Te acompaña un adulto? si - no").toLocaleLowerCase();

if(edad >= 12 && altura >= 140){

    if(edad < 16){

        let acompañante = prompt("¿Te acompaña un adulto? si - no").toLocaleLowerCase();
        
        if(acompañante === "si"){
            if((pago === "si" || pase === "si") && salud === "no"){
                console.log("Puedes ingresar al parque con tu acompañante, bienvenidos!")
            }
            else if(pago === "no" || pase === "no"){
                console.log("No puedes entrar porque no tienes ningún pago ni pase.")
            }
            else{
                console.log("No puedes ingresar por tu condición de salud.")
            }
        }
        else{
            console.log("Ya que eres menor de edad y no te acompaña un adulto, no puedes ingresar.")
        }
    }
    else{
        if((pago === "si" || pase === "si") && salud === "no"){
            console.log("Puedes ingresar al parque, bienvenido!")
        }
        else if(pago === "no" || pase === "no"){
            console.log("No puedes entrar porque no tienes ningún pago ni pase.")
        }
        else{
            console.log("No puedes ingresar por tu condición de salud.")
        }
    }
}
else{
    console.log("No cumples con los requisitos para ingresar.")
}