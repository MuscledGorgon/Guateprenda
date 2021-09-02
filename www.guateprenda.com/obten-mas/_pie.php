<?php


?>


<!-- footer- --> 

    <footer class="footer-area " style="background-color: #333399;">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-sm-6 col-md-3 col-xl-4">
                    <div class="single-footer-widget footer_1" style="padding-left: 2vw;">
                        <a href="index.html"> <img src="<?php echo IMG002?>" alt="IMG002" style=" height: 100%; width: 100%;"> </a>
                        <p style="font-size: 10px; color: #ffffff; padding-right: 2vw;">En EZPAWN MANAGEMENT MÉXICO S. DE R.L. DE C.V. ("EZPAWN") nos comprometemos a proteger su privacidad por el uso y recopilación de datos, por lo que al utilizar lo servicios de la empresa, usted acepta las prácticas de recopilación y uso de información descrita en el aviso de privacidad.</p>

                    </div>
                </div>

                <div class="col-sm-6 col-md-2 col-xl-2">
                    <div class="single-footer-widget">                        
                        <ul >
                            <li><a href="https://www.banxico.org.mx/CAT/Explicaciones.html" target="_blank" style="font-size: 10px; color: #ffffff;">¿QUÉ ES EL CAT Y CÓMO SE CALCULA?</a></li>
                            <li><a href="https://www.banxico.org.mx/CAT/Calculo_CAT.jsp" target="_blank" style="font-size: 10px; color: #ffffff;">CALCULADORA DE CAT</a></li>
                            <li><a href="contrato-profeco.html" target="_blank" style="font-size: 10px; color: #ffffff;">CONTRATO REGISTRADO ANTE PROFECO</a></li>
                            <li><a href="https://rpce.profeco.gob.mx/casa_empeno.php" target="_blank" style="font-size: 10px; color: #ffffff;">REGISTRO PÚBLICO DE CASAS DE EMPEÑO</a></li>
                        </ul>

                    </div>
                </div>
                <div class="col-sm-6 col-md-2 col-xl-2">
                    <div class="single-footer-widget">                       
                        <ul>
                            <li><a href="formato-arco.html" target="_blank" style="font-size: 12px; color: #ffffff;">FORMATO SOLICITUD ARCO</a></li>
                            <li><a href="https://www.evaluatest.com/empenofacil/evaluate/IUEvaluacion/EmpenoFacilBolsaTrabajo.asp" target="_blank" style="font-size: 12px; color: #ffffff;">Bolsa de Trabajo</a></li>
                            <li><a href="terminos-condiciones.html" target="_blank" style="font-size: 12px; color: #ffffff;">Condiciones</a></li>
                            <li><a href="mailto:servicioalcliente@ezcorp.com" style="font-size: 12px; color: #ffffff;">servicioalcliente<br>@ezcorp.com</a></li>
                            <li><a href="aviso-privacidad.html" target="_blank" style="font-size: 12px; color: #ffffff;">Aviso de Privacidad</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-6 col-md-3 col-xl-3">
                    <div class="single-footer-widget footer_icon">                        
                        <div class="office-location">
                            <ul>
                                <li>
                                    <strong style="font-size: 12px; color: #ffffff;">© EMPEÑO FÁCIL, 2017</strong>
                                    <p style="font-size: 12px; color: #ffffff;"><a href="tel:800-364-7837" style="color: #ffffff;">800-364-7837</a><br>
                                        L a V de 9:00 a 18:00 horas.</p>
                                </li>
                                <li>
                                    <p style="font-size: 12px; color: #ffffff;">Oficina Principal: Fray Luis de León 8002, Piso 3, Col. <br>
                                        Colinas del Cimatario, Querétaro, Qro. 76090.</p>
                                    <div class="social-links">
                                        <ul>
                                            <center><li><a href="https://www.facebook.com/EmpenoFacilMexico" target="_blank"><i class="fa fa-facebook" style="color: #ffffff"></i></a></li></center>                                      
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- footer-end -->

    <!-- JS here -->
    <script src="js/vendor/modernizr-3.5.0.min.js"></script>
    <script src="js/vendor/jquery-1.12.4.min.js"></script>
    
 <!--    <script src="js/popper.min.js"></script> -->
   <!--  <script src="js/bootstrap.min.js"></script> -->
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/isotope.pkgd.min.js"></script>
    <script src="js/ajax-form.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/jquery.counterup.min.js"></script>
    <script src="js/imagesloaded.pkgd.min.js"></script>
    <script src="js/scrollIt.js"></script>
    <script src="js/jquery.scrollUp.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/nice-select.min.js"></script>
    <script src="js/jquery.slicknav.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/plugins.js"></script>

    <script src="//www.findberry.com/search/js/jquery.min.js" type="text/javascript"></script>
    <script src="//www.findberry.com/search/js/findberryfx.js" type="text/javascript"></script>
    <script src="//www.findberry.com/search/js/findberry.framebox.js" type="text/javascript"></script>

    <!--contact js-->
    <script src="js/contact.js"></script>
    <script src="js/jquery.ajaxchimp.min.js"></script>
    <script src="js/jquery.form.js"></script>
    <script src="js/jquery.validate.min.js"></script>

    <script src="js/main.js"></script>
    <script type='text/javascript' src='js/map3.js'></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnNIO6fzGWXpFGe8OjhOII5SIIRWI6jiw&callback=initMap" async defer></script>

   
 

 <script >
    var error=0;
    var isArticulo=false
    
    $("#ventaEsp").click(function(){        
        window.location.href = '/ventas-especiales.php';
    });
      
    $("#link_vacaciones").click(function(){        
        window.location.href = '/blog.php';
    });
   
    $("#link_dondepagar").click(function(){
      window.location.href='/donde-pagar.php';
     });


