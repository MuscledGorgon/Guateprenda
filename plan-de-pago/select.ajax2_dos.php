<?php
include 'db.php';
$clavedos = $_POST["iddos"];

$sucursalesdb = ModeloPaises::mdlTraerSucursalesDOS($clavedos);


foreach ($sucursalesdb as $key => $value) {
	
	$idsuc = $value["idsDict"];
	$nombre = $value["nombre"];
	$direccion = $value["direccion"];
	$horario = $value["horario"];	
	$telefono = $value["telefono"];
	$logopesos ="<img src='imgx/logopesos.png' width='25' height='30' />";
	$logoubica ="<img src='imgx/logoubica.png' width='20' height='20' />";	
	$logohorario ="<img src='imgx/logohorario.png' width='20' height='20' />";	
	$logotelefono ="<img src='imgx/logotelefono.png' width='20' height='20' />";
		
	$muestra = $nombre;
	$direcciontexto = $direccion; //utf8_decode(ucwords(strtolower($direccion)));onclick='enviaformDOS($idsuc);'

	echo '<option value="" hidden selected>Seleccione Sucursal</option>';	
	echo "<div id='tienetiendas1$idsuc' class='botselect' onclick='igualasuc1($idsuc);'>
	$logopesos $muestra<br>
	$logoubica $direcciontexto<br>
	$logohorario $horario<br>
	$logotelefono $telefono
	<input id='idsuc1$idsuc' name='' type='hidden' value='$idsuc' />
	

	</div>";
}

?>
