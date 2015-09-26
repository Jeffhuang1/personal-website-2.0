function onScreen() {
    // Check if the top of the page collides with each section
    $('.section').each(function() {
        var windowScroll = $(document).scrollTop();
        
        // Complex line checks if windowScroll (top of page) + nav bar hits Section Top / Bottom
        if( windowScroll + ($(window).height() / 1.5) >= $(this).offset().top && windowScroll + ($(window).height() / 1.5) <= $(this).offset().top + $(this).height()) {
            // This section is active! Add Highlight
            $('#nav-' + $(this).attr('id')).addClass('highlight');
        } else {
            // No - Remove highlight class
            $('#nav-' + $(this).attr('id')).removeClass('highlight');
        }
    
    });
}

$(window).on('scroll resize', function () {
    onScreen();
});


function goToByScroll(id){
    if(id.indexOf("nav-") > -1){
    	id = id.replace("nav-", "");
	}
	else if(id.indexOf("slide-") > -1){
		id = id.replace("slide-","");
	}
	else if(id.indexOf("item-") > -1){
		id = id.replace("item-", "");
	}
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        1000);
}
$(".logo-wrapper").click(function(e){
	$('html, body').animate({ scrollTop: 0 }, 1000);
})
$(".menu-item-wrapper").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("id"));           
});

$(".slideout-menu-item").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
    CloseMenu()
      // Call the scroll function
    goToByScroll($(this).attr("id"));           
});

$(".nav-button").click(function(e) { 
      // Prevent a page reload when a link is pressed
    e.preventDefault(); 
      // Call the scroll function
    goToByScroll($(this).attr("id"));           
});


$('.menu-toggle').on('click', CloseMenu);
function CloseMenu(event){
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
};