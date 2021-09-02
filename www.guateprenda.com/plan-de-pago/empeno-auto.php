<?php
 include("_formas.php"); 
include("_encabezado.php"); 
//<body style="background-color: #333399;">
?>

    <!--[if lte IE 9]>
            <p class="browserupgrade">Estás usando un navegador <strong>obsoleto</strong>. Por favor <a href="https://browsehappy.com/">actualiza tu navegador</a> para mejorar tu experiencia y seguridad.</p>
        <![endif]-->
  
   
<link rel="stylesheet" type="text/css" href="formato.css">   

<div class="" style="background-color: #040d82; text-align: center; padding: 3.5vw; color: #ffffff; font-weight: bold;">
    <p style="color: #ffffff; font-size: 3.5vw; font-family: Helvetica;">Entra con <span class="texto-amarillo texto-negrita">TU AUTO</span> y sal</p><br>
  <p style="color: #ffffff; font-size: 3.5vw; font-family: Helvetica;">con el <span class="texto-amarillo texto-negrita">DINERO</span> que necesitas</p>
</div>

<?php  
    if(empty($_POST)) {  
        ?> 

        <div class="">
            <div class="row">
        	<div class="col-md-7 col-xs-12" style="padding: 0px; float: left;">
        			<img src="<?php echo IMG168?>" alt="IMG168" style="width: 100%; min-height: 665px;">
        	</div>
        	<div class="col-md-5 col-xs-12" style="padding: 0px; float: left;">
	        	<div style="background-color: #333399;">
	            	<div style="font-size: 3.5vw; font-family: Helvetica; font-weight: bold; text-align: center; color: #ffffff; padding-top: 15px;">¡CONTÁCTANOS</div>
	                <div style="padding-top: 15px; padding-bottom: 15px;font-size: 2.5vw; font-family: Helvetica; text-align: center; color: #ffffff;">LLENANDO ESTE FORMULARIO Y NOSOTROS TE AYUDAMOS!</div>
                </div>
                <div class="container">
                	<div class="container"> 
<form id="gform" action="" method="POST" data-email="">
	                    <div style="background-color: #333399;">
	                        <div class="container">
	                            <div class="row">
	                                <div class="col-md-12 col-xs-12">
	                                    <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
	                                        Nombre Completo
	                                    </div> 
	                                    <p>
	                                        <input id="nombre_y_apellido" style="width: 100%; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff;" name="nombre_y_apellido" required type="text" placeholder="Nombre">
	                                    </p>
	                                </div>
	                            </div>
	                            <div class="row">
	                                <div class="col-md-5 col-xs-12">
	                                    <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
	                                        Teléfono
	                                    </div>
	                                    <p>
	                                        <input id="telefono" style="border-radius: 5px; border: 0px; height: 25px; width: 100%; background-color: #ffffff;" maxlength="20" name="telefono" required type="number" placeholder="(10 dígitos)">
	                                    </p>
	                                </div>
	                                <div class="col-md-7 col-xs-12">
	                                    <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
	                                        Correo
	                                    </div>
	                                    <p>
	                                        <input id="email" style="border-radius: 5px; border: 0px; height: 25px; width: 100%; background-color: #ffffff;" name="email" required type="email" placeholder="Correo electrónico">
	                                    </p>
	                                </div>
	                            </div>
                                <div class="row">
                                    <div class="col-md-6 col-xs-12" style="float: left;">
                                        <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
                                            Estado
                                        </div>
                                        <p>
                                            <select id="tiendasEstado_select" onchange="ShowHideMunicipios (this.options [this.selectedIndex].value)" style="border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" required name="tiendasEstado_select">
                                                <option selected="selected">Elige un Estado</option>
                                                <option value="Aguascalientes">Aguascalientes</option>
                                                <option value="Campeche">Campeche</option>
                                                <option value="Chiapas">Chiapas</option>
                                                <option value="Ciudad de México">Ciudad de México</option>
                                                <option value="Coahuila">Coahuila</option>
                                                <option value="Estado de México">Estado de México</option>
                                                <option value="Guanajuato">Guanajuato</option>
                                                <option value="Guerrero">Guerrero</option>
                                                <option value="Hidalgo">Hidalgo</option>
                                                <option value="Jalisco">Jalisco</option>
                                                <option value="Michoacán">Michoacán</option>
                                                <option value="Morelos">Morelos</option>
                                                <option value="Nuevo León">Nuevo León</option>
                                                <option value="Oaxaca">Oaxaca</option>
                                                <option value="Puebla">Puebla</option>
                                                <option value="Querétaro">Querétaro</option>
                                                <option value="Quintana Roo">Quintana Roo</option>
                                                <option value="San Luis Potosí">San Luis Potosí</option>
                                                <option value="Sinaloa">Sinaloa</option>
                                                <option value="Tabasco">Tabasco</option>
                                                <option value="Tamaulipas">Tamaulipas</option>
                                                <option value="Tlaxcala">Tlaxcala</option>
                                                <option value="Veracruz">Veracruz</option>
                                            </select>
                                        </p>
                                    </div>
                                    <div class="col-md-6 col-xs-12">
                                        <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
                                            Municipio
                                        </div>
                                        <p>
                                            <select id="Aguascalientes" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="AGUMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Aguascalientes">Aguascalientes</option>
                                            </select>
                                            <select id="Campeche" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="CAMMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Campeche">Campeche</option>
                                                <option value="Champotón">Champotón</option>
                                                <option value="Ciudad del Carmen">Ciudad del Carmen</option>
                                                <option value="Escárcega">Escárcega</option>
                                            </select>
                                            <select id="Chiapas" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="CHPMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Cintalapa">Cintalapa</option>
                                                <option value="Ocozocuautla">Ocozocuautla</option>
                                                <option value="Palenque">Palenque</option>
                                                <option value="San Cristóbal de las Casas">San Cristóbal de las Casas</option>
                                                <option value="Tonalá">Tonalá</option>
                                                <option value="Tuxtla Gutiérrez">Tuxtla Gutiérrez</option>
                                                <option value="Villaflores">Villaflores</option>
                                            </select>
                                            <select id="Ciudad de México" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="CMXMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Álvaro Obregón">Álvaro Obregón</option>
                                                <option value="Azcapotzalco">Azcapotzalco</option>
                                                <option value="Benito Juárez">Benito Juárez</option>
                                                <option value="Coyoacán">Coyoacán</option>
                                                <option value="Cuajimalpa">Cuajimalpa</option>
                                                <option value="Cuauhtemoc">Cuauhtemoc</option>
                                                <option value="Gustavo A. Madero">Gustavo A. Madero</option>
                                                <option value="Iztacalco">Iztacalco</option>
                                                <option value="Iztapalapa">Iztapalapa</option>
                                                <option value="Magdalena Contreras">Magdalena Contreras</option>
                                                <option value="Miguel Hidalgo">Miguel Hidalgo</option>
                                                <option value="Tlalpan">Tlalpan</option>
                                                <option value="Tláhuac">Tláhuac</option>
                                                <option value="Venustiano Carranza">Venustiano Carranza</option>
                                                <option value="Xochimilco">Xochimilco</option>
                                            </select>
                                            <select id="Coahuila" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="COAMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Frontera">Frontera</option>
                                                <option value="Ramos Arizpe">Ramos Arizpe</option>
                                                <option value="Saltillo">Saltillo</option>
                                                <option value="Torreón">Torreón</option>
                                            </select>
                                            <select id="Estado de México" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="MEXMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Almoloya">Almoloya</option>
                                                <option value="Amecameca">Amecameca</option>
                                                <option value="Chalco">Chalco</option>
                                                <option value="Chicoloapan">Chicoloapan</option>
                                                <option value="Chimalhuacán">Chimalhuacán</option>
                                                <option value="Coacalco de Berriozabal">Coacalco de Berriozabal</option>
                                                <option value="Cuautitlán Izcalli">Cuautitlán Izcalli</option>
                                                <option value="Ecatepec de Morelos">Ecatepec de Morelos</option>
                                                <option value="Huehuetoca">Huehuetoca</option>
                                                <option value="Ixtapaluca">Ixtapaluca</option>
                                                <option value="Los Reyes la Paz">Los Reyes la Paz</option>
                                                <option value="Melchor Ocampo">Melchor Ocampo</option>
                                                <option value="Tecámac de Felipes Villanueva">Tecámac de Felipes Villanueva</option>
                                                <option value="Naucalpan de Juárez">Naucalpan de Juárez</option>
                                                <option value="Nezahualcóyotl">Nezahualcóyotl</option>
                                                <option value="Nicolás Romero">Nicolás Romero</option>
                                                <option value="Teoloyucan">Teoloyucan</option>
                                                <option value="Teotihuacán">Teotihuacán</option>
                                                <option value="Tepotzotlán">Tepotzotlán</option>
                                                <option value="Texcoco">Texcoco</option>
                                                <option value="Tlalnepantla de Baz">Tlalnepantla de Baz</option>
                                                <option value="Tultepec">Tultepec</option>
                                                <option value="Tultitlán">Tultitlán</option>
                                                <option value="Valle de Chalco Solidaridad">Valle de Chalco Solidaridad</option>
                                                <option value="Zumpango">Zumpango</option>
                                            </select>
                                            <select id="Guanajuato" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="GUAMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Acámbaro">Acámbaro</option>
                                                <option value="Apaseo el Grande">Apaseo el Grande</option>
                                                <option value="Celaya">Celaya</option>
                                                <option value="Comonfort">Comonfort</option>
                                                <option value="Irapuato">Irapuato</option>
                                                <option value="León">León</option>
                                                <option value="Moroleón">Moroleón</option>
                                                <option value="Pénjamo">Pénjamo</option>
                                                <option value="Salamanca">Salamanca</option>
                                                <option value="San Felipe">San Felipe</option>
                                                <option value="San Luis de la Paz">San Luis de la Paz</option>
                                                <option value="Santa Cruz Juventino Rosas">Santa Cruz Juventino Rosas</option>
                                            </select>
                                            <select id="Guerrero" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)"  name="GROMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Acapulco">Acapulco</option>
                                                <option value="Chilpancingo de los Bravo">Chilpancingo de los Bravo</option>
                                                <option value="Iguala">Iguala</option>
                                                <option value="Taxco de Alarcón">Taxco de Alarcón</option>
                                            </select>
                                            <select id="Hidalgo" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="HIDMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Apan">Apan</option>
                                                <option value="Cuautepec">Cuautepec</option>
                                                <option value="Huejutla">Huejutla</option>
                                                <option value="Huichapan">Huichapan</option>
                                                <option value="Pachuca">Pachuca</option>
                                                <option value="Sahagún">Sahagún</option>
                                                <option value="Tepeapulco">Tepeapulco</option>
                                                <option value="Tepeji del Río">Tepeji del Río</option>
                                                <option value="Tizayuca">Tizayuca</option>
                                                <option value="Tula">Tula</option>
                                                <option value="Tulancingo">Tulancingo</option>
                                                <option value="Zimapán">Zimapán</option>
                                            </select>
                                            <select id="Jalisco" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="JALMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Guadalajara">Guadalajara</option>
                                                <option value="Lagos de Moreno">Lagos de Moreno</option>
                                                <option value="Tepatitlán de Morelos">Tepatitlán de Morelos</option>
                                                <option value="Tlajomulco de Zúñiga">Tlajomulco de Zúñiga</option>
                                                <option value="Tlaquepaque">Tlaquepaque</option>
                                                <option value="Zapopan">Zapopan</option>
                                            </select>
                                            <select id="Michoacán" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="MICMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="La Piedad">La Piedad</option>
                                                <option value="Morelia">Morelia</option>
                                                <option value="Sahuayo">Sahuayo</option>
                                                <option value="Uruapan">Uruapan</option>
                                                <option value="Zacapu">Zacapu</option>
                                                <option value="Zamora">Zamora</option>
                                            </select>
                                            <select id="Morelos" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="MORMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Cuautla">Cuautla</option>
                                                <option value="Cuernavaca">Cuernavaca</option>
                                                <option value="Jiutepec">Jiutepec</option>
                                                <option value="Jojutla">Jojutla</option>
                                                <option value="Temixco">Temixco</option>
                                                <option value="Tepoztlán">Tepoztlán</option>
                                                <option value="Xochitepec">Xochitepec</option>
                                            </select>
                                            <select id="Nuevo León" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="NLEMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Apodaca">Apodaca</option>
                                                <option value="Guadalupe">Guadalupe</option>
                                                <option value="Monterrey">Monterrey</option>
                                            </select>
                                            <select id="Oaxaca" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="OAXMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Oaxaca">Oaxaca</option>
                                                <option value="Salina Cruz">Salina Cruz</option>
                                                <option value="Tuxtepec">Tuxtepec</option>
                                            </select>
                                            <select id="Puebla" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="PUEMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Huejotzingo">Huejotzingo</option>
                                                <option value="Puebla">Puebla</option>
                                                <option value="Tezuitlán">Tezuitlán</option>
                                                <option value="Tlatlauquitepec">Tlatlauquitepec</option>
                                            </select>
                                            <select id="Querétaro" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="QUEMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Amealco">Amealco</option>
                                                <option value="Pedro Escobedo">Pedro Escobedo</option>
                                                <option value="Querétaro">Querétaro</option>
                                                <option value="San Juan del Río">San Juan del Río</option>
                                            </select>
                                            <select id="Quintana Roo" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="ROOMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Benito Juárez, Cancún">Benito Juárez, Cancún</option>
                                                <option value="Cozumel">Cozumel</option>
                                                <option value="Chetumal">Chetumal</option>
                                                <option value="Playa del Carmen">Playa del Carmen</option>
                                            </select>
                                            <select id="San Luis Potosí" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="SLPMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="San Luis Potosí">San Luis Potosí</option>
                                            </select>
                                            <select id="Sinaloa" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="SINMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Culiacán">Culiacán</option>
                                                <option value="Guasave">Guasave</option>
                                                <option value="Los Mochis">Los Mochis</option>
                                                <option value="Navolato">Navolato</option>
                                            </select>
                                            <select id="Tabasco" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="TABMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Comalcalco">Comalcalco</option>
                                                <option value="Cunduacán">Cunduacán</option>
                                                <option value="Cárdenas">Cárdenas</option>
                                                <option value="Huimanguillo">Huimanguillo</option>
                                                <option value="Macuspana">Macuspana</option>
                                                <option value="Paraíso">Paraíso</option>
                                                <option value="Villahermosa">Villahermosa</option>
                                            </select>
                                            <select id="Tamaulipas" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="TAMMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Ciudad Madero">Ciudad Madero</option>
                                                <option value="Ciudad Victoria">Ciudad Victoria</option>
                                                <option value="Matamoros">Matamoros</option>
                                                <option value="Reynosa">Reynosa</option>
                                                <option value="Río Bravo">Río Bravo</option>
                                                <option value="Tampico">Tampico</option>
                                            </select>
                                            <select id="Tlaxcala" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="TLAMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Apizaco">Apizaco</option>
                                                <option value="Huamantla">Huamantla</option>
                                                <option value="Santa Ana Chiautempan">Santa Ana Chiautempan</option>
                                                <option value="Tlaxcala">Tlaxcala</option>
                                            </select>
                                            <select id="Veracruz" style="display: none; border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" onchange="DisplayTiendasInfo (this.options [this.selectedIndex].value)" name="VERMunicipios_select">
                                                <option selected="selected"> </option>
                                                <option value="Acayucan">Acayucan</option>
                                                <option value="Agua Dulce">Agua Dulce</option>
                                                <option value="Alvarado">Alvarado</option>
                                                <option value="Boca del Río">Boca del Río</option>
                                                <option value="Cardel">Cardel</option>
                                                <option value="Coatepec">Coatepec</option>
                                                <option value="Coatzacoalcos">Coatzacoalcos</option>
                                                <option value="Cosamaloapan">Cosamaloapan</option>
                                                <option value="Córdoba">Córdoba</option>
                                                <option value="Jalapa">Jalapa</option>
                                                <option value="Martínez de la Torre">Martínez de la Torre</option>
                                                <option value="Minatitlán">Minatitlán</option>
                                                <option value="Orizaba">Orizaba</option>
                                                <option value="Papantla">Papantla</option>
                                                <option value="Perote">Perote</option>
                                                <option value="Poza Rica">Poza Rica</option>
                                                <option value="San Andrés Tuxtla">San Andrés Tuxtla</option>
                                                <option value="Tierra Blanca">Tierra Blanca</option>
                                                <option value="Tuxpan">Tuxpan</option>
                                                <option value="Veracruz">Veracruz</option>
                                            </select>
                                        </p>
                                    </div>
                                </div>
	                            <div class="row">
	                                <div class="col-md-6 col-xs-12">
	                                    <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
	                                        Modelo
	                                    </div>
	                                    <p>
	                                        <input id="modelo" style="border-radius: 5px; border: 0px; height: 25px; width: 100%; background-color: #ffffff;" name="modelo" required type="text" placeholder="Modelo">
	                                    </p>
	                                </div>
	                                <div class="col-md-6 col-xs-12">
	                                    <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
	                                        Año
	                                    </div>
	                                    <p>
	                                        <input id="anio" style="border-radius: 5px; border: 0px; height: 25px; width: 100%; background-color: #ffffff;" name="anio" required type="number" placeholder="Año">
	                                    </p>
	                                </div>
	                            </div>
	                            <div class="row">
	                                <div class="col-md-6 col-xs-12">
	                                    <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
	                                        Tipo de Vehículo
	                                    </div>
	                                    <p>
	                                        <select id="tipoV" style="border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" name="tipoV">
	                                            <option selected="selected">Elige una Opción</option>
	                                            <option value="Maquinaria Pesada">Maquinaria Pesada</option>
	                                            <option value="Auto / Camioneta">Auto / Camioneta</option>
	                                            <option value="Motocicleta">Motocicleta</option>
	                                            <option value="Utilitarios">Utilitarios</option>
	                                        </select>
	                                    </p>
	                                </div>
	                                <div class="col-md-6 col-xs-12">
	                                    <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
	                                        Tipo de Factura
	                                    </div>
	                                    <p>
	                                        <select id="tipoF" style="border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" name="tipoF">
	                                            <option selected="selected">Elige una Opción</option>
	                                            <option value="Nacional">Nacional</option>
	                                            <option value="Refacturado">Refacturado</option>
	                                            <option value="Legalizado">Legalizado</option>
	                                        </select>
	                                    </p>
	                                </div>
	                            </div>
                                
                                



	                            <div class="row">
	                                <div class="col-md-6 col-xs-12">
	                                    <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
	                                        Modalidad de Empe&ntilde;o<br />
