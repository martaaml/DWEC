var numeros = parseInt(prompt("Introduce un número"));

if (!isNaN(numeros) && numeros > 0) {
    for (var n = numeros; n >= 1; n--) {
        document.write(n + "<br>");  // Mostrar los números y un salto de línea
    }
}
