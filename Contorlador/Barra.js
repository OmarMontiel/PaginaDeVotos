google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(dibujarGrafico);
function dibujarGrafico() {
  // Tabla de datos: valores y etiquetas de la gráfica
  var data = google.visualization.arrayToDataTable([
    ['Texto', ' '],
    ['PRI', 20.21],
    ['PAN', 4.28],
    ['PRD', 17.26],
    ['NULO', 10.25]
  ]);
  var options = {
    title: '    Grafica De Barra'
  }
  // Dibujar el gráfico
  new google.visualization.ColumnChart(
  //ColumnChart sería el tipo de gráfico a dibujar
    document.getElementById('GraficoGoogleChart-ejemplo-1')
  ).draw(data, options);
}
