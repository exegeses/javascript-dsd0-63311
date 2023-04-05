//ubiucamos elemento/s dentro del DOM
const txt = document.querySelector('#txt');

//declaramos función de control
function reloj()
{
    /* 
    reloj digital con formato:  hh:mm:ss
    */
   //creamos un objeto de fecha
   let fecha = new Date();
        console.log(fecha);

    //obtenemos el número correspondiente a las horas
    let horas = fecha.getHours();
    if( horas < 10 ){
        horas = '0'+ horas
    }
        console.log( 'horas: '+ horas );

    //obtenemos el número correspondiente a los minutos
    let minutos = fecha.getMinutes();
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
        console.log( 'minutos: '+ minutos );
    
    //obtenemos el número correspondiente a los segundos
    let segundos = fecha.getSeconds();
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
        console.log( 'segundos: '+ segundos );

    //mostramos los datos en el span
    txt.innerText = horas +':'+ minutos +':'+ segundos;
    
}

//invocamos a la función reloj()
reloj();

//actualizar el llamado a la función reloj()
setInterval( reloj, 1000 );//milisegundos

// txt.innerText = fecha.toLocaleTimeString([], {hour12: false});