google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var pri = 3;

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['', ''],
    ['PRI',5],
    ['PAN',2],
    ['PRD',  2],
    ['NULO', 2]
  ]);

  var options = {
    title: 'Grafica de pastel '
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