*Sujeto a disponibilidad de la zona
	                                    </div>
	                                    <p>
	                                        <select id="tipoF" style="border-radius: 5px; border: 0px; height: 25px; background-color: #ffffff; color: #000000; width: 100%;" name="tipoF">
	                                            <option selected="selected">Elige una Opción</option>
	                                            <option value="Fisico">F&iacute;sico</option>
	                                            <option value="Solo Documentos">Solo Documentos</option>
	                                        </select>
	                                    </p>
	                                </div>
	                            </div>





                                
                                
	                            <div class="row">
	                                <div class="col-md-3 col-xs-12" style="float: center;">
	                                    <div style="font-size: 14px; font-family: Helvetica; font-style: italic; font-weight: normal; text-align: left; color: #ffffff; padding-right: 25px;">
	                                    </div>
	                                </div>
	                                <div class="col-md-6 col-xs-12" style="float: left;">
	                                    <center>
	                                    <div  id="hover">
	                                        NIV<i class="fa fa-question-circle-o" style="margin-left:17px;"></i>
	                                    </div>
                                        <div id="stuff" style="color: #f9eb1a;">En tu tarjeta de circulación</div>
	                                    <p>
	                                        <input id="modalidad" style="border-radius: 5px; border: 0px; height: 25px; width: 100%; background-color: #ffffff;" name="modalidad" type="text" placeholder="(17 dígitos)">
	                                    </p>
	                                    </center>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                    <div style="background-color: #333399; text-align: center; padding-top: 2vw">
	                        <button type="submit" style="border-radius: 5px; border: 0px; height: 25px; background-color: #e40b13; color: #ffffff; width: 110px; padding: 0px 20px; text-align: center;">
	                            ENVIAR
	                        </button>
                            <br/><br/>

                            <a href="https://wa.link/2d9f37"><img class="links" src="img/EF_AjustesFormularioWeb_01whatsapp.png"></a>
	                    </div>
