//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaramos funciones de control
function pintarNaranja()
{
    //caja.style.backgroundColor = '#f60';
    caja.classList.toggle('naranja');
}
function pintarVerde()
{
    caja.style.backgroundColor = '#3a3';
}