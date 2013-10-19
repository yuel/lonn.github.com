$(document).ready(function() {
	function getRandomInt (min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$('._box').on('mouseover', function() {
		var img_box = this;
		var animation = "rise";

		$(this).addClass(animation);

		setTimeout(function() {
			$(img_box).removeClass(animation);
		}, 800);
	})

	// $('.img_box').on('mouseleave', function() {
	// 	var img_box = this;
	// 	var animation = "rise";

	// 	$(this).removeClass(animation);

	// })

	function getRandomInt() {
		return Math.round(Math.random());
	}


	$('.drop_bgcolor').click(function(event) {
	    $('._box').toggleClass('box_color get_bgcolor');
	    $('.text').toggleClass('dspl_none');
	    $('.text_2').toggleClass('dspl_none');
	    // $('.text').toggleClass('text_color');
	})

	// $('.drop_bgcolor').on('click', function() {
	// 	$('._box').css("background-color", "transparent");
	// })
	console.log(getRandomInt());
})
