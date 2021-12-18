function reemplazoFastFast (texto, textoBuscar, textoReeplazo){
    let string = texto.replace(textoBuscar,textoReeplazo)
    return string
}
console.log(reemplazoFastFast('Este texto es mala onda', 'mala', 'buena'))