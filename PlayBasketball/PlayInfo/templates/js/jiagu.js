$(document).ready(function(){
	var contentfirst=$('.content span').html().substring(0,65);
	var contentlast=$('.content span').html().substring(65);
	$('.content span').html("<span>" + contentfirst+ "</span>" + "<span>" +contentlast +"</span>");
	$('.content span').find('span:last').hide();
	$('.content a').click(function(){
		$(this).parent().find('a').show();
		$(this).hide();
		if($(this).attr('class')=='zhankai'){
			$(this).parent().find('span span:last').show();
		}else{
			$(this).parent().find('span span:last').hide();
		}
	});
	$('.xq-pls li:even').css('background','#f7f7f7');
	$('.header .middle a').click(function(){
		$('.header .middle a').removeClass('on');
		$(this).addClass('on');
	});
	$('.cons').eq(0).css('margin-top','0px');
	$('.cons:last').css('margin-bottom',$(window).height()*0.07);
	window.onload = function(){
		tiaozheng();
	}
	for(i=0;i<$('.bottom-nav').length;i++){
		$('.bottom-nav').eq(i).find('li').eq(2).css('border-right','0');
	}
});
function tiaozheng(){
	var imgs=$('.img').length;
	for(i=0;i<imgs;i++){
		var theimg = $('.img').eq(i).find('img').length;
		if(theimg=="4"){
			$('.img').eq(i).find('img').eq(0).wrapAll("<div class='leftimg4'></div>");
			$('.img').eq(i).find('img').eq(1).wrapAll("<div class='i4'></div>");
			$('.img').eq(i).find('img').eq(2).wrapAll("<div class='i4'></div>");
			$('.img').eq(i).find('img').eq(3).wrapAll("<div class='i4'></div>");
			$('.img').eq(i).find('.i4').wrapAll("<div class='rightimg4'></div>");
		}else if(theimg=="3"){
			$('.img').eq(i).find('img').eq(0).wrapAll("<div class='i3'></div>");
			$('.img').eq(i).find('img').eq(1).wrapAll("<div class='i3'></div>");
			$('.img').eq(i).find('.i3').wrapAll("<div class='leftimg3'></div>");
			$('.img').eq(i).find('img').eq(2).wrapAll("<div class='rightimg3'></div>");
		}else if(theimg=="2"){
			$('.img').eq(i).find('img').eq(0).wrapAll("<div class='leftimg2'></div>");
			$('.img').eq(i).find('img').eq(1).wrapAll("<div class='rightimg2'></div>");
		}else if(theimg=="1"){
			$('.img').eq(i).find('img').eq(0).wrapAll("<div class='middleimg'></div>");
		}
	}
	weizhi($('.img'));
}
function weizhi(img){
	var imglen=img.length;
	for(i=0;i<imglen;i++){
		var theimg = img.eq(i).find('img').length;
		for(a=0;a<theimg;a++){

			if(img.eq(i).find('img').eq(a).height()>img.eq(i).find('img').eq(a).parent().height()){
				img.eq(i).find('img').eq(a).css('top',-( img.eq(i).find('img').eq(a).height()-img.eq(i).find('img').eq(a).parent().height() )/2);
			}else{
				img.eq(i).find('img').eq(a).css({
					'height':'100%',
					'width':'auto'
				})
				var left = img.eq(i).find('img').eq(a).width()-img.eq(i).find('img').eq(a).parent().width();
				img.eq(i).find('img').eq(a).css('left',-left/2);
			}

		}
	}

}