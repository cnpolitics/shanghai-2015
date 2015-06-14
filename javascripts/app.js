/* global $, FastClick */
$(function() {
    FastClick.attach(document.body);
});

/* Switch pressing effect for touch device. */
$('button, a').on('touchstart', function() {
	$(this).addClass('pressing');
	
	$('button, a').on('touchend', function() {
		$(this).removeClass('pressing');
	});
});

var winWidth;
$(function() { winWidth = $(window).width(); });
$(window).on('resize', function() {
	winWidth = $(window).width();
	//console.log(winWidth);
});
