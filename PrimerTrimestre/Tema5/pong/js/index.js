
window.onload = () => {
    var bola = document.getElementById("circulo");
    var posicionX = 50;
    var posicionY = 50;
    var radio = 40;
    var limiteX = 1000;
    var limiteY = 750;

    var velocidadX = 10;
    var velocidadY = 10;
    const alturaPaleta = 80;
    const step = 20;

    var jugador1 = prompt("Hola jugador1, ingresa tu nombre");
    var jugador2 = prompt("Hola jugador2, ingresa tu nombre");
       document.getElementById("nombreJugador1").textContent = jugador1;
    document.getElementById("nombreJugador2").textContent = jugador2;

    const rect1 = document.getElementById("rectangulo1");
    const rect2 = document.getElementById("rectangulo2");


    rect1.setAttribute("y", 345); // Posición inicial
    rect2.setAttribute("y", 345); // Posición inicial

    setInterval(() => {
        posicionX += velocidadX;
        posicionY += velocidadY;

        bola.setAttribute("cx", posicionX);
        bola.setAttribute("cy", posicionY);

        if ((posicionX + radio) > limiteX || (posicionX - radio) < 0) {
            velocidadX *= -1;
        }
        if ((posicionY + radio) > limiteY || (posicionY - radio) < 0) {
            velocidadY *= -1;
        }
    }, 30);

    document.addEventListener("keydown", (event) => {
        const key = event.key;

        let y1 = parseFloat(rect1.getAttribute("y"));
        let y2 = parseFloat(rect2.getAttribute("y"));

        switch (key) {
            case "w": // Jugador 1 sube
                if (y1 > 0) {
                    rect1.setAttribute("y", y1 - step);
                }
                break;
            case "s": // Jugador 1 baja
                if (y1 + alturaPaleta < limiteY) {
                    rect1.setAttribute("y", y1 + step);
                }
                break;
            case "ArrowUp": // Jugador 2 sube
                if (y2 > 0) {
                    rect2.setAttribute("y", y2 - step);
                }
                break;
            case "ArrowDown": // Jugador 2 baja
                if (y2 + alturaPaleta < limiteY) {
                    rect2.setAttribute("y", y2 + step);
                }
                break;
        }
    });

};