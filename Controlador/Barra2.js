var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function  () {
    if (this.readyState == 4 && this.status == 200) {
        var EnvioDeDatos = JSON.parse(this.responseText);
        var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "startDuration": 2,
    "dataProvider": [{
        "country": "PRI",
        "visits": EnvioDeDatos[0],
        "color": "#FF0F00"
    },  {
        "country": "PAN",
        "visits": EnvioDeDatos[1],
        "color": "#04D215"
    }, {
        "country": "PRD",
        "visits": EnvioDeDatos[2],
        "color": "#754DEB"
    },  {
        "country": "NULO",
        "visits": EnvioDeDatos[3],
        "color": "#333333"
    }],
    "valueAxes": [{
        "position": "left",
        "axisAlpha":0,
        "gridAlpha":0
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius":1,
        "valueField": "visits"
    }],
    "depth3D": 40,
  "angle": 30,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha":0,
        "gridAlpha":0

    },
    "export": {
      "enabled": true
     }

}, 0);
    }
};
xmlhttp.open("GET", "../Modelo/BaseDatos.php?q=0", true);
xmlhttp.send();




