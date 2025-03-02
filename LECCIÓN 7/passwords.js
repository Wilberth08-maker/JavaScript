function generadorPassword(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[];?><,./-=";
    let contraseña = "";

    // Generar la contraseña con valores random de 8 caracteres

    for(let i = 0; i < 8; i++){ 
        const randomIndice  = Math.floor(Math.random()*caracteres.length);
        contraseña += caracteres.charAt(randomIndice);  // Acceder al caracter de la cadena de texto de acuerdo a el índice
         
    }
    return contraseña;
}

// Cuando se de click al botón:
submit.addEventListener("click",(evento) => {
    evento.preventDefault();   

    password.classList.remove("hide")    // Mostrar Contraseña

    const contraseñaGenerada = generadorPassword();
    password.textContent = contraseñaGenerada;
})