</form> 
     	            </div>
                </div>
                <div style="text-align: center; padding-top: 15px; padding-bottom: 15px; font-size: 10px; font-family: Helvetica; background: #333399;">
					<div><span style="color: #ffffff;">Aviso de privacidad</span></div>
					<div><a href="aviso-privacidad.html" style="color: #ffffff;">empenofacil.com/aviso-de-privacidad</a></div>
				</div>
        	</div>
        </div>
        </div>





        <?php
    }
    else {
?>
    <div class="">
        <div class="row">
        	<div class="col-md-7 col-xs-12" style="padding: 0px; float: left;">
        			<img src="<?php echo IMG168?>" alt="IMG168" style="width: 100%; min-height: 665px;">
        	</div>
        	<div class="col-md-5 col-xs-12" style="padding: 0px; float: left;">
	        	<div style="background-color: #333399;">
	            	<div style="font-size: 3.5vw; font-family: Helvetica; font-weight: bold; text-align: center; color: #ffffff; padding-top: 15px;">Gracias por registrarte </div>
	                <div style="padding-top: 15px; padding-bottom: 15px;font-size: 2.5vw; font-family: Helvetica; text-align: center; color: #ffffff;">en breve te llegará un correo con la información solicitada. Recuerda revisar tu carpeta de SPAM</div>
                </div> 

	                    <div style="background-color: #333399; text-align: center; padding-top: 2vw;">
	                        <center>

                                <a href="https://wa.link/pjjqp5"><img class="links" src="img/EF_AjustesFormularioWeb_01whatsapp.png"></a>
                                <a href="tel:800-364-7837"><img class="links" src="img/EF_AjustesFormularioWeb_02telefono.png"></a>     
                                <br/><br/>
                                <a href="empeno-auto.php" class="btn btn-lg regresar">
		                            REGRESAR
		                        </a>
	                    	</center>
	                    </div>

                <div style="text-align: center; padding-top: 15px; padding-bottom: 15px; font-size: 10px; font-family: Helvetica; background: #333399;">
					<div><span style="color: #ffffff;">Aviso de privacidad</span></div>
					<div><a href="aviso-privacidad.html" style="color: #ffffff;">empenofacil.com/aviso-de-privacidad</a></div>
				</div>
        	</div>
        </div>
    </div>
        
        <?php

        $nombreCompleto = $_POST['nombre_y_apellido'];
        $correo = $_POST['email'];
        $telefono = $_POST['telefono'];
        $estado = $_POST['tiendasEstado_select'];
        $municipio = $_POST['AGUMunicipios_select'].$_POST['CAMMunicipios_select'].$_POST['CHPMunicipios_select'].$_POST['CMXMunicipios_select'].$_POST['COAMunicipios_select'].$_POST['MEXMunicipios_select'].$_POST['GUAMunicipios_select'].$_POST['GROMunicipios_select'].$_POST['HIDMunicipios_select'].$_POST['JALMunicipios_select'].$_POST['MICMunicipios_select'].$_POST['MORMunicipios_select'].$_POST['NLEMunicipios_select'].$_POST['OAXMunicipios_select'].$_POST['PUEMunicipios_select'].$_POST['QUEMunicipios_select'].$_POST['ROOMunicipios_select'].$_POST['SLPMunicipios_select'].$_POST['SINMunicipios_select'].$_POST['TABMunicipios_select'].$_POST['TAMMunicipios_select'].$_POST['TLAMunicipios_select'].$_POST['VERMunicipios_select'];
        $modelo = $_POST['modelo'];
        $anio = $_POST['anio'];
        $tipoV = $_POST['tipoV'];
        $niv = $_POST['niv'];
        $tipoF = $_POST['tipoF'];
        $modalidad = $_POST['modalidad'];		
		
        $f = date("d/m/Y");

        $to = 'servicioalcliente@ezcorp.com';
       //$to .= '; ';
       //$to .= 'servicioalcliente@ezcorp.com';
        //$to .= ', ';
        //$to .= 'z.corona@ezqualo.com';
        //$to .= 'angel_angeles@ezcorp.com';

        $subject = 'Empeña tu Auto';

        $message = '
            <html>
                <head>
                    <h2>Datos Cliente:</h2>
                </head>
                <body>
                    <table>
                        <tr>
                            <td>Fecha:</td>
                            <td>'.$f.'</td>
                        </tr>
                        <tr>
                            <td>Nombre:</td>
                            <td>'.$nombreCompleto.'</td>
                        </tr>
                        <tr>
                            <td>Correo:</td>
                            <td>'.$correo.'</td>
                        </tr>
                        <tr>
                            <td>Telefono:</td>
                            <td>'.$telefono.'</td>
                        </tr>
                        <tr>
                            <td>Estado:</td>
                            <td>'.$estado.'</td>
                        </tr>
                        <tr>
                            <td>Municipio:</td>
                            <td>'.$municipio.'</td>
                        </tr>
                        <tr>
                            <td>Tipo de Vehículo:</td>
                            <td>'.$tipoV.'</td>
                        </tr>
                        <tr>
                            <td>Modelo:</td>
                            <td>'.$modelo.'</td>
                        </tr>
                        <tr>
                            <td>Año:</td>
                            <td>'.$anio.'</td>
                        </tr>
                        <tr>
                            <td>Tipo de Factura:</td>
                            <td>'.$tipoF.'</td>
                        </tr>
                        <tr>
                            <td>NIV:</td>
                            <td>'.$niv.'</td>
                        </tr>
                        <tr>
                            <td>Modalidad:</td>
                            <td>'.$modalidad.'</td>
                        </tr>						
                    </table>
                </body>
            </html>
            ';

        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8'."\r\n";

        $headers .= 'To: Empeño Fácil <'.$to.'>'."\r\n";
        $headers .= 'From: '.$correo.' <'.$correo.'>'."\r\n";
        $headers .= 'Bcc: cynthia_ordaz@ezcorp.com<cynthia_ordaz@ezcorp.com>'."\r\n";
        
        mail($to, $subject, $message, $headers);

        $to2 = $correo;

        $subject2 = 'Empeño auto ';

        $message2 = '
            <html>
                <head>
                    <title>Datos Cliente:</title>
                </head>
                <body>
                    <table>
                        <tr>
                            <td></td>
                            <td>'.$nombreCompleto.', gracias por Registrarte</td>
                        </tr>
                        <tr>
                            <img src="https://empenofacil.com/img/arte-empeno-facil/EF_Empen%CC%83odeautossindejarlo_13.jpg" style=" height: 100%; width: 100%;">
                        </tr>
                    </table>
                 Encuentra tu tienda más cercana en el siguiente vínculo<br><a href="https://empenofacil.com/nuestras-tiendas.html">https://empenofacil.com/nuestras-tiendas.html</a>
                </body>
            </html>
            ';

        $headers2 = 'MIME-Version: 1.0' . "\r\n";
        $headers2 .= 'Content-type: text/html; charset=utf-8'."\r\n";

        $headers2 .= 'To: '.$correo.' <'.$correo.'>'."\r\n";
        $headers2 .= 'From: Empeño Fácil <sistemas@empenofacil.com>'."\r\n";
        
        mail($to2, $subject2, $message2, $headers2);

        ?>
            <!--  Barra Agradecimiento 
            <script type="text/javascript">
            function escrol()
            {
                window.scrollTo(0,document.body.scrollHeight + 1000);
                alert ("Gracias por registrarte, en breve te llegará un correo con la información solicitada. Recuerda revisar tu carpeta de SPAM");
            }
            window.onload = escrol ();
            </script>-->
        <?php
    }
