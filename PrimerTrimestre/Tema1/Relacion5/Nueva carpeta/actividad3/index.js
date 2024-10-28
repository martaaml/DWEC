let edad=prompt("Dime tu edad, para saber a que curso vas");
if(edad<5){
    document.write("Estas en jardin de infancia");
}
else if(edad>=6&&edad<=11){
    document.write("Estas en primaria")
}
else if(edad>=12&edad<=16){
    document.write("Estas en secundaria");
}
else if(edad>=17&&edad<=21){
document.write("Estas cursando bachiller o ciclo")
}
else if(edad>21){
    document.write("Estas en universidad")
}