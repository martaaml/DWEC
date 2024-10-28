var map = L.map('map').setView([51.505, -0.09], 13);

function muestraPosicion(posi){
//Pruebe si la geolocalización está disponible.
if(navigator.geolocation){
//Si está disponible, muestra la posición actual (latitud y longitud)


console.log(posi.coords.latitude);
console.log(posi.coords.longitude);    
}else{
//Si no está disponible, muestra un mensaje para todos y cada uno de los posibles errores.
document.write("No está disponible");

}

}
function paraError(error){
    console.log("Se ha producido un error");
    console.log("Erroe numero"+error.code);
    console.log(error.message);
}
//Mejora tu código para que muestres la posición de forma continua (aunque el usuario podría estar moviéndose, por lo que podría cambiar)


navigator.geolocation.getCurrentPosition(muestraPosicion, paraError);


//Encuentra la forma de medir la distancia recorrida.
function calculaDistancia(a,b){

}