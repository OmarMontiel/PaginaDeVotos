google.charts.load('current', {'packages':['table']});
google.charts.setOnLoadCallback(drawTable);
var pri=100;
function drawTable() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Name');
  data.addColumn('number', 'Salary');
  data.addRows([
    ['PRI', {f: '7,000'}],
    ['PAN', {f: '7,000'}],
    ['PRD', {f: '12,500'}],
    ['NULO',{f: '7,000'}]
  ]);

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, {showRowNumber: false, width: '50%', height: '50%'});
}
