/*
Desestructuremos la Ferrari.
Para este ejercicio contamos con un objeto literal auto ya definido.

Queremos, usando desestructuramiento, definir las variables marca y color, haciendo que las mismas tengan el valor correspondiente del objeto literal.

*****Recordemos que las variables deben tener el mismo nombre que en el objeto literal.*****
*/

let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca,  color} = auto;