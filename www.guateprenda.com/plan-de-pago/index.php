<?php include 'db.php'; ?>

<?php 

	include("_formas.php"); 
	include("_encabezado.php");	 
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1"> 
<title>Empe&ntilde;o F&aacute;cil</title>
<link href="cssx/estilos.css" rel="stylesheet" type="text/css" />
<link href="cssx/tab.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


 <script src="js/jquery-3.5.1.min.js"></script>
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8056039.js"></script>
<!-- End of HubSpot Embed Code -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-X2LEXVH51Z"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-X2LEXVH51Z');
</script>

</head>


<body onload="muestraimagenotroart();">
 <div class="contenedor"><!-- empieza contenedor nav -->
 <div class="subcontenedor"><!-- empieza SUBcontenedor nav -->
 

 
 <div class="tabendiv"><!-- empieza div del TAB -->
 
<div class="tab">

<div id="que1" class="TITULOimgdiv1">&iquest;QUE QUIERES EMPE&Ntilde;AR?</div>


  <button class="tablinks"  onclick="openCity(event, 'otro');muestraimagenotroart()"  id="defaultOpen"><span>Quiero empe&ntilde;ar OTRO ART&Iacute;CULO</span></button>
  <button class="tablinks"  onclick="openCity(event, 'joyeria');muestraimagenjoyeria()"><span>Quiero empe&ntilde;ar JOYER&Iacute;A</span></button>

</div>


<div id="otro" class="tabcontent"><!-- inicia TAB OTRO -->


<form action="enviaemail2.php" method="post" name="formizq" id="formizq"  >

<div class="spacer"></div>
<div class="tienetitulo2">*El periodo de pago del pr&eacute;stamo es m&iacute;nimo de 30 d&iacute;as sin un l&iacute;mite m&aacute;ximo obligatorio de d&iacute;as para liquidarlo, en caso de no liquidar el monto del total del pr&eacute;stamo, las comisiones y el inter&eacute;s generado en la fecha se&ntilde;alada del contrato, podr&aacute;s pagar &uacute;nicamente las comisiones con el inter&eacute;s generado, obteniendo un plazo de d&iacute;as igual al periodo pactado para recuperar tu prenda. Tasa Mensual promedio en mercanc&iacute;a general del 21% sin IVA Ej. Para un pr&eacute;stamo de $1,000 el cliente liquida con $1,210. Ejemplos representativos para fines informativos exclusivamente. Para mayor informaci&oacute;n consulta en tienda m&aacute;s cercana.</span></div>

<div class="textoSUBTITLE">Tu Pr&eacute;stamo</div>
<hr class="hrline">

<div class="tienecampo">
<label class="etiqudoble" for="dinero1"><span class="textoTITLECAMPO">&iquest;Cuanto dinero necesitas?</span></label>
<label class="etiqudoble" for="articulo1"><span class="textoTITLECAMPO">&iquest;Que art&iacute;culo quieres empe&ntilde;ar?</span></label>
<input name="dinero1" id="dinero1" class="campodoble" name="" type="text" />
<input name="articulo1" id="articulo1"  class="campodoble"  name="" type="text" />
</div>


<div class="tienecampo">
<label class="etiqucompleto" for="caracteristica1"><span class="textoTITLECAMPO">&iquest;Cu&aacute;les son las caracter&iacute;sticas de tu art&iacute;culo?</span></label>
<input name="caracteristica1" id="caracteristica1"  class="campocompleto" name="" type="text" />
</div>


<div class="textoSUBTITLE">Datos de Contacto</div>
<hr class="hrline">


<div class="tienecampo">
<label class="etiqucompleto" for="nombre1"><span class="textoTITLECAMPO">Nombre Completo</span></label>
<input name="nombre1" id="nombre1"  class="campocompleto" name="" type="text" />
</div>


<div class="tienecampo">
<label class="etiqudoble" for="telefono1"><span class="textoTITLECAMPO">Tel&eacute;fono</span></label>
<label class="etiqudoble" for="correo1"><span class="textoTITLECAMPO">Correo</span></label>
<input name="telefono1" id="telefono1" class="campodoble" name="" type="text" />
<input name="correo1" id="correo1"  class="campodoble"  name="" type="email" />
</div>


