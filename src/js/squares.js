$(document).ready(function () {

	// Single scrollmagic controller for the entire experience
	var controller = new ScrollMagic.Controller();

	$.each($(".slide"), function () {

		var self = this;
		

		// Get the content to be parallaxed over the pinned section.
		$squares = $(this).find('.square');
		$.each($squares, function () {
			var tween = TweenMax.fromTo(this, 1, { 		
				bottom: -$(this).height()*2				
			},{
				top: -$(this).height()*2,					
				ease: Sine.easeOut        				
			})

			// Add the tween to the controller. The animation duration and offset is set via data attrs
			var animateSquare = new ScrollMagic.Scene({
				triggerElement: self, 					// The section.
				triggerHook: 0,							// Use the top of the section element as the trigger.
				duration: $(this).data('duration'),		// How many pixel scroll the animation lasts.
				offset: $(this).data('offset')			// The scroll offset before the animation begins.
			})
			.setTween(tween)
			.addTo(controller)
		})
	})

})