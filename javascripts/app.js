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
		$('.card-wrap.center').removeClass('center');
	} else {
		if ($('.events-wrap').hasClass('active')) {
			$('.card-wrap.active').removeClass('active');
			$('.card-wrap.center').removeClass('center');
		}
		$('.event-1, .events-wrap').addClass('active');
		$('.event-2').addClass('center');
	}
});

$('.event-2 header').click(function() {
	if ($('.event-2').hasClass('active')) {
		$('.event-2, .events-wrap').removeClass('active');
		$('.card-wrap.center').removeClass('center');
	} else {
		if ($('.events-wrap').hasClass('active')) {
			$('.card-wrap.active').removeClass('active');
			$('.card-wrap.center').removeClass('center');
		}
		$('.event-2, .events-wrap').addClass('active');
		$('.event-1').addClass('center');
	}
});

$('.event-3 header').click(function() {
	if ($('.event-3').hasClass('active')) {
		$('.event-3, .events-wrap').removeClass('active');
		$('.card-wrap.center').removeClass('center');
	} else {
		if ($('.events-wrap').hasClass('active')) {
			$('.card-wrap.active').removeClass('active');
			$('.card-wrap.center').removeClass('center');
		}
		$('.event-3, .events-wrap').addClass('active');
		$('.event-1').addClass('center');
	}
});

// Fix the issue that overflowed element lost 
// the scroll/touchmove responding after CSS transforming.
function fixScrolling(event) {
	//console.log('Fix scrolling.');
	$(event.target).children('.card').css('overflow-y', 'hidden');
    setTimeout(function() { $(event.target).children('.card').css('overflow-y', ''); });
}
$('.card-wrap').on('transitionend webkitTransitionEnd', fixScrolling);
