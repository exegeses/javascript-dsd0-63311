/* 
    el ámbito de las variables es desde DÓNDE
    se puede "VER" (acceder) a un variable 

    prestar atención a las llaves "{  }""
*/

let numero = 10; //global   window
console.log(numero);
let nombre = 'Rick Sánchez';


{
    //console.log( 'global: '+ numero );
    let numero = 25 //local   
    console.log( 'local: '+ numero );
}

console.log(numero);

function verNombre(){
    let nombre = 'Morty Smith';
    console.log(nombre);
}
verNombre();