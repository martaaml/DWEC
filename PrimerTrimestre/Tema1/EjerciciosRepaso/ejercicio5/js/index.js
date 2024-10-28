var numeros=parseInt(prompt("Introduce un numero"));
let suma=0;
let fin=false;
for(n=1;n<numeros.length && !fin;n++){
if(!NaN(numeros)&&numeros>0){
document.write("No es numero");
fin=true;
}
else{
    suma=suma+parseInt(num[i]);
  
}
if(!fin){
    document.write(suma);
}
}