<div class="textoSUBTITLE">Ubica tu tienda m&eacute;s cercana</div>
<input id='idsuc1lleva1' name='idsuc1lleva1' type='hidden' value='' />
<hr class="hrline">

<div class="tienecampo">
<label class="etiqudoble" for="selectpaisesid1"><span class="textoTITLECAMPO">Estado</span></label>
<label class="etiqudoble" for="selectestado1"><span class="textoTITLECAMPO">Municipio</span></label>

<select class="campodoble" id="selectpaisesid1" onchange="selectpaisesDOS()">
          			<option value="">Seleccione un Estado</option>
                <?php
                    $paisesdb = ModeloPaises::mdlShowPaisesDOS();
                    foreach ($paisesdb as $key => $value) {
                      echo '<option value="'. $value["idclaveedo"] .'"> '. $value["estado"] .'</option>';
                    }
                ?>
          			
          		</select>
                
<select class="campodoble" id="selectestado1" disabled  onchange="selectsucursalesDOS()">
          			<option value="">Seleccione Municipio</option>
          		</select>
                
 
 <div class='textselectienda'>Seleccione su tienda cercana</div>
 <div style="font-size:19px; color:#F00;"  id="contienerespuestaenvio1"></div>               
<div  id="selectsucursalesid1"></div>                



</div>

<input name='butoizq' id="butoizq" type='submit' value='Enviar' style="width:100px; height:40px;"  disabled='true'/>
</form>


<div class="spacer"></div>

<div class="divdudasredes">
<div id="dudas">&iquest;Dudas? Cont&aacute;ctanos</div>
<div id="redes"></div>
<a href="https://api.whatsapp.com/send?phone=525580258941&text=Hola!%20Quiero%20empe&ntilde;ar%20un%20art&iacute;culo" target="_blank"><img class="circulored" src="imgx/whatsapp.png" /></a>
<a href="tel:18003647837" target="_blank"><img class="circulored" src="imgx/telefono.png" /></a>
</div>


</div><!-- termina TAB OTRO -->






<div id="joyeria" class="tabcontent"><!-- INICIA TAB JOYERIA -->


<form action="enviaemail.php" method="post"  name="formder" id="formder">

<div class="spacer"></div>
<div class="tienetitulo2">*El periodo de pago del pr&eacute;stamo es m&iacute;nimo de 30 d&iacute;as sin un l&iacute;mite m&aacute;ximo obligatorio de d&iacute;as para liquidarlo, en caso de no liquidar el monto del total del pr&eacute;stamo, las comisiones y el inter&eacute;s generado en la fecha se&ntilde;alada del contrato, podr&aacute;s pagar &uacute;nicamente las comisiones con el inter&eacute;s generado, obteniendo un plazo de d&iacute;as igual al periodo pactado para recuperar tu prenda. Tasa Mensual promedio en joyer&iacute;a del 15% sin IVA Ej. Para un pr&eacute;stamo de $1,000 el cliente liquida con $1,150. Ejemplos representativos para fines informativos exclusivamente. Para mayor informaci&oacute;n consulta en tienda m&aacute;s cercana.</span></div>



<div class="textoSUBTITLE">Tu Pr&eacute;stamo</div>
<hr class="hrline">

<div class="tienecampo">
<label class="etiqudoble" for="dinero"><span class="textoTITLECAMPO">&iquest;Cuanto dinero necesitas?</span></label>
<label class="etiqudoble" for="caracteristica"><span class="textoTITLECAMPO">&iquest;Cu&aacute;les son las caracter&iacute;sticas de tu art&iacute;culo?</span></label>
<input name="dinero" id="dinero" class="campodoble" name="" type="text" />
<input name="caracteristica" id="caracteristica"  class="campodoble"  name="" type="text" />
</div>


<div class="textoSUBTITLE">Datos de Contacto</div>
<hr class="hrline">

<div class="tienecampo">
<label class="etiqucompleto" for="nombre"><span class="textoTITLECAMPO">Nombre Completo</span></label>
<input name="nombre" id="nombre"  class="campocompleto" name="" type="text" />
</div>


<div class="tienecampo">
<label class="etiqudoble" for="telefono"><span class="textoTITLECAMPO">Tel&eacute;fono</span></label>
<label class="etiqudoble" for="correo"><span class="textoTITLECAMPO">Correo</span></label>
<input name="telefono" id="telefono" class="campodoble" name="" type="text" />
<input name="correo" id="correo"  class="campodoble"  name="" type="email" />
</div>

