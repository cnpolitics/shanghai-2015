/* global $, winWidth, winHeight, isMQQBrowser, isTrident */
(function() {
	'use strict';
	
	/* * *
	 * Fix the initial positioning (the `calc()` issue)
	 * by manually calculation the translateY distance and manage the order of cards.
	 */

	// On `document.ready`.
	$(function() {
		if (winWidth < 960 && (isMQQBrowser || isTrident)) {
			//console.log(winHeight);
			$('.card-wrap.event-1').css({
				'transform': 'translate3d(0, ' + (winHeight - 168) + 'px, 0)'
			});
			$('.card-wrap.event-2').css({
				'transform': 'translate3d(0, ' + (winHeight - 112) + 'px, 0)'
			});
			$('.card-wrap.event-3').css({
				'transform': 'translate3d(0, ' + (winHeight - 56) + 'px, 0)'
			});
		}
	});
	// On `windows.resize`.
	$(window).on('resize', function() {
		if (winWidth < 960 && (isMQQBrowser || isTrident)) {
			$('.card-wrap.event-1').css({
				'transform': 'translate3d(0, ' + (winHeight - 168) + 'px, 0)'
			});
			$('.card-wrap.event-2').css({
				'transform': 'translate3d(0, ' + (winHeight - 112) + 'px, 0)'
			});
			$('.card-wrap.event-3').css({
				'transform': 'translate3d(0, ' + (winHeight - 56) + 'px, 0)'
			});
		}
	});

	/* Switch pressing effect for touch device. */
	$('.card-wrap').on('touchstart', function() {
		// Ignore active card to prevent the conflict with `overflow` hack.
		if ($(this).hasClass('active')) { return; }
		
		$(this).children('.card').addClass('pressing');
		$('.card-wrap').on('touchend', function() {
			$(this).children('.card').removeClass('pressing');
		});
	});
	
	/* * *
	 * The interaction of the cards:
	 * Click the card to pop on/off itself; switch and re-order the other cards.
	 */
	
	// Be compatible for some special UAs.
	function resetCardPosForMobile() {
		$('.card-wrap.event-1').css({
			'transform': 'translate3d(0, ' + (winHeight - 168) + 'px, 0)'
		});
		$('.card-wrap.event-2').css({
			'transform': 'translate3d(0, ' + (winHeight - 112) + 'px, 0)'
		});
		$('.card-wrap.event-3').css({
			'transform': 'translate3d(0, ' + (winHeight - 56) + 'px, 0)'
		});
	}
	
	/* Click the 1st card. */
	$('.event-1 header').click(function() {
		//e.stopPropagation();
		
		if ($('.event-1').hasClass('active')) {
			// Fix `calc()` issue: reset the position.
			if (winWidth < 960 && (isMQQBrowser || isTrident)) {
				resetCardPosForMobile();
			}
			
			// Pop off this card.
			$('.event-1, .events-wrap').removeClass('active').css('height', '');
			$('.card-wrap.center').removeClass('center');

		} else {
			// Pop off the current active card.
			if ($('.events-wrap').hasClass('active')) {
				$('.card-wrap.active').removeClass('active').css('height', '');
				$('.card-wrap.center').removeClass('center');
				
				// Fix `calc()` issue: reset the position.
				if (winWidth < 960 && (isMQQBrowser || isTrident)) {
					resetCardPosForMobile();
				}
			}
			
			// Pop on the clicked card and re-order the other cards.
			$('.event-1, .events-wrap').addClass('active');
			$('.event-2').addClass('center');
			if (winWidth >= 960) {
				// Handle the layout logic for desktop.
				setTimeout(function() {
					$('.event-1').css('height', 'auto');
				}, 500);
			}
			
			// Fix `calc()` issue: active the 1st card.
			if (winWidth < 960 && (isMQQBrowser || isTrident)) {
				$('.card-wrap.event-1').css({
					'transform': ''	// active
				});
				$('.card-wrap.event-2').css({
					'transform': 'translate3d(0, ' + (winHeight - 112) + 'px, 0)'
				});
				$('.card-wrap.event-3').css({
					'transform': 'translate3d(0, ' + (winHeight - 56) + 'px, 0)'
				});
			}
		}
	});
	
	/* Click the 2nd card. */
	$('.event-2 header').click(function() {
		//e.stopPropagation();
		
		if ($('.event-2').hasClass('active')) {
			// Fix `calc()` issue: reset the position.
			if (winWidth < 960 && (isMQQBrowser || isTrident)) {
				resetCardPosForMobile();
			}
			
			// Pop off this card.
			$('.event-2, .events-wrap').removeClass('active').css('height', '');
			$('.card-wrap.center').removeClass('center');

		} else {
			// Pop off the current active card.
			if ($('.events-wrap').hasClass('active')) {
				$('.card-wrap.active').removeClass('active').css('height', '');
				$('.card-wrap.center').removeClass('center');
				
				// Fix `calc()` issue: reset the position.
				if (winWidth < 960 && (isMQQBrowser || isTrident)) {
					resetCardPosForMobile();
				}
			}
			
			// Pop on the clicked card and re-order the other cards.
			$('.event-2, .events-wrap').addClass('active');
			$('.event-1').addClass('center');
			if (winWidth >= 960) {
				setTimeout(function() {
					$('.event-2').css('height', 'auto');
				}, 500);
			}
			
			// Fix `calc` issue: active the 2nd card.
			if (winWidth < 960 && (isMQQBrowser || isTrident)) {
				$('.card-wrap.event-1').css({
					'transform': 'translate3d(0, ' + (winHeight - 112) + 'px, 0)'
				});
				$('.card-wrap.event-2').css({
					'transform': ''	// active
				});
				$('.card-wrap.event-3').css({
					'transform': 'translate3d(0, ' + (winHeight - 56) + 'px, 0)'
				});
			}
		}
	});
	
	/* Click the 3rd card. */
	$('.event-3 header').click(function() {
		//e.stopPropagation();
		
		if ($('.event-3').hasClass('active')) {
			// Fix `calc()` issue: reset the position.
			if (winWidth < 960 && (isMQQBrowser || isTrident)) {
				resetCardPosForMobile();
			}
			
			// Pop off this card.
			$('.event-3, .events-wrap').removeClass('active').css('height', '');
			$('.card-wrap.center').removeClass('center');

		} else {
			// Pop off the current active card.
			if ($('.events-wrap').hasClass('active')) {
				$('.card-wrap.active').removeClass('active').css('height', '');
				$('.card-wrap.center').removeClass('center');
				
				// Fix `calc()` issue: reset the position.
				if (winWidth < 960 && (isMQQBrowser || isTrident)) {
					resetCardPosForMobile();
				}
			}
			
			// Pop on the clicked card and re-order the other cards.
			$('.event-3, .events-wrap').addClass('active');
			$('.event-1').addClass('center');
			if (winWidth >= 960) {
				setTimeout(function() {
					$('.event-3').css('height', 'auto');
				}, 500);
			}
			
			// Fix `calc` issue: active the 3rd card.
			if (winWidth < 960 && (isMQQBrowser || isTrident)) {
				$('.card-wrap.event-1').css({
					'transform': 'translate3d(0, ' + (winHeight - 112) + 'px, 0)'
				});
				$('.card-wrap.event-2').css({
					'transform': 'translate3d(0, ' + (winHeight - 56) + 'px, 0)'
				});
				$('.card-wrap.event-3').css({
					'transform': ''	// active
				});
			}
		}
	});
	
	/* * *
	 * Click blank space (<body>) or press [ESC],
	 * to pop off the active card.
	 */

	function popOffActiveCard() {
		$('.events-wrap.active').removeClass('active');
		$('.card-wrap.active').removeClass('active').css('height', '');
		$('.card-wrap.center').removeClass('center');
	}
	
	//$('body').click( popOffActiveCard );
	$(document).keyup(function(e) { 
		if (e.keyCode === 27) {
			popOffActiveCard();
		}
	});

	// Listen window size to control the cards' scroll mode.
	$(window).on('resize', function() {
		$('.card-wrap').css('height', '');
		
		if (winWidth >= 960) {
			$('.card-wrap.active').css('height', 'auto');
		}
	});
	
	/* * *
	 * Hack:
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
