$(document).ready(function(){
	
	if($(window).width() > 768){
		$('.project-image-wrapper').hover(function() {
		    $(this).find('img').fadeTo(100, 0.2);
		    $(this).find('.text-overlay').fadeIn(600, function(){
		    	$(this).css("z-index", 5);
		    })
		}, function() {
		    $(this).find('img').fadeTo(100, 1);
		    $(this).find('.text-overlay').fadeOut(600, function(){
		    	$(this).css("z-index", -5)
		    })
		});
	}
})