<div class="textoSUBTITLE">Ubica tu tienda m&eacute;s cercana</div>
<input id='idsuc1lleva' name='idsuc1lleva' type='hidden' value='' />
<hr class="hrline">

<div class="tienecampo">
<label class="etiqudoble" for="selectpaisesid"><span class="textoTITLECAMPO">Estado</span></label>
<label class="etiqudoble" for="selectestado"><span class="textoTITLECAMPO">Municipio</span></label>

<select class="campodoble" id="selectpaisesid" onchange="selectpaises()">
          			<option value="">Seleccione un Estado</option>
                <?php
                    $paisesdb = ModeloPaises::mdlShowPaises();
                    foreach ($paisesdb as $key => $value) {
                      echo '<option value="'. $value["idclaveedo"] .'"> '. $value["estado"] .'</option>';
                    }
                ?>
          			
          		</select>
                
<select class="campodoble" id="selectestado" disabled  onchange="selectsucursales()">
          			<option value="">Seleccione Municipio</option>
          		</select>
                
 
 <div class='textselectienda'>Seleccione su tienda cercana</div>
 <div style="font-size:20px; color: #F00;"  id="contienerespuestaenvio"></div>               
<div  id="selectsucursalesid"></div>                



</div>
<input name='butoder' id="butoder" type='submit' value='Envia' style="width:100px; height:40px;"  disabled='true'/>
</form>

<div class="spacer"></div>

<div class="divdudasredes">
<div id="dudas">&iquest;Dudas? Cont&aacute;ctanos</div>
<div id="redes"></div>
<a href="https://api.whatsapp.com/send?phone=525580258941&text=Hola!%20Quiero%20empe&ntilde;ar%20un%20art&iacute;culo" target="_blank"><img class="circulored" src="imgx/whatsapp.png" /></a>
<a href="tel:18003647837" target="_blank"><img class="circulored" src="imgx/telefono.png" /></a>
</div>



 
</div><!-- termina TAB JOYERIA -->



 
 </div><!-- termina div del TAB -->
 
 
<div class="imgdiv1"><div id="que2" class="TITULOimgdiv1">&iquest;QUE QUIERES EMPE&Ntilde;AR?</div><!-- inicia div IMAGEN 1 -->
<div class="demo"></div><!-- DIV margen amarillo bajo -->


<img id="imagenjoyeria" src="imgx/imagenconjunto.png" width="100%" height="auto" />
<img id="imagenotroart" src="imgx/imagenconjuntootro.png" width="100%" height="auto" />
</div><!-- termina div IMAGEN 1 -->



 
 
 
 </div><!-- terminar SUBcontenedor nav -->
 
 
 
 </div><!-- terminar contenedor nav -->
 




 
<script>
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>



</body>
<script src="js.js"></script>

<script>
function enviaformizq() {

		document.getElementById("formizq").submit();

}
</script>

<script>
function enviaformder() {
  document.getElementById("formder").submit();
}
</script>



<script>
function igualasuc(i){
	
	document.getElementById("idsuc1lleva").value = document.getElementById("idsuc"+i).value;
	
	document.getElementById("selectsucursalesid").style.display = 'none';
	document.getElementById("butoder").disabled = false;	
	
	butoder
	

}
</script>

<script>
function igualasuc1(i){
	
	document.getElementById("idsuc1lleva1").value = document.getElementById("idsuc1"+i).value;
	
	document.getElementById("selectsucursalesid1").style.display = 'none';
	document.getElementById("butoizq").disabled = false;
	
}
</script>



<script>
function muestradivder(){
document.getElementById("selectsucursalesid").style.display = 'inline';
}
</script>

<script>
function muestradivizq(){
document.getElementById("selectsucursalesid1").style.display = 'inline';
}
</script>


<script>
function muestraimagenotroart(){
	
	document.getElementById("imagenjoyeria").style.display = "none";	
	document.getElementById("imagenotroart").style.display = "inline";	
	
}
function muestraimagenjoyeria(){
	
	document.getElementById("imagenjoyeria").style.display = "inline";	
	document.getElementById("imagenotroart").style.display = "none";	
}
</script>

<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8056039.js"></script>

</html>
