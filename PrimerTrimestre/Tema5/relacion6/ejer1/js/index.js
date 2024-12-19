window.onload=()=>{
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(congresoDiputados);
function congresoDiputados() {
    var datosElecciones = google.visualization.arrayToDataTable([
      ['Partido', 'Votos'],
      ['PSOE', 121],
      ['PP', 137],
      ['VOX', 33],
      ['SUMAR', 31],
 ]);
    var options = {
        title: 'Congreso de los diputados.',
      };

      var chart = new google.visualization.Histogram(document.getElementById('graficoCongresoDiputados'));
      chart.draw(datosElecciones, options);
    }
}