<?php

error_reporting(0);
$dinero = $_POST['dinero'];
$tienda = $_POST['tienda'];
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
$mensaje .="\r\nTienda seleccionada: $" . $_POST['tienda'] . "\r\n";
$mensaje .= "\r\nCaracterísticas de la motocicleta: " . $_POST['caracteristicas'] . "\r\n";
$mensaje .= "\r\nTelefono de contacto: " . $_POST['telefono'] . "\r\n";
$mensaje .= "\r\nEnviado el: " . date('d/m/Y', time());

$para = "";
$asunto = 'Empeño Motocicleta';

mail($para, $asunto, utf8_decode($mensaje), $header);
header('Location: https://www.guateprenda.com/');

 ?>
