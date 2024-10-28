let palabritas;
do{
 palabritas=prompt("Dime palabras, introduce SALIR  para salir");
if(palabritas!="SALIR"){
    document.write(palabritas+`<br>`);
}
}while(palabritas.toUpperCase()!="SALIR");
document.write("ACABAS DE SALIR DEL PROGRAMA");