?>


        <!-- breadcrumb-end -->
        	<div class="row">	</div>
<div style="background-color: #ffffff;">

	    <div style="background-color: #e31017;">
	        <br>
	        <p style="color: #ffffff; text-align: center; font-size: 5vw; padding: 2vw;"><span class="texto-negrita">ES MUY</span></p>
	    </div>
        
	<div class="container" style="background-color: #ffffff;">
	    <div class="row">
	        <div>
                <div class="col-md-3 col-xs-3" style="float: left;">
                    <section style="margin-top: 20px; margin-bottom: 20px; display: flex; flex-grow: 1; justify-content: center; flex-direction: column;">
                        <div style="text-align: center; border-bottom: 10px solid #020084; width: 200px; align-self: center; font-family: Helvetica; color: #020084; font-size: 3vw; font-weight: bold; text-line">CÓMODO</div>
                        <div style="margin-top: 10px; text-align: center;  align-self: center; font-family: Helvetica; color: #020084; font-size: 15px;">Tasas preferenciales dependiendo del monto.<br>Refrendos ilimitados.<br>Entre más solicitas, menos pagas.<br>Recupéralo cuando lo desees.</div>
                    </section>
                </div>
                <div class="col-md-3 col-xs-3" style="float: left;">
                    <section style="margin-top: 20px; margin-bottom: 20px; display: flex; flex-grow: 1; justify-content: center; flex-direction: column;">
                        <div style="text-align: center; border-bottom: 10px solid #020084; width: 200px; align-self: center; font-family: Helvetica; color: #020084; font-size: 3vw; font-weight: bold;">SEGURO</div>
                        <div style="margin-top: 10px; text-align: center;  align-self: center; font-family: Helvetica; color: #020084; font-size: 15px;">El vehículo quedará en nuestras instalaciones,<br>seguro ante accidentes.</div>
                    </section>
                </div>
	            <div class="col-md-3 col-xs-3" style="float: left;">
	                <section style="margin-top: 20px; margin-bottom: 20px; display: flex; flex-grow: 1; justify-content: center; flex-direction: column;">
	                    <div style="text-align: center; border-bottom: 10px solid #020084; width: 200px; align-self: center; font-family: Helvetica; color: #020084; font-size: 3vw; font-weight: bold;">RÁPIDO</div>
	                    <div style="margin-top: 10px; text-align: center;  align-self: center; font-family: Helvetica; color: #020084; font-size: 15px;">Cotización inmediata.</div>
	                </section>
                </div>
	            <div class="col-md-3 col-xs-3" style="float: left;">
	                <section style="margin-top: 20px; margin-bottom: 20px; display: flex; flex-grow: 1; justify-content: center; flex-direction: column;">
	                    <div style="text-align: center; border-bottom: 10px solid #020084; width: 200px; align-self: center; font-family: Helvetica; color: #020084; font-size: 3vw; font-weight: bold;">FÁCIL</div>
	                    <div style="margin-top: 10px; text-align: center; align-self: center; font-family: Helvetica; color: #020084; font-size: 15px;">Sin revisar Buró de Crédito, cargos por<br>investigación ni aval.<br>No importan adeudos de tenencia,<br>verificación, etc.</div>
	                </section>
	            </div>
	        </div>
	    </div>
	</div>
	<div class="container">
	    <div class="row">
	        <div style="background-color: #ffffff; text-align: center; font-size: 0.8vw; color: #040d82; padding-top: 2.5vw;">
	            1El avalúo del vehículo y el porcentaje del préstamo dependerán del modelo, condiciones mecánicas y de conservación. Requisitos: factura, en caso de ser refacturado copia de la factura de origen, identificación oficial, tarjeta de circulación; para vehículos legalizados se requiere adicionalmente el título de propiedad y el pedimento de importación. Otros requisitos pueden aplicar dependiendo de la revisión de los documentos.
	        </div>
	    </div>
	</div>
