/*
Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.

Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
*/

let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce(function(estado, numero){
    return estado + numero;
})

console.log(totalVueltas)