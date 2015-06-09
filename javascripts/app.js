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
		$('.event-1, .events-wrap').addClass('active');
	}
});
