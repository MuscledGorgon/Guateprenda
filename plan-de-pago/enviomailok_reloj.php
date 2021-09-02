<?php

include 'db.php'; 


	include("_formas.php"); 
	include("_encabezado.php"); 


$vc = $_GET['vc'];

date_default_timezone_set('America/Los_Angeles');
$script_tz = date_default_timezone_get();
setlocale(LC_ALL,"es_MX");//setlocale(LC_ALL,"es_MX.UTF-8");

$fechaHoAct = strtoupper(strftime("%Y-%m-%d %H:%M:%S"));
$fechaHoAct2 = strtotime ( '+48 hour' , strtotime ($fechaHoAct) ) ; 

$NuevaFecha = date ( 'Y-m-d H:i:s' , $fechaHoAct2); 


?>
<!DOCTYPE HTML>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="cssx/thankyou.css" rel="stylesheet" type="text/css">
<meta charset="windows-1257">
</head>
<body>


<script>
// Set the date we're counting down to
var countDownDate = new Date("<?php echo $NuevaFecha; ?>").getTime();
//var countDownDate = new Date("apr 21, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("f1").value = days;  
  document.getElementById("f2").value = hours; 
  document.getElementById("f3").value = minutes;       	           
  document.getElementById("f4").value = seconds;
  
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRO";
  }
}, 1000);


</script>
<div style="background-color:#FFF; width:100%; height:auto; min-height:1300px;">

<div class="contenedorxx"><!-- inicia contenedor -->
<div class="tituloxx"><span style="font-size:24px; text-align:left; color:#001588; font-weight:bold; font-family:Arial, Helvetica, sans-serif;">&iexcl;GRACIAS!</span><span style="font-size:15px; text-align:left; color: #999; font-family:Arial, Helvetica, sans-serif;"> Tu correo electr&oacute;nico ha sido enviado con &eacute;xito, pronto nos pondremos en contacto</span></div>
<br>
<br>
<div class="tituloxx"><span style="font-size:24px; text-align:left; color:#001588; font-weight:bold; font-family:Arial, Helvetica, sans-serif;">TE DAMOS 15% M&Aacute;S EN TU PR&Eacute;STAMO</span></div>
<br>
<br>
<span style="font-size:15px; text-align:left; color: #999; font-family:Arial, Helvetica, sans-serif;">&iexcl;Hazlo v&aacute;lido antes de que sea tarde!</span>
<br>
<br>
</div><!-- termina contenedor -->

<div class="contenedorxx"><!-- inicia contenedor -->


<div id="b1" class="bloque1xx">
<input class="inputxx" name="f1" id="f1" type="text" style="color:#FF0;" >
<div class="introbloque">Dias</div>
</div>

<div id="b2" class="bloque2xx">
<input class="inputxx" name="f2" id="f2" type="text" style="color:#FF0;" >
<div class="introbloque">Horas</div>
</div>

<div id="b3" class="bloque3xx">
<input class="inputxx" name="f3" id="f3" type="text" style="color:#FF0;" >
<div class="introbloque">Minutos</div>
</div>

<div id="b4" class="bloque4xx">
<input class="inputxx" name="f4" id="f4" type="text" style="color:#FF0;" >
<div class="introbloque">Segundos</div>
</div>


</div><!-- termina contenedor -->


<div class="contenedorxx" style="padding-top:80px;"><!-- inicia contenedor -->

<div class="subcontenedorxx"><!-- inicia subcontenedor -->
<div class="introbloquebajoxx">Código sobre pr&eacute;stamo</div>
<div class="introbloquebajoxx"><input type="text" style="width:150px; height:30px; background-color:#FF0; color:#000; text-align:center; border:none; font-size:14px;" value="<?php echo $vc; ?>" readonly disabled></div>
</div><!-- termina subcontenedor -->

<div class="subcontenedorxx"><!-- inicia subcontenedor -->
<div class="introbloquebajoxx">Vigencia</div>
<div class="introbloquebajoxx"><input type="text" disabled style="width:150px; height:30px; background-color:#FF0; color:#000; text-align:center; border:none; font-size:14px;" value="<?php echo $NuevaFecha ?>" readonly></div>
</div><!-- termina subcontenedor -->

</div><!-- termina contenedor -->

<br>
<br>
<br>
<br>

<div class="contenedorxx"><!-- inicia contenedor -->
<div class="tituloxx"><span style="font-size:15px; text-align:left; color: #999;">*Para hacer valido el sobre pr&eacute;stamo, toma una captura de pantalla, tambien puedes enseñar el correo que te llego y presentar en tu tienda m&aacute;s cercana antes de la fecha de vigencia &iexcl;Y listo!</span></div>
</div><!-- termina contenedor -->


</div>
</body>
</html>


