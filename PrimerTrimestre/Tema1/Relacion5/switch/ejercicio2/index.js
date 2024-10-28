var num = prompt("Dime un número");
var multiplo;

if (parseInt(num)%2==0){
    multiplo="2";
}else if (parseInt(num)%3==0){
    multiplo="3";
}else if (parseInt(num)%5==0){
    multiplo="5";
}else
    multiplo = "";

switch(multiplo){
    case "2":
        document.write("Es par.");
        break;
    case "3":
        document.write("Es multiplo de tres.")
        break;
    case "5":
        document.write("Es multiplo de cinco.")
        break;
    default:
        document.write("No es multiplo de ninguno")
}