var numeros=parseInt(prompt("Introduce un numero"));
if(!isNaN(numeros)&&numeros>0){
for(n=1;n<=numeros;n++){
   document.write(n+"<br>")
}
}
else{
    document.write("Numero no valido")
}