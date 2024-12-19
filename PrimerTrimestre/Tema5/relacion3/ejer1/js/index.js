window.onload = () => {
  let contador = 0;
  let intervalId = null;

  const botonComienzo = document.getElementById('start');
  const botonPararContador = document.getElementById('stop');
  const botonReiniciar = document.getElementById('reset');

  function updateDisplay() {
    let horas = Math.floor(contador / 3600);
    let minutos = Math.floor((contador % 3600) / 60);
    let segundos = contador % 60;


    reloj.textContent = 
        String(horas).padStart(2, '0') + ':' + 
        String(minutos).padStart(2, '0') + ':' + 
        String(segundos).padStart(2, '0');
}

botonComienzo.addEventListener('click', () => {
      if (!intervalId) { 
          intervalId = setInterval(() => {
              contador++;
              updateDisplay();
          }, 1000);
      }
  });

  botonPararContador.addEventListener('click', () => {
      clearInterval(intervalId);
      intervalId = null; // Permite reiniciar el contador con el botón de start
  });
  

  botonReiniciar.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
    contador = 0;
    updateDisplay();
});
}