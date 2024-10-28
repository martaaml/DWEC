var exam1 = prompt("Nota del examen 1: ");
var exam2 = prompt("Nota del examen 2: ");
var trab1 = prompt("Nota del trabajo 1: ");
var trab2 = prompt("Nota del trabajo 2: ");
var examtotal;
var trabtotal;
var media;


if(parseInt(trab1)>=4.5 && parseInt(trab2) >=4.5 && parseInt(exam1)>=4.5 && parseInt(exam2) >=4.5){
    examtotal = exam1+exam2;
    trabtotal =trab1+trab2;
    media = examtotal*0.75 + trabtotal*0.25;
    if(media>=5){
        document.write("Aprobado");
    }else{
        document.write("Suspenso");
    }
}else{
    document.write("No llega a la nota mínima");
}