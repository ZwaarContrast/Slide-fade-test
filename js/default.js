$(window).load(function() {
	//Background switching
	$(".backgroundSwitcher li a").click(function(ev){
		ev.preventDefault();
		$(".content").removeClass('red blue green image white');
		$(".content").addClass($(this).data('bg'));
	});

	//Sliding
	$(".slider").click(function(ev){
		var current=parseInt($('.slides').css('margin-left'),10);
		if(current<=-2000){
			current=0;
		}
		$('.slides').animate({'margin-left':current-250},500);
	});
});