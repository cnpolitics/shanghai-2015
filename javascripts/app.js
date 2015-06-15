/* global $, FastClick */
$(function() {
    FastClick.attach(document.body);
});

var winWidth, winHeight;
$(function() {
	winWidth = $(window).width();
	winHeight = $(window).height();
});
$(window).on('resize', function() {
	winWidth = $(window).width();
	winHeight = $(window).height();
	//console.log(winWidth);
});

var isMQQBrowser;
$(function() {
	isMQQBrowser = navigator.userAgent.match(/MQQBrowser/i);
});

// Fix the positioning. (`calc()` issue)
$(function() {
	if (winWidth < 960 && isMQQBrowser) {
		$('.hero .logo').css({
			'top': (winHeight - 240) + 'px'
		});
	}
});
