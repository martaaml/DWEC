const imagenes= [
    "./img/nenes1.jpg",
    "./img/nenes2.jpg",
    "./img/nenes3.jpeg"
]
const muestraAleatorio = imagenes[Math.floor(Math.random() * imagenes.length)];
document.write('<img src="' + muestraAleatorio + '" width="300" height="200">');