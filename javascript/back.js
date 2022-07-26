var palabras=["ALURA","HTML","NODEJS","MONGODB","MYSQL","SQL","PROCESADOR","JAVASCRIPT","JSON","MEMORIA","REACT","DEVELOPER","PROGRAMADOR"];
var tablero= document.getElementById('horca').getContext('2d');
var letras=[];
var palabraCorrecta="";
var errores=8;

function escogerPalabra(){
    var palabra=palabras[Math.floor(Math.random()*palabras.length)]
    palabraSecreta=palabra;
    console.log(palabra)
    return palabra;
}

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.linecap = 'round';
    tablero.lineJoin = 'round';
    tablero.strokeStyle = '#0A3871';
    tablero.beginPath();

    var ancho=600/palabraSecreta.length;
    for(let i=0;i<palabraSecreta.length;i++){
        tablero.moveTo((ancho*i),640);
        tablero.lineTo(50+(ancho*i),640);
    }
    tablero.stroke();
    tablero.closePath()
}dibujarLineas(escogerPalabra());

function escribirLetraCorrecta(index){
    tablero.font="bold 52px Inter"
    tablero.lineWidth=6;
    tablero.linecap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = "#0A3871";

    var ancho=600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],05+(ancho*index),620)
}
function escribirLetraIncorrecta(letra,errorsLeft){
    tablero.font="bold 40px Inter"
    tablero.lineWidth=6;
    tablero.linecap = 'round';
    tablero.lineJoin = 'round';
    tablero.fillStyle = '#0A3871';
    tablero.fillText(letra,35+(40*(10-errorsLeft)),710,40);
}

function validarTexto(parametro){
    var patron=/^[a-zA-Z\s]*$/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}

function verificarLetra(key){

    if(letras.length<1 || letras.indexOf(key)<0){
        letras.push(key);
        return false;
    }
    else{
        letras.push(key);
        return true;
    }
}
function adicionarLetraCorrecta(index){
    palabraCorrecta+=palabraSecreta[index].toUpperCase();
}
function adicionarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter)<=0){
        errores-=1
    }

}
document.onkeydown =(e)=>{
    let letra=e.key.toUpperCase();
    if(!verificarLetra(e.key)){
        if(palabraSecreta.includes(letra)){
            console.log(letra);
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
            for(let i=0;i<palabraSecreta.length;i++){
                if(palabraSecreta[i]===letra){
                    escribirLetraCorrecta(i);
                }
            }
        }
        else{
            if(!verificarLetra(e.key)) return 
            adicionarLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra,errores);
            switch(errores){
                case 7:{
                    crearBaseEstructura();
                    break;
                }
                case 6:{
                    crearPosteEstructura();
                    break;
                }
                case 5:{
                    crearCabeza(350,140,40,'#0A3871');
                    crearCabeza(350,140,35,'#E5E5E5');
                    break;
                }
                case 4:{
                    crearTorso();
                    break;
                }
                case 3:{
                    crearBrazoDerecho();
                    break;
                }
                case 2:{
                    crearBrazoIzquierdo();
                    break;
                }
                case 1:{
                    crearPiernaIzquierda();
                    break;
                }
                case 0:{
                    crearPiernaDerecha();
                    Swal.fire({
                        icon: 'error',
                        title: 'PERDISTE',
                        text: "LA PALABRA ERA: "+palabraSecreta,
                        footer: '<a href="../html/juego.html">Intentarlo de nuevo</a>',
                      })
                    break;
                }
            } 
        }
    }
}
