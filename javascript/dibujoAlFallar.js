function colorLinea(){
    tablero.lineWidth = 6;
    tablero.linecap = 'round';
    tablero.lineJoin = 'round';
    tablero.strokeStyle = '#0A3871';
    tablero.beginPath();
}
function crearBaseEstructura(){
    colorLinea;
    tablero.moveTo(50,540)
    tablero.lineTo(450,540);
    tablero.stroke();
    tablero.closePath();
}
function crearPosteEstructura(){
    colorLinea;
    tablero.moveTo(110,540);
    tablero.lineTo(110,80);
    tablero.lineTo(350,80)
    tablero.lineTo(350,100)
    tablero.stroke();
    tablero.closePath();
}
function crearCabeza(a,b,radio,color){
    tablero.fillStyle=color;
    tablero.beginPath();
    tablero.arc(a,b,radio,0,2*Math.PI);
    tablero.fill();

}
function crearTorso(){
    colorLinea;
    tablero.moveTo(350,180);
    tablero.lineTo(350,280)
    tablero.stroke();
    tablero.closePath();
}
function crearBrazoDerecho(){
    colorLinea;
    tablero.moveTo(350,210);
    tablero.lineTo(280,240);
    tablero.stroke();
    tablero.closePath();
}
function crearBrazoIzquierdo(){
    colorLinea;
    tablero.moveTo(350,210);
    tablero.lineTo(420,240);
    tablero.stroke();
    tablero.closePath();

}
function crearPiernaIzquierda(){
    colorLinea;
    tablero.moveTo(350,280);
    tablero.lineTo(310,400)
    tablero.stroke();
    tablero.closePath();

}
function crearPiernaDerecha(){
    colorLinea;
    tablero.moveTo(350,280);
    tablero.lineTo(390,400)

    tablero.stroke();
    tablero.closePath();

}