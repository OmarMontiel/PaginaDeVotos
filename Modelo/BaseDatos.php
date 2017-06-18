
<?php
	$host = "localhost";
	$user = "root";
	$pass = "";
	$database = "sistemasdevoto";
	$q = $_GET['q'];

	$connection = mysql_connect($host, $user, $pass) or die('Error en la conexion: ' . mysql_error());
	mysql_select_db($database) or die('Error en conexion db: ' . mysql_error());

	if($q == "nulo"){
		f_nulo();
	}elseif ($q == "pan") {
		f_pan();
	}elseif ($q == "pri") {
		f_pri();
	}elseif ($q == "prd") {
		f_prd();
	}


	function f_pri(){
		$query = "SELECT N_votos FROM votos WHERE  ID=1 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPRI = $row['N_votos'];
		$votosPRI = $votosPRI + 1;
		$query = "UPDATE votos SET N_votos='$votosPRI' WHERE ID=1";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
	}

  function f_pan(){
		$query = "SELECT N_votos FROM votos WHERE  ID=2 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPAN = $row['N_votos'];
		$votosPAN = $votosPAN + 1;
		$query = "UPDATE votos SET N_votos='$votosPAN' WHERE ID=2";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
	}
  function f_prd(){
		$query = "SELECT * FROM votos WHERE ID= 3 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPRD = $row['N_votos'];
		$votosPRD = $votosPRD + 1;
		$query = "UPDATE votos SET N_votos='$votosPRD' WHERE ID=3";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
	}
  function f_nulo(){
		$query = "SELECT * FROM votos WHERE ID= 4 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosNulo = $row['N_votos'];
		$votosNulo = $votosNulo + 1;
		$query = "UPDATE votos SET N_votos='$votosNulo' WHERE ID=4";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		return  $votosNulo;
	}

  mysql_close($connection);

?>
