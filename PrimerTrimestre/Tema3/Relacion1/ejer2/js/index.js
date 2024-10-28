//Crea una web que simule el lanzamiento de un dado de 6 caras


function lanzamiento(min, max) {
    min = 1;
    max = 6;
    return Math.random() * (max - min) + min;
}
document.write(lanzamiento());  