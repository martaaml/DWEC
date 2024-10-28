var cadena = prompt("Introduce una cadena");
var mayus = false;
var min = false;

function mayusomin(cad) {
    let arrayChar = cad.split("");
    for (i = 0; i < arrayChar.length; i++) {
        if (arrayChar[i].toLowerCase() == arrayChar[i]) {
            min = true;
        }
        else if (arrayChar[i].toUpperCase() == arrayChar[i]) {
            mayus = true;
        }
        if (mayus && min) {
            return "Contiene mayusculas y minusculas";
        }
    }
    if (mayus) {
        return "Solo contiene mayusculas";
    } else if (min) {
        return "Solo contiene minusculas"
    }
}
document.write(mayusomin(cadena));