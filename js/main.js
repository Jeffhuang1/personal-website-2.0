//this page is for main page and the nav bar
$(document).ready(function(){
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	$('.home-content-wrapper').css('height', windowHeight);
	//get height of the parent div for navigational bar
	var menuButtonHeight = $('.menu-item-wrapper').height();
	$('.margin-auto').css('padding-top', menuButtonHeight / 2 -7);	
	//main home page
	if(windowWidth > 768){
		$('.home-item-1').css('padding-top', windowHeight / 3)
	}
	else{
		$('.home-item-1').css('padding-top', windowHeight / 6)
	}
	$( window ).resize(function() {
		windowHeight = $(window).height();
		windowWidth = $(window).width();
		//nav bar
		var newButtonHeight = $('.menu-item-wrapper').height();
		$('.margin-auto').css('padding-top', newButtonHeight / 2 + 15);

		//home page
		if(windowWidth > 768){
			$('.home-content-wrapper').css('width', windowWidth - 50);
			$('.home-item-1').css('padding-top', windowHeight / 3)
		}
		else{
			$('.home-content-wrapper').css('width', windowWidth);
			$('.home-item-1').css('padding-top', windowHeight / 6)
		}
		$('.home-content-wrapper').css('height', windowHeight);
	});




	$('.menu-toggle').on('click', function(event){
    	event.preventDefault();
    	// create menu variables
    	var slideoutMenu = $('.slideout-menu');
    	var toggleButton = $('.primary-navigation');
    	var toggleButtonWidth = $('.menu-toggle').width();
    	var slideoutMenuWidth = $('.slideout-menu').width();
    	
    	// toggle open class
    	slideoutMenu.toggleClass("open");
    	
    	// slide menu
    	if (slideoutMenu.hasClass("open")) {
	    	slideoutMenu.animate({
		    	left: "0px"
	    	}, {duration:400, queue:false});
	    	toggleButton.animate({
	    		left: slideoutMenuWidth
	    	}, {duration:400, queue:false})	
    	} else {
	    	slideoutMenu.animate({
		    	left: -slideoutMenuWidth
	    	});	
	    	toggleButton.animate({
	    		left: "0px"
	    	})	
    	}
    });
})