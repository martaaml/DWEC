// Solicitando valores del usuario
let columnas = prompt("Introduce el número de columnas:");
let filas = prompt("Introduce el número de filas:");
let alto = prompt("Introduce la altura de las celdas en píxeles:");
let ancho = prompt("Introduce el ancho de las celdas en píxeles:");

// Generando el código HTML para la tabla
let tablaHTML = '<table border="0" cellspacing="2" bgcolor="black" width="200">';

for (let j = 0; j < filas; j++) {
    tablaHTML += '<tr bgcolor="white" height="' + alto + '">';
    for (let i = 0; i < columnas; i++) {
        tablaHTML += '<td width="' + ancho + '">&nbsp;</td>';
    }
    tablaHTML += '</tr>';
}

tablaHTML += '</table>';

// Insertando la tabla generada en el div con id "tabla-container"
document.getElementById("tabla-container").innerHTML = tablaHTML;
