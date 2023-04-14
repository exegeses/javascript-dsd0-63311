//
const btnFadeIn = document.querySelector('#btnFadeIn');
const btnFadeOut = document.querySelector('#btnFadeOut');
const atom = document.querySelector('#atom');
const txt = document.querySelector('#txt');


//variable auxiliar
let alpha = 1;
//funciones de control
function fadeIn()
{
    alpha = alpha + 0.05;
    atom.style.opacity = alpha;
    txt.innerText = alpha;
    if( alpha >= 1 ){
        clearInterval(intervalID);
        txt.innerText = 1;
    }

}
function fadeOut()
{
    alpha = alpha - 0.05;
    atom.style.opacity = alpha;
    txt.innerText = alpha;

    if( alpha <= 0 ){
        clearInterval(intervalID);
        txt.innerText = 0;
    }
}

let intervalID = '';

btnFadeOut.addEventListener(
            'click',
            function(){
                intervalID =  setInterval(fadeOut, 150);
            }
)
btnFadeIn.addEventListener(
            'click',
            function()
        {
                intervalID =  setInterval(fadeIn, 150);
        }
);