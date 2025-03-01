let marca = prompt("Ingresa la marca que quieres buscar").toLowerCase();
let color = prompt("Ingresa el color que quieres buscar").toLowerCase();

const autos = [
    { marca: 'toyota', modelo: 'Corolla', color: 'azul'},
    { marca: 'honda', modelo: 'Civic', color: 'rojo'},
    { marca: 'subaru', modelo: 'WRX', color: 'gris'},
    { marca: 'bmw', modelo: 'M4', color: 'azul'},
    { marca: 'ford', modelo: 'Mustang', color: 'rojo'},
    { marca: 'tesla', modelo: 'Model 3', color: 'gris'},
    { marca: 'chevrolet', modelo: 'Silverado', color: 'blanco'}
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