</div>



        <!-- AUTOS start -->
    <!-- img -->
    <div class="">
      <img src="<?php echo IMG021?>" alt="IMG021" style="height: 100%; width: 100%;">
    </div>
    <!-- white -->
    <div style="background-color: #ffffff; text-align: center; padding: 3.5vw;">
        <p style="line-height: 1.8; font-size: 3.5vw; color: #000000; font-weight: bold;"> TE PRESTAMOS EFECTIVO DE FORMA  RÁPIDA, FÁCIL Y SEGURA AL EMPEÑAR TU AUTO
        <br>    
    </div>
    <!-- 1/2 blue, img, white sections End -->

    <!-- Íconos con texto START-->
<div style="background-color: #333399;">
<section style="background-color: #333399;">
    <div class="container" style="background-color: #333399;">
        <div style="text-align: center; padding-top: 50px; color: #ffffff; background-color: #333399;">
            <div class="row">
                <div class="col-md-3 col-xs-3" style="float: left; background-color: #333399;">
                        <center><div style="max-width: 200px;text-align: center; font-family: Helvetica; font-size: 2vw;color: #ffffff;">
                            <img src="<?php echo IMG068?>" alt="IMG068" style="height: 100%; width: 100%;">
                        </div></center>
                </div>
                <div class="col-md-3 col-xs-3" style="float: left; background-color: #333399;">
                        <center><div style="max-width: 200px; text-align: left; font-family: Helvetica; font-size: 1.5vw; color: #ffffff; background-color: #333399;">
                            <span style="font-size: 1.2vw;">
                                <strong style="font-size: 2vw;">FÁCIL</strong>
                                <br>• Sin necesidad de dejar el vehículo en depósito.
                                <br>• Sin checar Buro de Crédito.
                                <br>• Sin cargos por investigación.
                                <br>• Sin aval.
                                <br>• No importa que tengas adeudos de tenencia, refrendo, verificación, etc.
                            </span>
                        </div></center>
                </div> 
                <div class="col-md-3 col-xs-3" style="float: left; background-color: #333399;">
                        <center><div style="max-width: 200px; text-align: center; font-family: Helvetica; font-size: 2vw; color: #ffffff; background-color: #333399;">
                            <img src="<?php echo IMG026?>" alt="IMG026" style="height: 100%; width: 100%;">
                        </div></center>
                </div>        
                <div class="col-md-3 col-xs-3" style="float: left; background-color: #333399;">
                        <center><div style="max-width: 200px; text-align: left; font-family: Helvetica; font-size: 1.5vw; color: #ffffff; background-color: #333399;">
                            <span style="font-size: 1.2vw;">
                                <strong style="font-size: 2vw;">RÁPIDO</strong>
                                <br>• Cotización inmediata a tu solicitud.
                                <br>• El porcentaje de préstamos más alto del mercado.
                                <p style="color: #333399;">•</p>
                                <p style="color: #333399;">•</p>
                                <p style="color: #333399;">•</p>
                                <p style="color: #333399;">•</p>
                            </span>
                        </div></center>
                </div>
            </div>
            <div class="row" style="padding-top: 3vw;">
                <div class="col-md-3 col-xs-3" style="float: left; background-color: #333399;">
                         <center><div style="max-width: 200px; text-align: center; font-family: Helvetica; font-size: 2vw; color: #ffffff; background-color: #333399;">
                           <img src="<?php echo IMG027?>" alt="IMG027" style="height: 100%; width: 100%;">
                        </div></center>
                </div>
                <div class="col-md-3 col-xs-3" style="float: left; background-color: #333399;">
                        <center><div style="max-width: 200px; text-align: left; font-family: Helvetica; font-size: 1.5vw; color: #ffffff; background-color: #333399;">
                            <span style="font-size: 1.2vw;">
                                <strong style="font-size: 2vw;">SEGURO</strong>
                                <br>• Todos los trámites se realizan en cualquiera de nuestras más de 270 sucursales y están supervisados por nuestro equipo de abogados.
                                <br>• Si lo solicita, su vehículo quedará depositado en nuestras instalaciones y asegurado ante cualquier incidente.
                            </span>
                        </div></center>
                </div>
                <div class="col-md-3 col-xs-3" style="float: left; background-color: #333399;">
                         <center><div style="max-width: 200px; text-align: center; font-family: Helvetica; font-size: 2vw; color: #ffffff; background-color: #333399;">
                           <img src="<?php echo IMG031?>" alt="IMG031" style="height: 100%; width: 100%;">
                        </div></center>
                </div>        
                <div class="col-md-3 col-xs-3" style="float: left; background-color: #333399;">
                        <center><div style="max-width: 200px; text-align: left; font-family: Helvetica; font-size: 1.5vw; color: #ffffff; background-color: #333399;">
                            <span style="font-size: 1.2vw;">
                                <strong style="font-size: 2vw;">CÓMODO</strong>
                                <br>• Dispondrás de hasta el 80% de la valuación de tu auto o hasta el 76% de tu moto dependiendo el modelo.
                                <br>• Tasas preferenciales, dependiendo del monto.
                                <br>• Entre más solicitas, menos pagas.
                                <br>• Refrendos ilimitados.
                                <br>• Recupera tu garantía (auto o factura) en el momento que desees.
                                <br><br><br><br>
                            </span>
                        </div></center>
                </div>
            </div>
