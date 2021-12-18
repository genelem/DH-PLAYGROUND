// let sumarValores = require('./sumar');
// let restarValores = require('./restar');
// let multiplicarValores = require('./multiplicar');
// let dividirValores = require('./dividir');

// console.log(sumarValores(5,5))
// console.log(restarValores(5,3))
// console.log(multiplicarValores(5,5))
// console.log(dividirValores(4,2))

let datosEnJson = '[{"name":"Argentina","capital":"Buenos Aires","región":"Americas"}]'
let datosConvertidos = JSON.parse(datosEnJson)
console.table(datosConvertidos)