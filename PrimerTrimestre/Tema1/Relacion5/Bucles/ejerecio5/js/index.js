let suma=0;

for(let i=1;i<=10;i++){
    let numeros=parseInt(prompt("Introduce 10 numeros"));
    if(num!=NaN){
        suma = suma+numeros;

    }else{
        document.write("ERROR");
    }
}
document.write("El resultado de la suma es"+suma)