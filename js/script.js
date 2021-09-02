$(function() {

	$('.navbar-toggler').click(function() {
		$('.navbar-mobile').addClass('klik');
	});

	$('.close-button').click(function() {
		$('.navbar-mobile').removeClass('klik');
	});

	$('.page-scroll').click(function(){
		var href = $(this).attr('href');

		var elemenHref = $(href);

		$("html").animate({
			scrollTop: elemenHref.offset().top
		}, 500, "swing");
	});

});