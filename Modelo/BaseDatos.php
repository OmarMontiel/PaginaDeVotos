
<?php
	$host = "localhost";
	$user = "root";
	$pass = "";
	$database = "sistemasdevoto";
	$q = $_GET['q'];


	$connection = mysql_connect($host, $user, $pass) or die('Error en la conexion: ' . mysql_error());
	mysql_select_db($database) or die('Error en conexion db: ' . mysql_error());

// Insercion de votos
	if($q == "nulo"){
		f_nulo();
	}elseif ($q == "pan") {
		f_pan();
	}elseif ($q == "pri") {
		f_pri();
	}elseif ($q == "prd") {
		f_prd();
	}elseif ($q ==0) {
		$cantidadDeVotos=array(VotosPRI(),VotosPan(),VotosPRD(),VotosNULO());
		$EnvioDeDatos = json_encode($cantidadDeVotos);
		echo $EnvioDeDatos;
	}



	function f_pri(){
		$query = "SELECT N_votos FROM votos WHERE  ID=1 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPRI = $row['N_votos'];
		$votosPRI = $votosPRI + 1;
		$query = "UPDATE votos SET N_votos='$votosPRI' WHERE ID=1";
		$vlor  =$row['$query'];
		$Votopri =$vlor;
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
		$query = "SELECT N_votos FROM votos WHERE ID= 3 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPRD = $row['N_votos'];
		$votosPRD = $votosPRD + 1;
		$query = "UPDATE votos SET N_votos='$votosPRD' WHERE ID=3";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
	}
  function f_nulo(){
		$query = "SELECT N_votos FROM votos WHERE ID= 4 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosNulo = $row['N_votos'];
		$votosNulo = $votosNulo + 1;
		$query = "UPDATE votos SET N_votos='$votosNulo' WHERE ID=4";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		return  $votosNulo;
	}

	function VotosPRI(){
		$query = "SELECT * FROM votos WHERE  ID=1 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPRI = $row['N_votos'];
		$pri=$row['Nombre'];
		return $votosPRI ;
		

	}
	function VotosPan(){
		$query = "SELECT N_votos FROM votos WHERE  ID=2 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPAN = $row['N_votos'];
		return $votosPAN;

	}
	function VotosPRD(){
		$query = "SELECT N_votos FROM votos WHERE ID= 3 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPRD = $row['N_votos'];

		return $votosPRD;
	}
	function VotosNULO(){
		$query = "SELECT N_votos FROM votos WHERE ID= 4 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosNulo = $row['N_votos'];
		return $votosNulo;
	}

	// fin de consulta de datos

  mysql_close($connection);

?>
