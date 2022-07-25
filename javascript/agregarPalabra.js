var botonAgregarPalabra=document.querySelector(".btnGuardarPalabra");

botonAgregarPalabra.addEventListener("click",function(event){
    var agregar=document.querySelector("#palabra");
    palabras.push(agregar.value);
    console.log(palabras);


});