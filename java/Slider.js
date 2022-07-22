$(function(){
	
		var display_image_number = 5;
		
		var circle_method = 2;
		
		var anispeed = 690;
		
		var auto_scroll = 1;
		var timeinterval = 5000;
		
	var image_count = $('.slide-image').length;
	var image_width = $('.slide-image').width();
	var stage_width = image_width * image_count;
	var display_width = display_image_number * image_width;
	
	$('.slide-holder').css("width", display_width + "px");
	
	$('.slide-stage').css("width", stage_width + "px");
	

	
	function left_slide_circle(){
		$('.slide-image:last-child').addClass('swapthis'); 
		$('.swapthis').insertBefore('.slide-image:first'); 
		$('.slide-stage').css("left",-image_width + "px"); 
		$('.slide-stage').stop().animate({left:0},anispeed); 
		$('.swapthis').removeClass('swapthis'); 
	}
	function right_slide_circle(){
		$('.slide-image:first').addClass('swapthis'); 
		$('.swapthis').insertAfter('.slide-image:last-child'); 
		$('.slide-stage').css("left",-(stage_width - image_width - display_width) + "px"); 
		$('.slide-stage').stop().animate({left:display_width - stage_width},anispeed);
		$('.swapthis').removeClass('swapthis'); 
	}
	function left_slide_scroll(){
		var stage_left = $('.slide-stage').position().left;
		
		if(stage_left < 0 && !$('.slide-stage').is(':animated')){ 
			$('.slide-stage').stop().animate({left:"+=" + image_width},anispeed);
		}
		else
		{	
			switch(circle_method){ 
				case 1:
					$('.slide-stage').stop().animate({left:display_width - stage_width},anispeed);
					break;
				case 2:
					left_slide_circle();
					break;
			}
			
		}
	}
	function right_slide_scroll(){
		var stage_left = Math.abs($('.slide-stage').position().left);
		var right_remain = stage_width - (display_width + stage_left);
		
		if(right_remain > 0 && !$('.slide-stage').is(':animated')){ 
			$('.slide-stage').stop().animate({left:"-=" + image_width},anispeed);
		}
		else 
		{
			switch(circle_method){ 
				case 1:
					$('.slide-stage').stop().animate({left:0},anispeed);
					break;
				case 2:
					right_slide_circle();
					break;
			}
		}
	}
	
	$('.slide-control-prev').click(function(){left_slide_scroll();});
	$('.slide-control-next').click(function(){right_slide_scroll();});
	
	
	function start_slide_auto_scroll(){
		play = setInterval(right_slide_scroll,timeinterval);
	}
	
	if(auto_scroll == 1){
		start_slide_auto_scroll(); 
	}
	
	$(".slide-container,.slide-control-prev,.slide-control-next").hover(function() {
		clearInterval(play);
	}, function(){
		start_slide_auto_scroll();
	});
	
})