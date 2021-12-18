/*
Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

La primera función se llamará doble. Esta recibirá un número y retornará el doble.

La segunda función se llamará triple. Esta recibirá un número y retornará el triple.

La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió.

*/

function doble (numero){
    return numero * 2;
}
function triple (numero){
    return numero * 3;
}
function aplicarCallback (numero, callback){
    return callback(numero, doble, triple);
}

console.log(aplicarCallback(2, doble)); // 4
console.log(aplicarCallback(4, triple)); // 12