function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

// Referencia al cuerpo de la tabla
const tablaFactorial = document.getElementById("tabla-factorial");

// Generar la tabla de factoriales para los valores del 1 al 10
for (let i = 1; i <= 10; i++) {
    const fila = document.createElement("tr");
    const celdaNumero = document.createElement("td");
    const celdaFactorial = document.createElement("td");

    celdaNumero.textContent = i;
    celdaFactorial.textContent = calcularFactorial(i);

    fila.appendChild(celdaNumero);
    fila.appendChild(celdaFactorial);
    tablaFactorial.appendChild(fila);
}