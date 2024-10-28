let fechaHoy= new Date(); //VARIABLE DIA ACTUAL
let fecha85= new Date(); //VARIABLE PARA 85 DIAS
let fecha187= new Date();//VARIABLE PARA RESTAR 187 DIAS
let fechaResto = new Date(); // VARIABLE RESTO 85-187
let dosAños = new Date();
let fecha24h = new Date(fecha187);
let resto24 = new Date();


document.write("<p>LA FECHA HOY: ")
document.write("<p>"+fechaHoy.getHours()+":");
document.write(fechaHoy.getMinutes()+":");
document.write(fechaHoy.getSeconds());
document.write("<p>"+fechaHoy.getFullYear()+"-");
document.write(fechaHoy.getMonth()+ "-");
document.write(fechaHoy.getDate());

document.write("<p>LA FECHA DENTRO DE 85 DIAS: ");
fecha85.setDate(fechaHoy.getDate()+85);
document.write("<p>"+fecha85);

document.write("<p>LA FECHA HACE 187 DIAS");
fecha187.setDate(fechaHoy.getDate()-187);
document.write("<p>"+fecha187);

document.write("<p>DOS AÑOS TRAS LA FECHA SUMANDO 85 DIAS");
dosAños.setDate(fecha85.getDate()+730);
document.write("<p>"+dosAños);

document.write("<p>FECHA 24H MENOS DE HACE 187 DIAS");

fecha24h.setHours(fecha24h.getHours()-24);
document.write("<p>"+fecha24h);

document.write("FECHA SACADA DEL RESTO DE LA FECHA DENTRO 85 - FECHA HACE 187");
fechaResto.setDate(fecha85.getDate()-fecha187.getDate());
document.write("<p>"+fechaResto);