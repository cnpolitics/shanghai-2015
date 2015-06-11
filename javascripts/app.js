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

$('.event-1 header').click(function() {
	if ($('.event-1').hasClass('active')) {
		$('.event-1, .events-wrap').removeClass('active');
	} else {
		if ($('.events-wrap').hasClass('active')) {
			$('.card-wrap.active').removeClass('active');
		}
		$('.event-1, .events-wrap').addClass('active');
	}
});

$('.event-2 header').click(function() {
	if ($('.event-2').hasClass('active')) {
		$('.event-2, .events-wrap').removeClass('active');
	} else {
		if ($('.events-wrap').hasClass('active')) {
			$('.card-wrap.active').removeClass('active');
		}
		$('.event-2, .events-wrap').addClass('active');
	}
});
