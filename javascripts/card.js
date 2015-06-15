/* global $, winWidth, winHeight, isMQQBrowser */
(function() {
	'use strict';
	
	
	
	// Fix the initial positioning. (`calc()` issue)
	$(function() {
		if (winWidth < 960 && isMQQBrowser) {
//			console.log(winHeight);
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
	$(window).on('resize', function() {
		if (winWidth < 960 && isMQQBrowser) {
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
	
	

	// Switch pressing effect for touch device.
	$('.card-wrap').on('touchstart', function() {
		// Ignore active card to prevent the conflict with `overflow` hack.
		if ($(this).hasClass('active')) { return; }
		
		$(this).children('.card').addClass('pressing');
		$('.card-wrap').on('touchend', function() {
			$(this).children('.card').removeClass('pressing');
		});
	});
	
	
	
	// Click 1st card.
	$('.event-1 header').click(function() {
		//e.stopPropagation();
		
		if ($('.event-1').hasClass('active')) {
			// Fix `calc` issue.
			if (winWidth < 960 && isMQQBrowser) {
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
			
			// Pop off this card.
			$('.event-1, .events-wrap').removeClass('active').css('height', '');
			$('.card-wrap.center').removeClass('center');
		} else {
			// Pop off the current active card.
			if ($('.events-wrap').hasClass('active')) {
				$('.card-wrap.active').removeClass('active').css('height', '');
				$('.card-wrap.center').removeClass('center');
				
				// Fix `calc` issue.
				if (winWidth < 960 && isMQQBrowser) {
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
			}
			
			// Pop on the clicked card and re-order the other cards.
			$('.event-1, .events-wrap').addClass('active');
			$('.event-2').addClass('center');
			if (winWidth >= 960) {
				setTimeout(function() {
					$('.event-1').css('height', 'auto');
				}, 500);
			}
			
			// Fix `calc` issue.
			if (winWidth < 960 && isMQQBrowser) {
				$('.card-wrap.event-1').css({
					'transform': ''
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
	
	// Click 2nd card.
	$('.event-2 header').click(function() {
		//e.stopPropagation();
		
		if ($('.event-2').hasClass('active')) {
			// Fix `calc` issue.
			if (winWidth < 960 && isMQQBrowser) {
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
			
			// Pop off this card.
			$('.event-2, .events-wrap').removeClass('active').css('height', '');
			$('.card-wrap.center').removeClass('center');
		} else {
			// Pop off the current active card.
			if ($('.events-wrap').hasClass('active')) {
				$('.card-wrap.active').removeClass('active').css('height', '');
				$('.card-wrap.center').removeClass('center');
				
				// Fix `calc` issue.
				if (winWidth < 960 && isMQQBrowser) {
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
			}
			
			// Pop on the clicked card and re-order the other cards.
			$('.event-2, .events-wrap').addClass('active');
			$('.event-1').addClass('center');
			if (winWidth >= 960) {
				setTimeout(function() {
					$('.event-2').css('height', 'auto');
				}, 500);
			}
			
			// Fix `calc` issue.
			if (winWidth < 960 && isMQQBrowser) {
				$('.card-wrap.event-2').css({
					'transform': ''
				});
				$('.card-wrap.event-1').css({
					'transform': 'translate3d(0, ' + (winHeight - 112) + 'px, 0)'
				});
				$('.card-wrap.event-3').css({
					'transform': 'translate3d(0, ' + (winHeight - 56) + 'px, 0)'
				});
			}
		}
	});
	
	// Click 3rd card.
	$('.event-3 header').click(function() {
		//e.stopPropagation();
		
		if ($('.event-3').hasClass('active')) {
			// Fix `calc` issue.
			if (winWidth < 960 && isMQQBrowser) {
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
			
			// Pop off this card.
			$('.event-3, .events-wrap').removeClass('active').css('height', '');
			$('.card-wrap.center').removeClass('center');
		} else {
			// Pop off the current active card.
			if ($('.events-wrap').hasClass('active')) {
				$('.card-wrap.active').removeClass('active').css('height', '');
				$('.card-wrap.center').removeClass('center');
				
				// Fix `calc` issue.
				if (winWidth < 960 && isMQQBrowser) {
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
			}
			
			// Pop on the clicked card and re-order the other cards.
			$('.event-3, .events-wrap').addClass('active');
			$('.event-1').addClass('center');
			if (winWidth >= 960) {
				setTimeout(function() {
					$('.event-3').css('height', 'auto');
				}, 500);
			}
			
			// Fix `calc` issue.
			if (winWidth < 960 && isMQQBrowser) {
				$('.card-wrap.event-3').css({
					'transform': ''
				});
				$('.card-wrap.event-1').css({
					'transform': 'translate3d(0, ' + (winHeight - 112) + 'px, 0)'
				});
				$('.card-wrap.event-2').css({
					'transform': 'translate3d(0, ' + (winHeight - 56) + 'px, 0)'
				});
			}
		}
	});
	
	
	
	function popOffActiveCard() {
		$('.events-wrap.active').removeClass('active');
		$('.card-wrap.active').removeClass('active').css('height', '');
		$('.card-wrap.center').removeClass('center');
	}
	
	// Click blank space (<body>) or press [ESC], to pop off the active card.
//	$('body').click( popOffActiveCard );
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
