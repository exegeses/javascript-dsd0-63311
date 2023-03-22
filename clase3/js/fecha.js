//ubicamos elemento dentro del DOM
const txt = document.getElementById('txt');
/* 
    mostrar la fecha
    formato: Miércoles 22/03/2023
*/

//creamos un objeto de fecha
const fecha = new Date( );

//obtenemos el número del día de la semana
let diaSemana = fecha.getDay();
/* Domingo -> 0  */
/* Lunes -> 1  */
/* Martes -> 2  */
/* Miércoles -> 3  */
console.log( diaSemana );
if( diaSemana == 0 ){
    diaEspanol = 'Domingo'; 
}
else if( diaSemana == 1 ){
    diaEspanol = 'Lunes'; 
}
else if( diaSemana == 2 ){
    diaEspanol = 'Martes'; 
}
else if( diaSemana == 3 ){
    diaEspanol = 'Miércoles'; 
}
else if( diaSemana == 4 ){
    diaEspanol = 'Jueves'; 
}
else if( diaSemana == 5 ){
    diaEspanol = 'Viernes'; 
}
else {
    diaEspanol = 'Sábado'; 
}


//obtenemos el número de día de mes
let diaMes = fecha.getDate();
if( diaMes < 10 ){
    diaMes = '0'+ diaMes;
}

//obtenemos el número de mes actual
let mes = fecha.getMonth() + 1;
if( mes < 10 ){
    mes = '0'+ mes;
}


//obtenenmos el año actual
let anio = fecha.getFullYear();

//imprimimos en el span
//versión concatenando variablas + /
//txt.innerText = diaEspanol +' '+ diaMes +'/'+ mes +'/'+ anio;

//versión template literal (interpolación de cadenas)
txt.innerText = `${diaEspanol} ${diaMes}/${mes}/${anio}`;

