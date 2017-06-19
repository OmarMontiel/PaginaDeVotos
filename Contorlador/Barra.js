var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        var data = google.visualization.arrayToDataTable([
          ['Texto', ' '],
          ['PRI', 1],
          ['PAN', 5],
          ['PRD', 5],
          ['NULO',5]
        ]);
        var options = {
          title: '    Grafica De Barra'
        }
        alert(pri);
        // Dibujar el gráfico
        new google.visualization.ColumnChart(
        //ColumnChart sería el tipo de gráfico a dibujar
          document.getElementById('GraficaDeBarra')
        ).draw(data, options);
      };

    }
};
xmlhttp.open("GET", "../Modelo/BaseDatos.php?q=0", true);
xmlhttp.send();
