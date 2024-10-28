let numeros;
do{
 numeros=parseInt(prompt("Dime numeros, introduce 0 para salir"));
if(numeros!=0){
    document.write(numeros+`<br>`);
}
}while(numeros!=0);
document.write("Ya has introducido 0");
