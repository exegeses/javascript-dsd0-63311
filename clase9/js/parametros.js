const caja = document.querySelector('#caja');
const btnVerde = document.querySelector('#btn-verde');
const btnNaranja = document.querySelector('#btn-naranja');

//declaramos funciones de control
/*
function pintarVerde()
{
    caja.style.backgroundColor = '#89e59d';
}
function pintarNaranja()
{
    caja.style.backgroundColor = '#e5b189';
}
*/

function pintar( codigoColor, nombre ){
    caja.style.backgroundColor = codigoColor;
    caja.innerText = nombre;
}

btnVerde.addEventListener(
        'click',
        function()
        {
            pintar('#89e59d', 'verde');
        }
);
btnNaranja.addEventListener(
        'click',
        function()
        {
            pintar('#e5b189', 'naranja');
        }
);