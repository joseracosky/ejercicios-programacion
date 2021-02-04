$(document).ready(function(){

	$("h1").html("etiqueta h1");
	$('.display-4').html('desde clase');
	$('#idh1').html('desde id');

	document.querySelector('h1').innerHTML = 'etiqueta h1';

	$('.container h1').html('cambio de texto');
	$('.container h1:first').html('cambio de texto');   
	$('#idh1').addClass('text-danger');
	$('#idh1').removeClass('display-4');
	$('#contenido').append('<h1>elemento al final<h1>');
	$('#contenido').prepend('<h1>elemento al principio <h1>');
	$('#color-azul').css('color','blue');
	$('#color-azul').css({color:'blue',background:'salmon',padding:'20px'});
	$('#color-azul').remove();
	$('#color-azul').hide();
	$('img').attr('src','https://www.adslzone.net/app/uploads/2019/04/borrar-fondo-imagen.jpg');
	$('img:last').attr('width','50px');
	var parrafo = $('#resultado p');
	$('.btn-primary').click(function(){
		parrafo.addClass('display-4');
	})
	$('.btn-danger').click(function(){
		parrafo.removeClass('display-4');
	})
	$('.btn-warning').click(function(){
		parrafo.toggleClass('display-4');
	})

	$('#formulario').submit(function(evento){
		evento.preventDefault();
		var nombre=$('#nombre').val();
		console.log(nombre);
	})

});