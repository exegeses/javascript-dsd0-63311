//ubicamos elemento dentro del DOM
const contenedor = document.getElementById('contenedor');

/* hacerle una pregunta al visitante y
   almecenar la respuesta en una variable
*/
let respuesta = prompt('¿qué selección ganó el mundial Qatar 2022?');

//if( respuesta == 'Argentina' || respuesta == 'argentina'  ){
if( respuesta.toUpperCase() == 'ARGENTINA' ){
    //bloque de código si la condición es true
    contenedor.innerHTML = '<img src="imgs/ok.png">';
}
else{
    //bloque de código si la condición es false
    contenedor.innerHTML = '<img src="imgs/error.png">';
}

