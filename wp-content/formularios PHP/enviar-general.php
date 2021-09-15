<?php

error_reporting(0);
$dinero = $_POST['dinero'];
$articulo = $_POST['articulo'];
$caracteristicas = $_POST['caracteristicas'];
$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$mail = $_POST['mail'];

$header = "From: " . $mail . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por: " . $nombre . "\r\n";
$mensaje .= "Su mail es: " . $mail . "\r\n";
$mensaje .= "Prestamo necesario: $" . $_POST['dinero'] . "\r\n";
$mensaje .= "Articulo a empeñar: " . $_POST['articulo']. "\r\n";
$mensaje .= "Características del articulo: " . $_POST['caracteristicas'] . "\r\n";
$mensaje .= "Telefono de contacto: " . $_POST['telefono'] . "\r\n";
$mensaje .= "Enviado el: " . date('d/m/Y', time());

$para = "bernardo_martinez@ezcorp.com";
$asunto = 'Esto es una prueba';

mail($para, $asunto, utf8_decode($mensaje), $header);
echo "Mensaje enviado correctamente";

 ?>
