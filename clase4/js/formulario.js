//ubicamos elementos dentro del DOM
//const nombre = document.getElementById('nombre');
const nombre = document.querySelector('#nombre');
const txt2 = document.querySelector('#txt2');

//declaración de función de control
function mostrarNombre()
{
    //código interno de mi función
    let datoNombre = nombre.value;
    txt2.innerText = datoNombre;
}