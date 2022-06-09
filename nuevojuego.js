var botonInicio=document.querySelector(".botonIniciarJuego");

botonInicio.addEventListener("click",function(){


    var btnDesistir= document.querySelector(".boton-en-juego");
    var canvas=document.querySelector("#horca");
    var btnAgregarPalabras= document.querySelector(".boton-antes-juego");
    btnAgregarPalabras.classList.add("boton-en-juego");
    btnDesistir.classList.remove("boton-en-juego");
    canvas.classList.remove("canvas-en-juego");

    
});