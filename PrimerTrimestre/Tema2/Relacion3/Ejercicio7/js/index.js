var cadena = prompt("Dime una palabra");

function isPalindromo(str) {
    let cadenaReverse = str.split("");
    cadenaReverse = cadenaReverse.reverse();
    cadenaReverse = cadenaReverse.join("");
    if (str.toLowerCase() == cadenaReverse.toLowerCase()){
        return "Si es un palindromo"
    }
    else{
        return "No es un palindromo"
    }
}

document.write(isPalindromo(cadena))