function colorLinea(){
    tablero.lineWidth = 6;
    tablero.linecap = 'round';
    tablero.lineJoin = 'round';
    tablero.strokeStyle = '#0A3871';
    tablero.beginPath();
}
function crearBaseEstructura(){
    colorLinea;
    tablero.moveTo(550,540)
    tablero.lineTo(950,540);
    tablero.stroke();
    tablero.closePath();
}
function crearPosteEstructura(){
    colorLinea;
    tablero.moveTo(610,540);
    tablero.lineTo(610,80);
    tablero.lineTo(850,80)
    tablero.lineTo(850,100)
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
    tablero.moveTo(850,180);
    tablero.lineTo(850,280)
    tablero.stroke();
    tablero.closePath();
}
function crearBrazoDerecho(){
    colorLinea;
    tablero.moveTo(850,210);
    tablero.lineTo(780,240);
    tablero.stroke();
    tablero.closePath();
}
function crearBrazoIzquierdo(){
    colorLinea;
    tablero.moveTo(850,210);
    tablero.lineTo(920,240);
    tablero.stroke();
    tablero.closePath();

}
function crearPiernaIzquierda(){
    colorLinea;
    tablero.moveTo(850,280);
    tablero.lineTo(810,400)
    tablero.stroke();
    tablero.closePath();

}
function crearPiernaDerecha(){
    colorLinea;
    tablero.moveTo(850,280);
    tablero.lineTo(890,400)

    tablero.stroke();
    tablero.closePath();

}