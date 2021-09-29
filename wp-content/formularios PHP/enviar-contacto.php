<?php

error_reporting(0);
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$mail = $_POST['mail'];
$mensaje = $_POST['mensaje']

$header = "From: " . $mail . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . "\r\n";
$mensaje .= "\r\nSu mail es: " . $mail . "\r\n";
$mensaje .= "\r\nMensaje del Usuario: $" . $_POST['mensaje'] . "\r\n";
$mensaje .= "\r\nTelefono de contacto: " . $_POST['telefono'] . "\r\n";
$mensaje .= "\r\nEnviado el: " . date('d/m/Y', time());

$para = "bernardo_martinez@ezcorp.com";
$asunto = 'Esto es una prueba';

mail($para, $asunto, utf8_decode($mensaje), $header);
echo "Mensaje enviado correctamente";

 ?>