</section>  
</div>
    
<div>
     <div class="row">    
     . 
     </div>
        <div class="" style="background-color: #ffffff; padding-left: 80px; padding-right: 80px; padding-top: 80px; padding-bottom: 80px;">
            <div class="container" style="text-align: center; font-size: 3.5vw; color: #333399; font-weight: bold;">
                VEHÍCULOS RECIBIDOS
                <br><br>
            </div>
                <div class="row">
                    <div class="col-xl-6 col-md-6">
                        <div class="single-service">
                            <h3 style="font-size: 3vw;line-height: 1.0;">¿Qué vehículos puedo empeñar?</h3>
                            <p style="font-size: 2vw;line-height: 1.2;">
                                Recibimos vehículos (coches, jeeps, camionetas, camiones, motos, maquinaria o embarcación) de uso partícular o público (taxis) con factura original, refacturados y legalizados hasta con 20 años de antigüedad.
                                <br>Servicio a Personas Físicas y Morales.
                                <br>*El empeño de motos está sujeto a requisitos específicos.
                                <br><br>
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                        <div class="single-service">
                            <h3 style="font-size: 3vw;line-height: 1.2;">¿Qué opciones tengo para empeñar?</h3>
                            <p style="font-size: 2vw;">
                                <span style="font-weight: bold;line-height: 1.2;">Empeño tradicional</span>
                                <span style="line-height: 1.2;">Dejas en garantía el vehículo y los documentos que acreditan su propiedad.</span>
                                <br> <br>
                                <span style="font-weight: bold;line-height: 1.2;">Empeño de factura</span>
                                <span style="line-height: 1.2;">Recibes tu préstamo y te llevas tu vehículo.</span>
                                <br><br>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6 col-md-6">
                        <div class="single-service">
                            <h3 style="font-size: 3vw;line-height: 1.2;">Pasos A Seguir</h3>
                            <p style="font-size: 2vw;line-height: 1.2;">
                                1- Presenta tus documentos y vehículo en la sucursal más cercana.
                                <br><br>2- Solicita cotización de préstamo con el depósito de la unidad o sólo por la factura.
                                <br><br>
                            </p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6">
                        <div class="single-service">   
                            <h3 style="font-size: 3vw;"></h3>  
                            <p style="font-size: 2vw;line-height: 1.2;"> 
                                <br><br>
                                3- Se realiza valuación del vehículo, revisión física y verificación de los documentos por nuestro Departamento Legal.
                                <br><br style="line-height: 1.2;">4- Llévate el dinero que necesitas. 
                                <br><br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
