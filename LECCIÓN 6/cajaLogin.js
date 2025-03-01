const formulario = document.getElementById("formulario")
const usuarios = [
    {
        user: "wilberth",
        pass: '1234'
    },
    {
        user: "jasiel",
        pass: '12345'
    },
    {
        user: "jorge",
        pass: '123456'
    },
    {
        user: "angela",
        pass: '1234567'
    }
]

function mostrarError(tipo){
    let span = document.getElementById("error");
    span.innerHTML = tipo;
    span.classList.remove("hide");
    setTimeout(() => {
        span.classList.add("hide")
    }, 3000)
}

function validar(username, password){
    let usuarioEncontrado = false;

    for(let i = 0; i < usuarios.length; i++){
        if(username === usuarios[i].user){
            usuarioEncontrado = true;
            if(password === usuarios[i].pass){
                console.log("Bienvenido", usuarios[i].user);
                window.location.href = "/index.html"
            }
            else{
                mostrarError("Password incorrecto")
            }
        }
    }
    if(!usuarioEncontrado){
        mostrarError("Usuario no encontrado")
    }
}

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    let usuario = document.getElementById("inputUsuario").value.toLocaleLowerCase();
    let password = document.getElementById("inputPassword").value.toLocaleLowerCase();
    validar(usuario, password);
})