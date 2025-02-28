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

if(edad >= 12 && altura >= 140){

    if(edad < 16){

        let acompañante = prompt("¿Te acompaña un adulto? si - no").toLocaleLowerCase();

        if(acompañante === "si"){

            if(salud === "si"){
                alert("No puedes ingresar por tu condición de salud.")
                console.log("No puedes ingresar por tu condición de salud.")
            }
            else if((pago === "si" || pase === "si") && salud === "no"){
                alert("Puedes ingresar al parque con tu acompañante, bienvenidos!")
                console.log("Puedes ingresar al parque con tu acompañante, bienvenidos!")
            }
            else{
                alert("No puedes entrar porque no tienes ningún pago ni pase.")
                console.log("No puedes entrar porque no tienes ningún pago ni pase.")
            }            
        }
        else{
            alert("Ya que eres menor de edad y no te acompaña un adulto, no puedes ingresar.")
            console.log("Ya que eres menor de edad y no te acompaña un adulto, no puedes ingresar.")
        }
    }
    else{
        if(salud === "si"){
            alert("No puedes ingresar por tu condición de salud.")
            console.log("No puedes ingresar por tu condición de salud.")
        }

        else if((pago === "si" || pase === "si") && salud === "no"){
            alert("Puedes ingresar al parque, bienvenido!")
            console.log("Puedes ingresar al parque, bienvenido!")
        }
        else{
            alert("No puedes entrar porque no tienes ningún pago ni pase.")
            console.log("No puedes entrar porque no tienes ningún pago ni pase.")
        }
        
    }
}
else{
    alert("No cumples con los requisitos para ingresar.")
    console.log("No cumples con los requisitos para ingresar.")
}