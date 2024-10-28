// No hace falta poner el tipo de variable
mivariable = 0;
document.write("El contenido de mi variable es"+mivariable);

//Var se usa para global, resto de casos con let.
var mivariable=0;
let mivariable=0;
// Bloque con let, solo dentro
if(true){
    let varLocalAlBloque = 3;
}

// La variable solo puede empezar por letra, guion bajo o dollar, se pueden usar numeros, 
// pero no empezar por ellos, cuidado con mayusculas y minusculas
// No se definen tipos, se definen variables
//Undefines: No ha tomado ningun valor
//Null: Palabra reservada, es nulo.
//NaN, operacion matematica no valida

//Prompt devuelve siempre un string 
//ParseInt y ParseFloat si queremos que sean numeros, el float es en coma flotante
let valor = parseInt(prompt("dame un numero"));
valor = valor + 1;
document.write(valor);

