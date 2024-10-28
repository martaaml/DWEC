function muestraPosicion(posi) {
    console.log(posi.coords.latitude);
    console.log(posi.coords.longitude);
    var map = L.map('map').setView([posi.coords.latitude, posi.coords.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([posi.coords.latitude, posi.coords.longitude]).addTo(map);


}
function calcularDistancia(x1, y1, x2, y2) {
    const deltaX = x2 - x1; // Diferencia en x
    const deltaY = y2 - y1; // Diferencia en y
    const distanciaCuadrada = deltaX * deltaX + deltaY * deltaY; // Suma de cuadrados
    const distancia = Math.sqrt(distanciaCuadrada); // Raíz cuadrada
    return distancia;
  }
  
  // Ejemplo de uso:
  const distancia = calcularDistancia(3, 4, 7, 1);
  console.log(`La distancia es: ${distancia}`);
  

navigator.geolocation.getCurrentPosition(muestraPosicion, calcularDistancia);
