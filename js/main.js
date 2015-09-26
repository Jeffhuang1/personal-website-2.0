//this page is for main page and the nav bar
$(document).ready(function(){
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	$('.home-content-wrapper').css('height', windowHeight);
	//get height of the parent div for navigational bar
	var menuButtonHeight = $('.menu-item-wrapper').height();
	$('.margin-auto').css('padding-top', menuButtonHeight / 2 -3);	
	//main home page
	if(windowWidth > 768){
		$('.my-picture-wrapper').css('padding-top', windowHeight / 8)
	}
	else{
		$('.my-picture-wrapper').css('padding-top', windowHeight / 15)
	}
	$( window ).resize(function() {
		windowHeight = $(window).height();
		windowWidth = $(window).width();
		//nav bar
		var newButtonHeight = $('.menu-item-wrapper').height();
		$('.margin-auto').css('padding-top', newButtonHeight / 2 - 3);
		//home page
		if(windowWidth > 768){
			$('.home-content-wrapper').css('width', windowWidth - 50);
			$('.my-picture-wrapper').css('padding-top', windowHeight / 8)
		}
		else{
			$('.home-content-wrapper').css('width', windowWidth);
			$('.my-picture-wrapper').css('padding-top', windowHeight / 15)
		}
		$('.home-content-wrapper').css('height', windowHeight);
	});


	$('.download-resume').click(function(e){
		window.location.href = "files/jeffreyhuang.pdf";
	})
})