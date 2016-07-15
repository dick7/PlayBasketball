$(document).ready(function(){
	$('.zan').click(function(){
		var num=parseInt($(this).parents('.phone').find('.num').html());
		if($(this).attr('src')=="images/zan1.png"){
			$(this).attr('src','images/zan2.png');
			$(this).parents('.phone').find('.num').html(num+1);
		}else{
			$(this).attr('src','images/zan1.png');
			$(this).parents('.phone').find('.num').html(num-1);
		}
	});	
	$('nav a').click(function(){
		$('nav a').removeClass('on');
		$(this).addClass('on');
	});
});