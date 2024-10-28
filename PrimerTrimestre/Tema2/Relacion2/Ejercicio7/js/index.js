    for (let i = 1; i <= 10; i++) {
        filas = tabla.insertRow();
        celdasConNumero = filas.insertCell(0);
        celdasConNumero.textContent = i;
         celdaConSeno = fila.insertCell(1);
        celdaConSeno.textContent = Math.sin(i).toFixed(4); // Valor del seno redondeado a 4 decimales
    }
// Ejecutar la función al cargar la página
window.onload = generarTablaSenos;
