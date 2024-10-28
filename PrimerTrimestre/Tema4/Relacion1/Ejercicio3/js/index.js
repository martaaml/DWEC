var inicio = new Date;
function tiempoCarga(){
var fin = new Date;
var segundos = (fin-inicio)/1000;
var salida = "La pagina ha sido cargada en "+segundos +" segundos";

onload=function() {tiempoCarga();}
}
