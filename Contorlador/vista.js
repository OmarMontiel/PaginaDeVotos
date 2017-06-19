var voto = " ";
function f_nulo(){
        voto = "nulo";
        var xmlhttp = new XMLHttpRequest();
	      xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            }
        };
    xmlhttp.open("GET", "../Modelo/BaseDatos.php?q=" + voto, true);
    xmlhttp.send();
    window.location="../MVCVisual/Vista.html";
}

function f_pri(){
         voto = "pri";
	       var xmlhttp = new XMLHttpRequest();
	       xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            }
        };
    xmlhttp.open("GET", "../Modelo/BaseDatos.php?q=" + voto, true);
    xmlhttp.send();
    window.location="../MVCVisual/Vista.html";
}
function f_prd(){
  voto = "prd";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            }
        };
    xmlhttp.open("GET", "../Modelo/BaseDatos.php?q=" + voto, true);
    xmlhttp.send();
    window.location="../MVCVisual/Vista.html";
}

function f_pan(){
  voto = "pan";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

            }
        };
    xmlhttp.open("GET", "../Modelo/BaseDatos.php?q=" + voto, true);
    xmlhttp.send();
    window.location="../MVCVisual/Vista.html";
}
