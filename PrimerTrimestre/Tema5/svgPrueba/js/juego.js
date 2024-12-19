window.onload=()=>{

    var bola = document.getElementById("circulo");
    var posicionX=50;
    var limiteX=1000;
    var limiteY=1000;
    var posicionY=50;

    var radio=40;
    var velocidad=20;
    setInterval(()=>{
        
        posicionX=posicionX+velocidad;
        bola.setAttribute("cx",posicionX);
        bola.setAttribute("cy",posicionY);
        if((posicionX+radio)>limiteX){
        velocidad *=-1;
        }else if((posicionX-radio)<0){
            velocidad*=-1;
        }
        posicionY=posicionY+velocidad;
        if((posicionY+radio)>limiteY){
            velocidad *=-1;
            }else if((posicionY-radio)<0){
                velocidad*=-1;
            }
    },30)
}