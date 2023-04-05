//ubicamos elemento dentro del DOM
const ghost = document.querySelector('#ghost');

//flag = variable uxiliar
let direccion = 'derecha';
let posX = 0;

function movimientoX()
{
    /* incremento de posX y decremento de posX */
    if( direccion == 'derecha' ){
        posX++; //posX = posX + 1;
    }
    if( direccion == 'izquierda' ){
        posX--; //posX = posX - 1;
    }


    /* movemos el fantasma segú el velos del posX */
    ghost.style.left = posX+'px';


    /* generar el rebote */
    /* si llega o supera un límite 
    cambiamos el valor del flag direccion */

    if( posX >= 600 ){
        direccion = 'izquierda';
    }
    if( posX <= 0 ){
        direccion = 'derecha';
    }

}

setInterval( movimientoX )