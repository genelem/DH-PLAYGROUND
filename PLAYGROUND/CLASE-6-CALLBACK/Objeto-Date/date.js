/*
En este ejercicio ya vamos a tener disponible la fecha en la variable fecha y, utilizándola, debemos imprimir el siguiente mensaje:

"Hoy es el día XX del mes YY del año ZZZZ", donde XX es el número del día, YY es el número del mes y ZZZZ es el número del año. 

Ejemplo de cómo podría verse una fecha con este formato:

"Hoy es el día 0 del mes 4 del año 2019"

Funciones de Date que nos van a ayudar:

getDate()
getMonth()
getFullYear()

*/
let fecha = new Date(1970, 1, 1);

console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+fecha.getDate()+' del mes '+fecha.getMonth()+' del año '+fecha.getFullYear())