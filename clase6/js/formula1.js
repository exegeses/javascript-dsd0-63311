/* contenedores escuderías */
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const mercedes = document.querySelector('#mercedes');
const mclaren = document.querySelector('#mclaren');
/* botones */
const btnRedbull = document.querySelector('#btnRedbull');
const btnFerrari = document.querySelector('#btnFerrari');
const btnMercedes = document.querySelector('#btnMercedes');
const btnMclaren = document.querySelector('#btnMclaren');


//estado inicial
// contenedores ocultos
ferrari.style.display = 'none';
mercedes.style.display = 'none';
mclaren.style.display = 'none';

//declaramos función de control
function mostrarOcultar( escuderia )
{
    if( escuderia == 'redbull' ){
        redbull.style.display = 'flex'
        ferrari.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
    }
    else if( escuderia == 'ferrari' ){
        redbull.style.display = 'none'
        ferrari.style.display = 'flex';
        mercedes.style.display = 'none';
        mclaren.style.display = 'none';
    }
    else if( escuderia == 'mercedes' ){
        redbull.style.display = 'none'
        ferrari.style.display = 'none';
        mercedes.style.display = 'flex';
        mclaren.style.display = 'none';
    }
    else if( escuderia == 'mclaren' ){
        redbull.style.display = 'none'
        ferrari.style.display = 'none';
        mercedes.style.display = 'none';
        mclaren.style.display = 'flex';
    }

}


/* pedirle a un botón que escuche un evento */
btnRedbull.addEventListener(
                        'click', 
                        function()
                {
                    mostrarOcultar('redbull');
                }                      
);
btnFerrari.addEventListener(
                        'click', 
                        function()
                {
                    mostrarOcultar('ferrari');
                }                      
);
btnMercedes.addEventListener( 
                        'click', 
                        function()
                {
                    mostrarOcultar('mercedes');
                }                       
);
btnMclaren.addEventListener( 
                        'click', 
                        function()
                {
                    mostrarOcultar('mclaren');
                }                       
);

