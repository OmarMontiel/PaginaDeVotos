
<?php



	$connection = mysql_connect("localhost","root","","sistemasdevoto")or die('Error en la conexion: ' . mysql_error());
	$db = mysql_select_db("sistemasdevoto",$connection) or die(" <h2> error de conecion <h2>");


	function f_pri(){
		$query = "SELECT N_votos FROM votos WHERE ID= 1 ";
		$result = mysql_query($query,$connection) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		echo "string";
		$votosPRI = $row['N_votos'];
		$votosPRI = $votosPRI + 1;
		UPDATE `votos` SET `N_votos` = '8' WHERE `votos`.`ID` = 1;
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());

		echo " alert("hola") ";
	}

  function f_pan(){
		$query = "SELECT N_votos FROM votos WHERE Nombre= 'pri' ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPAN = $row['N_votos'];
		$votosPAN = $votosPAN + 1;
		$query = "UPDATE votos SET N_votos='$votosPAN' WHERE id=2";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
	}
  function f_prd(){
		$query = "SELECT * FROM votos WHERE ID= 3 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosPRD = $row['N_votos'];
		$votosPRD = $votosPRD + 1;
		$query = "UPDATE votos SET N_votos='$votosPRD' WHERE id=3";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
	}
  function f_nulo(){
		$query = "SELECT * FROM votos WHERE ID= 4 ";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
		$row = mysql_fetch_array($result);
		$votosNulo = $row['N_votos'];
		$votosNulo = $votosNulo + 1;
		$query = "UPDATE votos SET N_votos='$votosNulo' WHERE id=4";
		$result = mysql_query($query) or die('Error en la consulta: ' . mysql_error());
	}

  mysql_close($connection);

?>
