document.write("<br>NUMERO ALEATORIO ENTRE 0 Y 1");
numero1=Math.random();
document.write("<br>El numero aleatorio es "+numero1);
document.write("<br>NUMERO ALEATORIO ENTRE 100 Y 200");

numero2=Math.floor(Math.random()*(200-100+1))+100;
document.write("<br>El numero aleatorio es " +numero2);
document.write("<br>NUMERO ALEATORIO DE TUS VALORES:");
numDiVal=parseInt(prompt("Dime un valor"));
numDiVal2=parseInt(prompt("Dime otro valor"));
if(!isNaN(numDiVal)&&!isNaN(numDiVal2)){
    var nAleatorio= Math.floor(Math.random() * (Math.max(numDiVal, numDiVal2) - Math.min(numDiVal, numDiVal2) + 1)) + Math.min(numDiVal, numDiVal2);
    document.write("<br>Numero aleatorio entre "+numDiVal+" y "+numDiVal2+": "+nAleatorio);
}
Math.random