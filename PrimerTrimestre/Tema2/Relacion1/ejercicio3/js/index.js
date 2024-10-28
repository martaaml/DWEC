
let contador = 60;

function actualizarContador() {
    contador--;
    document.getElementById("contador").textContent = contador;

    if (contador > 0) {
        setTimeout(actualizarContador, 1000);
    } else {
        alert("¡Tiempo agotado!");
    }
}
setTimeout(actualizarContador, 1000);
