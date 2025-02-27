const libros = {
    // Array de libros leídos
    librosLeidos:["El principito", "Cien años de soledad", "Pedro Paramo", "Don Quijote de la Mancha"],

    // Función para agregar un libro
    agregarLibro: function(nuevoLibro){
        this.librosLeidos.push(nuevoLibro)
        console.log(`Libro ${nuevoLibro} agregado.`)
    },

    // Función para mostrar los libros
    mostrarLibrosLeidos: function(){
        console.log("Libros leídos: ", this.librosLeidos);
    }

}   

libros.mostrarLibrosLeidos();       // Se imprimen los libros leídos 

libros.agregarLibro("Harry Potter");        // Se agrega el libro Harry Potter

libros.mostrarLibrosLeidos();       // Se imprimen los libros leídos con el libro Harry Potter agregado
