const libro = {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    publicación: 1943,
    estado: "Disponible",
    capitulos: ["Introducción", "El encuentro con el zorro", "El asteroide  B-612"],

    // Mostrar la información del libro
    describirLibro: function(){
        return `${this.titulo} de ${this.autor} publicado en ${this.publicación} esta ${this.estado}`
    },

    // Mostrar los capitulos
    listarCapitulos: function(){
        console.log(`Capitulos de ${this.titulo}`);
        this.capitulos.forEach((capitulo, index) => {
            console.log(`${index+1}. ${capitulo}`);
        })        
    }
}

console.log(libro.describirLibro());

libro.listarCapitulos();
