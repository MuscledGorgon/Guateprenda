<?php
include 'db.php';
$clave = $_POST["id"];


$estadosdb = ModeloPaises::mdlTraerDependencias($clave);

foreach ($estadosdb as $key => $value) {
	
	
	echo '<option value="" hidden selected>Seleccione Municipio</option>';
	echo '<option value="'.$value["idmunicipioclave"].'">'.$value["municipio"].'</option>';
}