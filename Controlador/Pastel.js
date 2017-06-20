var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function  () {
    if (this.readyState == 4 && this.status == 200) {
        var EnvioDeDatos = JSON.parse(this.responseText);
        var chart = AmCharts.makeChart("chartdiv", {
    "type": "pie",
    "theme": "light",
    "innerRadius": "40%",
    "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2],
    "dataProvider": [{
        "country": "PAN",
        "litres": EnvioDeDatos[1]
    }, {
        "country": "PRD",
        "litres": EnvioDeDatos[2]
    }, {
        "country": "NULO",
        "litres": EnvioDeDatos[3]
    }, {
        "country": "PRI",
        "litres": EnvioDeDatos[0]
    }],
    //"balloonText": "[[value]]",
    "valueField": "litres",
    //"titleField": "country",
    "balloon": {
        "drop": false,
        "adjustBorderColor": false,
        "color": "#FFFFFF",
        "fontSize": 16
    },
    "export": {
        "enabled": false
    }
});

    }
};
xmlhttp.open("GET", "../Modelo/BaseDatos.php?q=0", true);
xmlhttp.send();






