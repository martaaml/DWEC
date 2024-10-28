let num = parseInt(prompt("Dime la cantidad de hermanos que tienes"));
let num2 = parseInt(prompt("Dime un numero"));
if(num>=3){
    document.write((num2*15)/100 );
}
else if(num==0){
    document.write(num2);
}
else if(num>0){
    document.write((num2*5)/100)
}