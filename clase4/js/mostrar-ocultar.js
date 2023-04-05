//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');
const boton = document.querySelector('#boton');

//declaramos funciones de control
function ocultarCaja()
{
    caja.style.display = 'none';
    boton.innerText = 'Mostrar';
}
function mostrarCaja()
{
    caja.style.display = 'block';
    boton.innerText = 'Ocultar';
}

function mostrarOcultar()
{
    if( caja.style.display == 'none' ){
        mostrarCaja();
        /* boton.innerText = 'Ocultar';*/
    }
    else{
        ocultarCaja();
        /* boton.innerText = 'Mostrar'; */
    }
}