<div class="container">
    <div style="text-align: center; color: #ffffff; font-size: 3.5vw; padding-top: 50px;">REQUISITOS</div>
    <div style="text-align: center; padding-top: 50px; color: #ffffff; background-color: #333399;">
        <div class="row">
            <div class="col-md-6 col-xs-6" style="float: left;">
                    <center><div style="max-width: 200px;text-align: center; font-family: Helvetica; font-size: 18px;color: #ffffff;">
                        <img src="<?php echo IMG028?>" alt="IMG028" style="height: 100%; width: 100%;">
                    </div></center>
            </div>
            <div class="col-md-6 col-xs-6" style="float: left;">
                    <center><div style="max-width: 200px;text-align: center; font-family: Helvetica; font-size: 18px;color: #ffffff;">
                        <img src="<?php echo IMG029?>" alt="IMG029" style="height: 100%; width: 100%;">
                    </div></center>
            </div> 
        </div>
        <div class="row">
            <div class="col-md-6 col-xs-6" style="float: left;">
                    <center><div style="max-width: 200px; font-family: Helvetica; font-size: 13px;color: #ffffff; text-align: left;">
                        <span style="font-size: 1.2vw;"><br><br>
                            <center><strong style="font-size: 2vw;">NACIONALES</strong></center>
                            <br>• Tarjeta de circulación
                            <br>• Identificación oficial (INE, pasaporte, cédula profesional)
                            <br>• Tenencias*
                            <br>• Verificación*
                            <br>• Factura original
                            <br><br>
                       </span>
                    </div></center>
            </div>        
            <div class="col-md-6 col-xs-6" style="float: left;">
                    <center><div style="max-width: 200px;text-align: left; font-family: Helvetica; font-size: 13px;color: #ffffff;">
                        <span style="font-size: 1.2vw;"><br><br>
                            <center><strong style="font-size: 2vw;">REFACTURA</strong></center>
                            <br>• Copia de la factura de origen
                            <br>• Refactura original
                            <br>• Identificación oficial (INE, pasaporte, cédula profesional)
                            <br>• Tenencias*
                            <br>• Verificación*
                            <br><br>
                       </span>
                    </div></center>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-xs-6" style="float: left;">
                     <center><div style="max-width: 200px;text-align: center; font-family: Helvetica; font-size: 18px;color: #ffffff;">
                       <img src="<?php echo IMG030?>" alt="IMG030" style="height: 100%; width: 100%;">
                    </div></center>
            </div>
            <div class="col-md-6 col-xs-6" style="float: left;">
                    <center><div style="max-width: 200px;text-align: center; font-family: Helvetica; font-size: 18px;color: #ffffff;">
                        <img src="<?php IMG020?>" alt="IMG020" style="height: 100%; width: 100%;">
                    </div></center>
            </div> 
        </div>
        <div class="row">
            <div class="col-md-6 col-xs-6" style="float: left;">
                     <center><div style="max-width: 200px;text-align: left; font-family: Helvetica; font-size: 13px;color: #ffffff;">
                        <span style="font-size: 1.2vw;"><br><br>
                            <center><strong style="font-size: 2vw;">LEGALIZADOS</strong></center>
                            <br>• Título de propiedad
                            <br>• Pedimento
                            <br>• Factura del importador (cuando aplique)
                            <br>• Tarjeta de circulación
                            <br>• Identificación oficial (INE, pasaporte, cédula profesional)
                            <br>• Tenencias*
                            <br>• Verificación*
                            <br><br>
                       </span>
                    </div></center>
            </div>        
            <div class="col-md-6 col-xs-6" style="float: left;">
                    <center><div style="max-width: 200px;text-align: left; font-family: Helvetica; font-size: 13px;color: #ffffff;">
                        <span style="font-size: 1.2vw;"><br><br>
                            <center><strong style="font-size: 2vw;">SOLO FACTURA</strong></center>
                            <br>• Antigüedad no mayor a 10 años
                            <br>• Factura original, refactura o documentos de importación (según aplique)
                            <br>• Tarjeta de circulación
                            <br>• Identificación oficial (INE, pasaporte, cédula profesional)
                            <br>• Tenencias*
                            <br>• Verificación*
                            <br>• Comprobante de domicilio (no mayor a 3 meses)
                            <br>• 3 referencias (nombre y teléfono)
                            <br>• Copia de llave
                            <br><br>
                       </span>
                    </div></center>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-12" style="float: left;"></div>
            <div class="col-md-4 col-xs-12" style="float: left;">
                    <center><div style="max-width: 200px;text-align: center; font-family: Helvetica; font-size: 18px;color: #ffffff;">
                        <img src="<?php echo IMG169?>" alt="IMG169" style="height: 100%; width: 100%;">
                    </div></center>
            </div> 
            <div class="col-md-4 col-xs-12" style="float: left;"></div>
        </div>
        <div class="row">
            <div class="col-md-4 col-xs-12" style="float: left;"></div>
            <div class="col-md-4 col-xs-12" style="float: left;">
                <center><div style="max-width: 200px;text-align: left; font-family: Helvetica; font-size: 13px;color: #ffffff;">
                    <span style="font-size: 1.2vw;"><br><br>
                        <center><strong style="font-size: 2vw;">Requisitos (Motos)</strong></center>
                        <br>• Factura original a nombre del cliente
                        <br>• Tarjeta de circulación
                        <br>• INE vigente del cliente
                        <br>• Endoso de la factura a favor de quien empeña
                        <br>• El vehículo debe quedarse en la tienda
                        <br><br>
                    </span>
                </div></center>
            </div>
            <div class="col-md-4 col-xs-12" style="float: left;"></div>
        </div>
    </div>
        <div class="col-md-12 col-xs-12" style="float: left; height: 100px;"></div>
        <div>
            <span style="color: #ffffff; font-size: 1vw;">
                El avalúo del vehículo y el porcentaje del préstamo dependerán del modelo, condiciones mecánicas y de conservación. Requisitos: factura (en caso de ser refacturado, tener copia de la factura de origen, identificación oficial, tarjeta de circulación. Para vehículos legalizados, se requiere adicionalmente el título de propiedad y el pedimento de importación). Otros requisitos pueden aplicar dependiendo de la revisión de los documentos. Pueden aplicar otros documentos dependiendo del vehículo.
                <hr style="border: 10px solid #333399;">
            </span>
         </div>
