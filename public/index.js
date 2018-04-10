$('#sobre-mi').click(function(event) {
	$('html, body').animate({
	    scrollTop: $("#yo").offset().top
	}, 1500);
});

$('#scroll-certi').click(function(event) {
	$('html, body').animate({
	    scrollTop: $("#certificaciones").offset().top
	}, 1500);
});

$('#scroll-portafolio').click(function(event) {
	$('html, body').animate({
	    scrollTop: $("#portafolio").offset().top
	}, 1500);
});

$('#scroll-contacto').click(function(event) {
	$('html, body').animate({
	    scrollTop: $("#contactame").offset().top
	}, 1500);
});

$('#scroll-up').click(function(event) {
	$('html, body').animate({
	    scrollTop: $("#header").offset().top
	}, 1500);
});

$(function (){
	$(window).resize(function(){
		let ancho = $(window).width()
		if (ancho > 780) {
			$('#caja-flotante').css('visibility','hidden')
		}else {
			$('#caja-flotante').css('visibility','visible')
		}

	})

})


$(function (){
	$(window).resize(function(){
		let ancho = $(window).width()
		if (ancho > 400) {
			$('#scroll-up').css('font-size','50px')
		}else {
			$('#caja-flotante').css('visibility','visible')
		}

	})

})

let ancho = $(window).width()

if (ancho > 400) {
		$('#scroll-up').css('font-size','50px')
}

if (ancho > 780) {
	$('#caja-flotante').css('visibility','hidden')
}else {
	('#caja-flotante').css('visibility','visible')
}






$(function() {
  $(window).scroll(function() {
  	var scroll = $(window).scrollTop() > 80;
	if ($(window).scrollTop() > 80) {
  		$("#caja-flotante").fadeIn();//.fadeOut();
	}else {
  		$("#caja-flotante").fadeOut();//.fadeIn();
	}

  });
});