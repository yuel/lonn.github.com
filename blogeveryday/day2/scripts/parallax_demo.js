$(document).ready(function() { //when the document is ready...


	//save selectors as variables to increase performance
	var $window = $(window);
	var $firstBG = $('#parallax-bg1');
	var $secondBG = $('#parallax-bg2');
	var $thirdBG = $('#parallax-bg3');
	var $fourthBG = $('#fourth');
	var trainers = $("#intro .bg");
	
	var windowHeight = $window.height(); //get the height of the window
	
	
	//apply the class "inview" to a section that is in the viewport
	// $('#intro, #second, #third, #fourth').bind('inview', function (event, visible) {
	// 		if (visible == true) {
	// 		$(this).addClass("inview");
	// 		} else {
	// 		$(this).removeClass("inview");
	// 		}
	// 	});
	
			
	//function that places the navigation in the center of the window
	// function RepositionNav(){
	// 	var windowHeight = $window.height(); //get the height of the window
	// 	var navHeight = $('#nav').height() / 2;
	// 	var windowCenter = (windowHeight / 2); 
	// 	var newtop = windowCenter - navHeight;
	// 	$('#nav').css({"top": newtop}); //set the new top position of the navigation list
	// }
	
	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(windowHeight, pos, adjuster, inertia){
		return (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	}
	
	//function to be called whenever the window is scrolled or resized
	function Move(){ 
		var pos = $window.scrollTop(); //position of the scrollbar

		//if the first section is in view...
		// if($firstBG.hasClass("inview")){
			//call the newPos function and change the background position
			$firstBG.css({'top': newPos(windowHeight, pos, 700, 0.3)}); 
			$secondBG.css({'top': newPos(windowHeight, pos, 650, 0.6)});
			$thirdBG.css({'top': newPos(windowHeight, pos, 850, 1)});
		// }
		
		//if the second section is in view...
		if($secondBG.hasClass("inview")){
			//call the newPos function and change the background position
			$secondBG.css({'backgroundPosition': newPos(windowHeight, pos, 1250, 0.3)});
			//call the newPos function and change the secnond background position
			trainers.css({'backgroundPosition': newPos(windowHeight, pos, 1900, 0.6)});
		}
		
		//if the third section is in view...
		if($thirdBG.hasClass("inview")){
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition': newPos(windowHeight, pos, 2850, 0.3)});
		}
		
		//if the fourth section is in view...
		if($fourthBG.hasClass("inview")){
			//call the newPos function and change the background position for CSS3 multiple backgrounds
			$fourthBG.css({'backgroundPosition': newPos(windowHeight, pos, 200, 0.9) + ", " + newPos(50, windowHeight, pos, 0, 0.7) + ", " + newPos(50, windowHeight, pos, 0, 0.5) + ", " + newPos(50, windowHeight, pos, 700, 0.3)});
		}
		
		$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
	}
		
	// RepositionNav(); //Reposition the Navigation to center it in the window when the script loads
	
	$window.resize(function(){ //if the user resizes the window...
		Move(); //move the background images in relation to the movement of the scrollbar
		// RepositionNav(); //reposition the navigation list so it remains vertically central
	});		
	
	$window.bind('scroll', function(){ //when the user is scrolling...
		Move(); //move the background images in relation to the movement of the scrollbar
	});
	
});