</div>  
</div>
 
   <script type="text/javascript">
        function ShowHideMunicipios (selectID)
        {
            var aguMunicipios = document.getElementById ('Aguascalientes');
            aguMunicipios.style.display = "none";
            var camMunicipios = document.getElementById ('Campeche');
            camMunicipios.style.display = "none";
            var chpMunicipios = document.getElementById ('Chiapas');
            chpMunicipios.style.display = "none";
            var cmxMunicipios = document.getElementById ('Ciudad de México');
            cmxMunicipios.style.display = "none";
            var coaMunicipios = document.getElementById ('Coahuila');
            coaMunicipios.style.display = "none";
            var mexMunicipios = document.getElementById ('Estado de México');
            mexMunicipios.style.display = "none";
            var guaMunicipios = document.getElementById ('Guanajuato');
            guaMunicipios.style.display = "none";
            var groMunicipios = document.getElementById ('Guerrero');
            groMunicipios.style.display = "none";
            var hidMunicipios = document.getElementById ('Hidalgo');
            hidMunicipios.style.display = "none";
            var jalMunicipios = document.getElementById ('Jalisco');
            jalMunicipios.style.display = "none";
            var micMunicipios = document.getElementById ('Michoacán');
            micMunicipios.style.display = "none";
            var morMunicipios = document.getElementById ('Morelos');
            morMunicipios.style.display = "none";
            var nleMunicipios = document.getElementById ('Nuevo León');
            nleMunicipios.style.display = "none";
            var oaxMunicipios = document.getElementById ('Oaxaca');
            oaxMunicipios.style.display = "none";
            var pueMunicipios = document.getElementById ('Puebla');
            pueMunicipios.style.display = "none";
            var queMunicipios = document.getElementById ('Querétaro');
            queMunicipios.style.display = "none";
            var rooMunicipios = document.getElementById ('Quintana Roo');
            rooMunicipios.style.display = "none";
            var slpMunicipios = document.getElementById ('San Luis Potosí');
            slpMunicipios.style.display = "none";
            var sinMunicipios = document.getElementById ('Sinaloa');
            sinMunicipios.style.display = "none";
            var tabMunicipios = document.getElementById ('Tabasco');
            tabMunicipios.style.display = "none";
            var tamMunicipios = document.getElementById ('Tamaulipas');
            tamMunicipios.style.display = "none";
            var tlaMunicipios = document.getElementById ('Tlaxcala');
            tlaMunicipios.style.display = "none";
            var verMunicipios = document.getElementById ('Veracruz');
            verMunicipios.style.display = "none";


            var selectToShow = document.getElementById (selectID);
            if(selectToShow != null){
                selectToShow.style.display = "initial";
            }
        }
        </script>

  <?php 
        include("_pie.php");
  ?>

         
       

    