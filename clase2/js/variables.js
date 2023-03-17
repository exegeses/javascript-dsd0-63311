/*  para declarar variables en javascript
    utilizamos la palabra reservada "let"
*/
let numero = 3987;
let frase = 'hola mundo';

/* para declarare constantes en javascript
   utilizamos la palabra reservada "const"
*/
const nombre = 'marcos';

/* mostrar valoes de variables en el documento */
document.write( '<br>' );
document.write( numero );
document.write( '<br>' );
document.write( frase );
document.write( '<br>' );
numero = 555;
document.write( numero );
document.write( '<br>' );
document.write( nombre );
//nombre = 'manzana';  /* no se puede sobreescribir una constante */

document.getElementById('txt').innerText = nombre;
