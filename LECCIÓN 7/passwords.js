function generadorPassword(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[];?><,./-=";
    let contraseña = "";
    for(let i = 0; i < 8; i++){ // Generar la contraseña con valores random de 8 caracteres
        const randomIndice  = Math.floor(Math.random()*caracteres.length);
        contraseña += caracteres.charAt(randomIndice);  // Acceder al caracter de la cadena de texto de acuerdo a el índice
         
    }
    return contraseña;
}

submit.addEventListener("click",(evento) => {
    evento.preventDefault();   

    password.classList.remove("hide")    // Mostrar Contraseña

    const contraseñaGenerada = generadorPassword();
    password.textContent = contraseñaGenerada;
})



