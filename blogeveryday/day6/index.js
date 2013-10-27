$(document).ready(function() {
	
	function time() {
		var now = new Date();
		var hour = formatTime(now.getHours());
		var min = formatTime(now.getMinutes());
		var sec = formatTime(now.getSeconds());

		$('#cur_hour').text(hour);
		$('#cur_min').text(min);
		$('#cur_sec').text(sec);

		t=setTimeout(function() {time()}, 3000);
		// console.log(hour, min, sec);
	}

	function formatTime(i) {
		if(i < 10) {
			i = '0' + i;
		}
		return i;
	}

	time();

	$('.button').on('mouseenter', function() {
		// $(this).css("opacity","1");
	})

	$('.button').on('mouseleave', function() {
		// $(this).css("opacity","0.5");
	})
})
