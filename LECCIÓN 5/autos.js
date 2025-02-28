let marca = prompt("Ingresa la marca que quieres buscar").toLowerCase();
let color = prompt("Ingresa el color que quieres buscar").toLowerCase();

const autos = [
    { marca: 'Toyota', modelo: 'Corolla', color: 'azul'},
    { marca: 'Honda', modelo: 'Civic', color: 'rojo'},
    { marca: 'Subaru', modelo: 'WRX', color: 'gris'},
    { marca: 'BMW', modelo: 'M4', color: 'azul'},
    { marca: 'Ford', modelo: 'Mustang', color: 'rojo'},
    { marca: 'Tesla', modelo: 'Model 3', color: 'gris'},
    { marca: 'Chevrolet', modelo: 'Silverado', color: 'blanco'}
]

// Auto buscado por marca
let autoBuscado = null;

for(let i = 0; i < autos.length; i++){
    if(autos[i].marca === marca){
        autoBuscado = autos[i];
        break;
    }
}

if(autoBuscado){
    console.log("Auto encontrado: ", autoBuscado);
}
else{
    console.log("No se encontro la marca", marca)
}

// Auto buscado por color

const autoDeColor = [];

for(let i = 0; i < autos.length; i++){
    if(autos[i].color === color){
        autoDeColor.push(autos[i]);
    }
}

// Imprimir la lista de colores o decir que no lo encontro dependiendo del tamaño del array
if(autoDeColor.length > 0){
    console.log("Lista de autos de color", color, ":", autoDeColor);
}
else{
    console.log("No se encontro ningun auto de color", color);    
}