function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test( $email );
}



    function validacion(){

      var cuanto=$("#cuanto").val();
      var articulo=$("#articulo").val();
      var marca=$("#marca").val();
      var modelo=$("#modelo").val();
      var capacidad=$("#capacidad").val();
      var nombre=$("#nombre_completo").val();
      var telefono=$("#telefono").val();
      var correo=$("#correo").val();
      var estado=$("#idestado_cotizador").text();
      var municipio=$("#idmunicipio_cotizador").text();
      var tienda=$("#tienda").val();
      
      
      if(cuanto.length==0 || $.isNumeric(cuanto)==false){
        $("#cuanto").css({border:"solid 2px red"})
        $("#cuanto").focus()
        $("#cuanto").val('')
        $("#cuanto").attr("placeholder","Captura la cantidad que necesitas (solo números)")
        error=1
      }else{
        $("#cuanto").css({border:"solid 1px white"})
        error=0
      }
      if(articulo.length==0 && isArticulo==true){
        $("#articulo").css({border:"solid 2px red"})
        $("#articulo").focus()
        $("#articulo").attr("placeholder","Captura un artículo")
        error=1
      }else{
        $("#articulo").css({border:"solid 1px white"})
        error=0
      }
      if(marca.length==0 && isArticulo==false){
        $("#marca").css({border:"solid 2px red"})
        $("#marca").focus()
        $("#marca").attr("placeholder","Captura la marca")
        error=1
      }else{
        $("#marca").css({border:"solid 1px white"})
        error=0
      }
       
      if(nombre.length==0){
        $("#nombre_completo").css({border:"solid 2px red"})
        $("#nombre_completo").focus()
        $("#nombre_completo").attr("placeholder","Captura tu nombre completo")
        error=1
      }else{
        $("#nombre_completo").css({border:"solid 1px white"})
        error=0
      }
      if(telefono.length==0 || telefono.length!=10 || $.isNumeric(cuanto)==false){
        $("#telefono").css({border:"solid 2px red"})
        $("#telefono").val('')
        $("#telefono").focus()
        $("#telefono").attr("placeholder","Captura tu teléfono")
        error=1
      }else{
        $("#telefono").css({border:"solid 1px white"})
        error=0
      }
      if(correo.length==0 || !validateEmail(correo)){
        $("#correo").css({border:"solid 2px red"})
        $("#correo").val('')
        $("#correo").focus()
        $("#correo").attr("placeholder","Captura tu correo")
        error=1
      }else{
        $("#correo").css({border:"solid 1px white"})
        error=0
      }

      

      

      if(estado.length==0){
        $("#estado").css({border:"solid 2px red"})
        $("#estado").focus()
      }
      if(municipio.length==0){
        $("#municipio").css({border:"solid 2px red"})
        $("#municipio").focus()
      }



    }

    $("#get_dinero").click(function(){
      validacion()
      
      if(error==0){
       

          var cuanto=$("#cuanto").val();
          var articulo=$("#articulo").val();
          var marca=$("#marca").val();
          var modelo=$("#modelo").val();
          var capacidad=$("#capacidad").val();
          var nombre=$("#nombre_completo").val();
          var telefono=$("#telefono").val();
          var correo=$("#correo").val();
          var estado=$("#idestado_cotizador").text();
          var municipio=$("#idmunicipio_cotizador").text();
          var tienda=$("#tienda").val();
          
        
           $("#cotizador").submit();
      }
    })


 

    

    function MeQueda(x){
      
      var datos=x.split("|");

      validacion()
      $("#tiendasInfoContainer").hide()
      $("#tienda").show()
      
      $("#tienda").val(datos[0])
      $("#ubicacion").val(datos[1])


      $("#get_dinero").show()
    }

    $(document).ready(function(){


     


      $(".iconos_").click(function(e){    
        $(".completa").show()
        if(this.alt=='img_'){          
          $(".div_articulo_otro").hide()
          $(".div_articulo").show()
          isArticulo=true
        }else{
          $(".div_articulo").hide()
         $("#div_articulo_otro").show()
        }
      })

          $("#idestado_cotizador").change( function(){
            var estado=$("#idestado_cotizador").val();  
            var edo=$("#idestado_cotizador option:selected").text();  
            //cargarTodos();       
           $.get("/cotizador.php?estado="+ estado,
              function(resultado){
                if(resultado == false){
                    console.log("Error al buscar");
                }else{                         
                    //$("#tiendasInfoContainer").empty();
                    
                    $("#estadosx").val(edo)
                    $("#idmunicipio_cotizador option").remove();
                    $("#idmunicipio_cotizador").append(resultado);                          
                    $("#idmunicipio_cotizador").show();                    
                }
            });
          });



          $("#idmunicipio_cotizador").change( function(){
              var idmunicipio_cotizador=$("#idmunicipio_cotizador").val();              
              if(idmunicipio_cotizador!=0){              
                $.get("/cotizador.php?idmunicipio_cotizador="+ idmunicipio_cotizador,
                function(resultado){
                  if(resultado == false){
                      console.log("Error al buscar");
                  }else{                         
                      $("#tiendasInfoContainer").empty();
                      $("#tiendasInfoContainer").append(resultado);                          
                      $("#tiendasInfoContainer").show();
                      $("#tiendasInfoContainer").css({
                        height:"600px",
                        transition: "all 1s",
                      })

                      
                      $("footer").css({                                                
                        bottom:-700
                      })

                      $("body").css({"background-color": "#001689"})
                      validacion()
                  }
              });
            }          
          });

          function crearbtns(x){
            if(x!='btn_img1'){
              $("#btn_img1").attr("src","img/EF_AjustesFormularioWeb_iconos_01celular.png")
            }
            if(x!='btn_img2'){
              $("#btn_img2").attr("src","img/EF_AjustesFormularioWeb_iconos_02laptop.png")
            }
            if(x!='btn_img3'){
              $("#btn_img3").attr("src","img/EF_AjustesFormularioWeb_iconos_03tablet.png")
            }
            if(x!='btn_img4'){
              $("#btn_img4").attr("src","img/EF_AjustesFormularioWeb_iconos_04pantalla.png")
            }
            if(x!='btn_img5'){
              $("#btn_img5").attr("src","img/EF_AjustesFormularioWeb_iconos_05consola.png")
            }
            if(x!='btn_img6'){
              $("#btn_img6").attr("src","img/EF_AjustesFormularioWeb_iconos_06otro.png")
            }
            
          }

          $(".iconos_").click(function(e){
            
            crearbtns(this.id);              
            switch(this.id){
              case 'btn_img1':
                $(this).attr("src","img/EF_AjustesFormularioWeb_iconos_01celular_amarillo.png");
                $("#tipo").val('Celular')
              break;
              case 'btn_img2':
                $(this).attr("src","img/EF_AjustesFormularioWeb_iconos_02laptop_amarillo.png");
                $("#tipo").val('Laptop')
              break;
              case 'btn_img3':
                $(this).attr("src","img/EF_AjustesFormularioWeb_iconos_03tablet_amarillo.png");
                articulo_para='Tablet'
              break;
              case 'btn_img4':
                $(this).attr("src","img/EF_AjustesFormularioWeb_iconos_04pantalla_amarillo.png");
                $("#tipo").val('Pantalla')
              break;
              case 'btn_img5':
                $(this).attr("src","img/EF_AjustesFormularioWeb_iconos_05consola_amarillo.png");
                $("#tipo").val('Consola')
              break;
              case 'btn_img6':
                $(this).attr("src","img/EF_AjustesFormularioWeb_iconos_06otro_amarillo.png");
                $("#tipo").val('Otro')
              break;
              
            }

              
          })



    })
   

    </script>

    <!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '611610142906085');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=611610142906085&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
  
      <!-- Global site tag (gtag.js) - Google Analytics START -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-149370852-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-149370852-1');
</script>
    <!-- Global site tag (gtag.js) - Google Analytics END -->
  
  
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-159642387-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-159642387-1');
</script>
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8056039.js"></script>

<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '944671389367617');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=944671389367617&ev=PageView&noscript=1"
/></noscript>


<span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=o0L4BgHdnLr1CWntZIQ3qKmaeOXN4BbMUJdkfhlkJp4S3uhOQrfB9f6rFRqV"></script></span>
 
</body>
</html>