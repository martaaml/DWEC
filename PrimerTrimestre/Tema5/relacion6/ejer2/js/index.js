window.onload=()=>{
google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(popularidadMundial);

  function popularidadMundial() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['France', 100000000],
      ['Spain', 85000000],
      ['United States', 67000000],
      ['Italy', 57000000],
      ['Turkey', 55000000],
      ['Mexico', 42000000],
      ['United Kingdom', 37000000],
      ['China', 36000000],
      ['Germany',35000000],
      ['Greece',33000000]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('paisesMasVisitados'));

    chart.draw(data, options);
  }
}
