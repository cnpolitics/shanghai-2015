(function() {
	'use strict';
	
	// Click 1st card.
	$('.event-1 header').click(function() {
		if ($('.event-1').hasClass('active')) {
			// Pop off this card.
			$('.event-1, .events-wrap').removeClass('active').css('height', '');
			$('.card-wrap.center').removeClass('center');
		} else {
			// Pop off the current active card.
			if ($('.events-wrap').hasClass('active')) {
				$('.card-wrap.active').removeClass('active').css('height', '');
				$('.card-wrap.center').removeClass('center');
			}
			
			// Pop on the clicked card and re-order the other cards.
			$('.event-1, .events-wrap').addClass('active');
			$('.event-2').addClass('center');
			if (winWidth >= 960) {
				setTimeout(function() {
					$('.event-1').css('height', 'auto');
				}, 500);
			}
		}
	});
	
	// Click 2nd card.
	$('.event-2 header').click(function() {
		if ($('.event-2').hasClass('active')) {
			// Pop off this card.
			$('.event-2, .events-wrap').removeClass('active').css('height', '');
			$('.card-wrap.center').removeClass('center');
		} else {
			// Pop off the current active card.
			if ($('.events-wrap').hasClass('active')) {
				$('.card-wrap.active').removeClass('active').css('height', '');
				$('.card-wrap.center').removeClass('center');
			}
			
			// Pop on the clicked card and re-order the other cards.
			$('.event-2, .events-wrap').addClass('active');
			$('.event-1').addClass('center');
			if (winWidth >= 960) {
				setTimeout(function() {
					$('.event-2').css('height', 'auto');
				}, 500);
			}
		}
	});
	
	// Click 3rd card.
	$('.event-3 header').click(function() {
		if ($('.event-3').hasClass('active')) {
			// Pop off this card.
			$('.event-3, .events-wrap').removeClass('active').css('height', '');
			$('.card-wrap.center').removeClass('center');
		} else {
			// Pop off the current active card.
			if ($('.events-wrap').hasClass('active')) {
				$('.card-wrap.active').removeClass('active').css('height', '');
				$('.card-wrap.center').removeClass('center');
			}
			
			// Pop on the clicked card and re-order the other cards.
			$('.event-3, .events-wrap').addClass('active');
			$('.event-1').addClass('center');
			if (winWidth >= 960) {
				setTimeout(function() {
					$('.event-3').css('height', 'auto');
				}, 500);
			}
		}
	});
	
	/* Hack:
	 * Fix the issue that overflowed element lost
	 * the scroll/touchmove responding after CSS transforming.
	 */
	function fixScrolling(event) {
		//console.log('Fix scrolling.');
		$(event.target).children('.card').css('overflow-y', 'hidden');
	    setTimeout(function() {
			$(event.target).children('.card').css('overflow-y', '');
		}, 0);
	}
	$('.card-wrap').on('transitionend webkitTransitionEnd', fixScrolling);
}());
