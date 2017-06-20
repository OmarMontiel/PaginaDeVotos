google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(dibujarGrafico);

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function  () {
    if (this.readyState == 4 && this.status == 200) {
        var EnvioDeDatos = JSON.parse(this.responseText);
        dibujarGrafico(EnvioDeDatos);
        
    }
};
xmlhttp.open("GET", "../Modelo/BaseDatos.php?q=0", true);
xmlhttp.send();



function dibujarGrafico(EnvioDeDatos) {
  var datos = EnvioDeDatos;
  //alert(datos[0]);
  var datopri=[datos[0]];
  var pri =parseInt(datopri);
  var fpri =pri;

  var datopan=[datos[1]];
  var pan =parseInt(datopan);
  var fpan =pan;

  var datoprd=[datos[2]];
  var prd =parseInt(datoprd);
  var fprd =prd;

  var datonulo=[datos[3]];
  var nulo =parseInt(datonulo);
  var fnulo =nulo;


  var data = google.visualization.arrayToDataTable([
    ['Texto', 'Valor numérico'],
    ['PRI', fpri],
    ['PAN', fpan],
    ['PRD', fprd],
    ['NULO', fnulo]
  ]);
  var options = {
    title: 'Grafica de barras'
  }

  // Dibujar el gráfico
  new google.visualization.ColumnChart(
  //ColumnChart sería el tipo de gráfico a dibujar
    document.getElementById('GraficaBarra')
  ).draw(data, options);
}
