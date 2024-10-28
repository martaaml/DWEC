/*let miCoche=new Coche();
miCoche.marca*/

let miCoche={
    marca:"Ford",
    modelo:"Focus"
};

let cadena=new String();
cadena.length;//Acceso a miembro o atributo de acceso

let fecha=new Date();
fecha.getDate()// Metodo que devuelve el dia de la semana

let fecha2=new Date();






/*
Otra forma de las imagenes salgan de forma aleatoria
let random = Math.trunc(Math.random()*3);
document.write"<img src='"+random+".gif'></img>")"
*/


/*FUNCION*/
function miFuncion(){
    console.log("Llamada a mi funcion");
}


//Ejecutar en un intervalo de tiempo
setTimeout(miFuncion,10000); //Muestra el mensaje a los 10 segundos

//
var numero=0;
function miFunion2(){
    document.write(numero);
    numero++;
}

setInterval(miFuncion,10000)

//
let cadenas="marta";
cadenas[3];//muestra el caracter que se encuentre en esa posicion, si sale de la cadena, sera undefined
cadenas.length;//Numero de caracteres que tiene la cadena

//
let cadenasBuscar="Alumnos de  java en clase de javascript"
cadenasBuscar.indexOf("java");// devolvera en que posicion esta esa ocurrencia
cadenasBuscar.indexOf("java",12);// pondremos lo mismo, mas la posicion en la que lo hemos encontrado, para ver en que otra posicion está.

//CONCAT
const str1 ="Hello";
const str2 ="Word";

str1.concat("Marta");

//SPLIT


//MINISCULA/MAYUSCUULA
cadenas.toLowerCase();
cadenas.toUpperCase();

//
window.innerWidth//Dice el ancho de la ventana

window.onpointerenter("http://www.google.es") //Abre la url que asignes, google en este caso
screen.width//Tamaño total de la pantalla

//LOCATION, REFERENCIA A LA URL DE ESA VENTANA
location.href//Te da la url en la que esta tu web
location.href("http://www.google.es")//Te lleva a esa url
location.reload()//recarga la pagina


//GEOLOCATION

function muestraPosicion(posi){
    console.log(posi.coords.latitude);
    console.log(posi.coords.longitude);
}
navigator.geolocation.getCurrentPosition(muestraPosicion);
