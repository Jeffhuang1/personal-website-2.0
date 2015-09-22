$(document).ready(function(){
	//get height of the parent div for navigational bar
	var menuButtonHeight = $('.menu-item-wrapper').height();
	$('.margin-auto').css('padding-top', menuButtonHeight / 2 + 15);
	$( window ).resize(function() {
		var newButtonHeight = $('.menu-item-wrapper').height();
		$('.margin-auto').css('padding-top', newButtonHeight / 2 + 15);
	});
})