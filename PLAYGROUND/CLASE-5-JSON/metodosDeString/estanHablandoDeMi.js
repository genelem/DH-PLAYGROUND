function menciona (texto, palabra){
   let posicion = texto.indexOf(palabra)
   if(posicion !== -1){
       console.log(posicion)
       return true
   }else{
       return false
   }
}
console.log(menciona("Hola mundo","mundohh"))