/*####  Cuenta regresiva  ###*/

//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');

//declaramos función de control
function control()
{
    //creamos objetos de fecha
    const ahora = new Date();
    const final = new Date(2023, 4, 1);

    //diferencia entre momentos 
    let diferencia = final - ahora;
    console.log(diferencia);
    /* la diferencia está expresada en un número
    con formato UNIX TIMESTAMP 
    - el tiempo expresado en milisegundos
    - desde el 01/01/1970 
     */

    /* conversiones */
    //obtenemos el tiempo expresado en segundos
        //y quitamos decimales con función trunc()
    let segundos = Math.trunc( diferencia/1000 );
    console.log( segundos );

    //obtenemos el tiempo expresado en minutos
    let minutos = Math.trunc( segundos/60 );
    console.log(minutos);

    //obtenemos el tiempo expresado en horas
    let horas = Math.trunc( minutos/60 );
    console.log(horas);

    //obtenemos el tiempo expresado en días
    let dias = Math.trunc( horas/24 );
    console.log(dias);

    /*¢¢ calculamos el resto de horas, minutos, segundos ¢¢*/
    horas = horas%24;
    console.log(horas);
    minutos = minutos%60;
    console.log(minutos);
    segundos = segundos%60;
    console.log(segundos);

    /*## agregamos 0 (ceros) iniciales ##*/
    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    if( dias < 10 ){
        dias = '0'+ dias;
    }

    /*¢ imprimimos en los span ¢*/
    txtSegundos.innerText = segundos;
    txtMinutos.innerText = minutos;
    txtHoras.innerText = horas;
    txtDias.innerText = dias;
}

control();
setInterval(control);
