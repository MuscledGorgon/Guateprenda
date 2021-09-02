function selectpaises() {
	var clave = $("#selectpaisesid").val();
	$.ajax({
		url: "select.ajax.php",
		method: "POST",
		data: {
			"id":clave
		},
		success: function(respuesta){	
		
		console.log(respuesta);		
			
			$("#selectestado").attr("disabled", false);
			$("#selectestado").html(respuesta);
		}
	})
}


function selectsucursales() {
	var clavedos = $("#selectestado").val();
	$.ajax({
		url: "select.ajax2.php",
		method: "POST",
		data: {
			"iddos":clavedos
		},
		success: function(respuestados){
			
			console.log(respuestados);
			
			
			$("#selectsucursalesid").attr("disabled", false);
			$("#selectsucursalesid").html(respuestados);
		}
	})
}

//DESDE AQU DOS

function selectpaisesDOS() {
	var clave = $("#selectpaisesid1").val();
	$.ajax({
		url: "select.ajax_dos.php",
		method: "POST",
		data: {
			"id":clave
		},
		success: function(respuesta){	
		
		console.log(respuesta);		
			
			$("#selectestado1").attr("disabled", false);
			$("#selectestado1").html(respuesta);
		}
	})
}


function selectsucursalesDOS() {
	var clavedos = $("#selectestado1").val();
	$.ajax({
		url: "select.ajax2_dos.php",
		method: "POST",
		data: {
			"iddos":clavedos
		},
		success: function(respuestados){
			
			console.log(respuestados);
			
			
			$("#selectsucursalesid1").attr("disabled", false);
			$("#selectsucursalesid1").html(respuestados);
		}
	})
}