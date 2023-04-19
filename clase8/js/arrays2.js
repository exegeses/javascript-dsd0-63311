/* listado de alumnos */
const alumnos = [
    'Agustín',
    'Cande',
    'David',
    'Elio',
    'JP',
    'Lautaro', 
    'Luciano'
];

//ubicamos elementos dentro del DOM
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const alumnosTxt = document.querySelector('#alumnosTxt');

// estado inicial: mostrar un elemento del array
let posicion = 3;
alumnosTxt.innerText = alumnos[posicion];

//botones
prev.addEventListener(
        'click',
        function()
        {
            posicion--;
            if( posicion == -1 ){
                posicion = 6;
            }
            alumnosTxt.innerText = alumnos[posicion];
        }
);
next.addEventListener(
        'click',
        function()
        {
            posicion++;
            if( posicion == 7 ){
                posicion = 0;
            }
            alumnosTxt.innerText = alumnos[posicion];
        }
);
