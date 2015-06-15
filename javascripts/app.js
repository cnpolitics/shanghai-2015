/* global $, FastClick */
$(function() {
    FastClick.attach(document.body);
});

var winWidth;
$(function() { winWidth = $(window).width(); });
$(window).on('resize', function() {
	winWidth = $(window).width();
	//console.log(winWidth);
});
