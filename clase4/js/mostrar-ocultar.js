//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');


//declaramos funciones de control
function ocultarCaja()
{
    caja.style.display = 'none';
}
function mostrarCaja()
{
    caja.style.display = 'block';
}

function mostrarOcultar()
{
    if( caja.style.display == 'none' ){
        mostrarCaja();
    }
    else{
        ocultarCaja();
    }
}