var voto = " ";
function f_pri() {
  document.getElementById('parrafo').innerHTML="voto pri";
  voto="pri";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    }
  };
  xmlhttp.open("GET","ConecionBaseDatos.php?q="+voto,true);
  xmlhttp.send();
  alert("ff");
}

function f_pan() {
  document.getElementById('parrafo').innerHTML="voto pan";
}
function f_prd() {
  document.getElementById('parrafo').innerHTML="voto prd";
}
function f_nulo() {
  document.getElementById('parrafo').innerHTML="voto nulo";
}
