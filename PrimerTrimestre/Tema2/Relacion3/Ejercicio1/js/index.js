var cadena = prompt("Dime una frase, para realizar diferentes funciones con ella");

// Devuelve invertido lo que da el usuario
function invierteCadena(cad) {
   let invertida = "";
   for (i = cad.length - 1; i > -1; i--) {
      invertida += cad[i];
   }
   return invertida;
}
//LLAMA A LA FUNCION Y LA MUESTRA
document.write("<br>" + invierteCadena(cadena)); //Cadena ya que es lo que el usuario mete


//Devuelve invertidas las palabras contenidas en la cadena
function inviertePalabras(cad) {

   let palabras = cad.split(" ");
   let invertida = " ";
   for (i = palabras.length - 1; i > -1; i--) {
      invertida += palabras[i] + " ";
   }
   return invertida;
}

document.write("<br>" + inviertePalabras(cadena));
//Devuelve la longuitud de la cadena mas grande
function encuentraPalabraMasLarga(cad) {

   let larga = 0;
   let palabras = cad.split(" ");
   for (i = 1; i < palabras.length; i++) {
      if (palabras[i].length > larga) {
         larga = palabras[i].length;
      }

   }
   return larga;
}
document.write("<br>" + encuentraPalabraMasLarga(cadena));
//
function filtraPalabraMasLarga(cad, i) {
   let palabras = cad.split(" ");
   let resultado = "";
   for (n = 0; n < palabras.length; n++) {
      if (palabras[n].length > i) {
         resultado += palabras[n] + " ";
      }
   }
   return resultado.split(" ").length - 1;
}
document.write("<br>" + filtraPalabraMasLarga(cadena, 4));

//Primera letra en mayuscula, demas  en minuscula
function cadenaBienFormada(cad) {
   let palabras = cad.split("");
   let resultado = "";

   for (i = 0; i < palabras.length; i++) {
      palabras[0].toUpperCase();
      resultado += palabras[i];
   }

   return resultado;
}
document.write("<br>" + cadenaBienFormada(cadena));