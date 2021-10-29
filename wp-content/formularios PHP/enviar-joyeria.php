<?php

error_reporting(0);
$dinero = $_POST['dinero'];
$caracteristicas = $_POST['caracteristicas'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$mail = $_POST['mail'];

$header = "From: " . $mail . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . "\r\n";
$mensaje .= "\r\nSu mail es: " . $mail . "\r\n";
$mensaje .= "\r\nPrestamo necesario: $" . $_POST['dinero'] . "\r\n";
$mensaje .= "\r\nCaracterísticas del articulo: " . $_POST['caracteristicas'] . "\r\n";
$mensaje .= "\r\nTelefono de contacto: " . $_POST['telefono'] . "\r\n";
$mensaje .= "\r\nEnviado el: " . date('d/m/Y', time());

$para = "servicioalcliente@ezcorp.com";
$asunto = 'Articulos de Joyeria';

mail($para, $asunto, utf8_decode($mensaje), $header);
echo "Mensaje enviado correctamente";

 ?>
