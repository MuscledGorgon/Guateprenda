<?php 
/*
$host_db = "localhost";
$user_db = "root";
$pass_db = "aledesma.1";
$db_name = "eliminacontenido";
$conexionle = new mysqli($host_db, $user_db, $pass_db, $db_name);
if ($conexionle->connect_error) {

 die("La conexion fallo: " . $conexionle->connect_error);

}else{
	echo '';
}

*/

$host_db = "empenofacil.com";
$user_db = "b62sv2lrpcmz";
$pass_db = "gO$$#Ttyuii67";
$db_name = "empfacilbd3081677";
$conexionle = new mysqli($host_db, $user_db, $pass_db, $db_name);
if ($conexionle->connect_error) {

 die("La conexion fallo: " . $conexionle->connect_error);

}else{
	echo '';
}




 ?>

<?php


date_default_timezone_set('America/Los_Angeles');
$script_tz = date_default_timezone_get();
setlocale(LC_ALL,"es_MX");//setlocale(LC_ALL,"es_MX.UTF-8");

$fechaHoAct = strtoupper(strftime("%Y-%m-%d %H:%M:%S"));
$fechaHoAct2 = strtotime ( '+48 hour' , strtotime ($fechaHoAct) ) ; 

$NuevaFecha = date ( 'Y-m-d H:i:s' , $fechaHoAct2);



$idsuc = $_POST['idsuc'];

$dinero = $_POST['dinero'];
$caracteristica = $_POST['caracteristica'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$selectpaisesid = $_POST['selectpaisesid'];
$selectestado = $_POST['selectestado'];



$encabezado = "<img src='https://empenofacil.com/img/EF_FormularioWeb_Gracias.jpg' width='100%' height='auto' />";
$pie = "S√≠guenos en : <a href='https://www.facebook.com/EmpenoFacilMexico/?epa=SEARCH_BOX'><img src='https://empenofacil.com/img/EF_AjustesFormularioWeb_01FB.png' width='30px'></a>
					                        <a href='https://www.instagram.com/empenofacil_mx/'><img src='https://empenofacil.com/img/EF_AjustesFormularioWeb_02IG.png' width='30px'></a>
					                        <a href='https://www.youtube.com/channel/UCEtj5NqQxL_6e8xIMMTigXg?view_as=subscriber'><img src='https://empenofacil.com/img/EF_AjustesFormularioWeb_03YT.png' width='30px'></a>";





if($dinero == '' or $caracteristica == '' or $nombre == '' or $telefono == '' or $correo == ''){
	echo 'Favor de completar los datos';
	exit;
	
}else{


$TraeSucursal = "SELECT * FROM suc WHERE idsDict = '$idsuc'";
$resTraeSucursal = mysqli_query($conexionle, $TraeSucursal) or die("ErrorTraeSucursal");


while($row_TraeSucursal = mysqli_fetch_assoc($resTraeSucursal)) {
	
	$nombresucursal = $row_TraeSucursal['nombre'];
	$direccionsucursal = $row_TraeSucursal['direccion'];
	$telefonosucursal = $row_TraeSucursal['telefono'];	
	$horariosucursal = $row_TraeSucursal['horario'];
	$estado = $row_TraeSucursal['estado'];
	$municipio = $row_TraeSucursal['municipio'];		
	
	}
	

$idsiguiente = "SELECT IF(max(leads.idcupon)+1 is NULL,1,max(leads.idcupon)+1) as idproximo FROM leads";
$Residsiguiente = mysqli_query($conexionle, $idsiguiente) or die("erroridsiguiente");

while($fidsiguiente = mysqli_fetch_assoc($Residsiguiente)) {
	
	$idproximo = $fidsiguiente['idproximo'];
	

	}	

$AgregaLead = "INSERT INTO leads (idcupon,nombre,telefono,email,caracteristica,vigencia) VALUES ('$idproximo','$nombre','$telefono','$correo','$caracteristica','$NuevaFecha')";
$resAgregaLead = mysqli_query($conexionle, $AgregaLead) or die("ErrorAgregaLead");	
	

	
include_once('../clases/class.phpmailer.php');
include_once('../clases/class.smtp.php');



$para2 = $correo;


$mensaje1 = $encabezado.''.'<br>'.''."Tiene un Contacto Web <br>Nombre:$nombre<br>Email:$correo<br>Tel&eacute;fono:$telefono<br>Prestamo:$dinero<br>Producto:$caracteristica<br>Estado:$estado<br>Municipio:$municipio<br>Tienda:$nombresucursal".''.'<br><br><br>'.''.$pie;

//2do correo
$mensaje2 = $encabezado.''.'<br>'.''."EMPE&Ntilde;O F&Aacute;CIL<br><br>Gracias por comunicarse con nosotros, pronto un ejecutivo se pondr&aacute; en contacto con usted.<br><br>CONFIRMAMOS SU DATOS: <br>Nombre:$nombre<br>Email:$correo<br>Tel&eacute;fono:$telefono<br>Prestamo:$dinero<br>Producto:$caracteristica<br>Estado:$estado<br>Municipio:$municipio<br>Tienda Elegida:$nombresucursal<br><br>Ubicada en: $direccionsucursal".''.'<br><br><br>'.''.$pie;


$mail = new PHPMailer();
$mail->From = "Empe√±o F√°cil <servicioalcliente@ezcorp.com>";
$mail->CharSet = 'UTF-8';
$mail->FromName = "EMPENO FACIL ObtÈn M?s";
$mail->IsHTML(true);
$mail->AddAddress($para2);
$mail->Subject = "Gracias por Contactarnos";
$mail->Body = $mensaje2;
$mail->IsHTML($mensaje2);
$mail->Send();


$remitente = 'servicioalcliente@ezcorp.com';
$destinatario = 'cynthiaordaz.chi@gmail.com,cynthia_ordaz@ezcorp.com,mara_aguilarborunda@ezcorp.com,cordaz@ezcorp.com,erwing_Ortega@ezcorp.com';
$asunto = 'Contacto Web Empe?o Facil';

?>

<?php

	 
	$cuerpo  = "Comentario: ". 'Tiene un Contacto Web' . "\r\n";    
	$cuerpo .= "Nombre: " . $nombre . "\r\n"; 
    $cuerpo .= "Correo electrÛnico: " . $correo . "\r\n";
    $cuerpo .= "TelÈfono: " . $telefono . "\r\n";
    $cuerpo .= "Prestamo: " . $dinero . "\r\n";
    $cuerpo .= "Producto: " . $caracteristica . "\r\n";	
    $cuerpo .= "Estado: " . $estado . "\r\n";
    $cuerpo .= "Municipio: " . $municipio . "\r\n";
    $cuerpo .= "Tienda: " . $nombresucursal . "\r\n";


    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: \"".$nombre."\" <".$remitente.">\n";

    mail($destinatario, $asunto, $cuerpo, $headers);


header("Location: enviomailok1.php?vc=$idproximo");

}

?>