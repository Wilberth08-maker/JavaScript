const formulario = document.getElementById("formulario")
const usuarios = [
    {
        user: "Wilberth",
        pass: '1234'
    },
    {
        user: "Jasiel",
        pass: '12345'
    },
    {
        user: "Jorge",
        pass: '123456'
    },
    {
        user: "Angela",
        pass: '1234567'
    }
]

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