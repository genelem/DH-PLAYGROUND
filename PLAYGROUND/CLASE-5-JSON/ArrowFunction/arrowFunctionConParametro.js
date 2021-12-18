/*
Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria para convertirla en una arrow function.
*/

function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
}

//Refactorizar la función
let saludar = nombre => "Hola,"+" "+nombre+"!"