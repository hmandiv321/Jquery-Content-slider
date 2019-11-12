$(document).ready(function(){
	//set options
	var speed=500;
	var autoswitch = true;
	var autoswitch_speed = 4000;

	//add initial active class
	$('.slide').first().addClass('active');
	//hide all sldes
	$('.slide').hide();
    //show first slide
	$('.slide').show();

	$('#next').on('click',nextslide);
	$('#prev').on('click',prevSlide);

	if (autoswitch == true) {
		setInterval(nextslide,autoswitch_speed);
	}
	//switch to next slide
	function nextslide(){
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		}else{
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);	
	}
	//switch to prev slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		}else{
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});	