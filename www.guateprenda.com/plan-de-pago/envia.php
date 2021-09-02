<?php
$remitente = $_POST['email'];
$destinatario = 'infodevweb@gmail.com,patodowebalex@gmail.com';
$asunto = 'Lead EF';


$uno = $_POST['uno'];
$dos = $_POST['dos'];
$tres = $_POST['tres'];
$cuatro = $_POST['cuatro'];
$cinco = $_POST['cinco'];
$seis = $_POST['seis'];
$siete = $_POST['siete'];
$ocho = $_POST['ocho'];
$nueve = $_POST['nueve'];
$diez = $_POST['diez'];
$once = $_POST['once'];
$doce = $_POST['doce'];
$trece = $_POST['trece'];
$catorce = $_POST['catorce'];
$quince = $_POST['quince'];



if (!$_POST){
?>

<?php
}else{
	 
    $cuerpo  = "Nombre: " . $_POST["name"] . "\r\n"; 
    $cuerpo .= "Correo electrónico: " . $_POST["email"] . "\r\n";
    $cuerpo .= "Teléfono: " . $_POST["phone"] . "\r\n";
	$cuerpo .= "Comentario: " . $_POST["comment"] . "\r\n";

    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: \"".$_POST['name']."\" <".$remitente.">\n";

    mail($destinatario, $asunto, $cuerpo, $headers);
    echo "<script>top.window.location = 'gracias.html'</script>";
}
?>