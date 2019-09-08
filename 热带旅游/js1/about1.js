$(document).ready(function(){
	// <!-- our team 部分 -->
	$(".team-img1").mouseover(function(){
		$(".team-img1 .img1").stop().animate({height:"0px",top:"250px"},"1000");
	});
	$(".team-text1").mouseout(function(){
		$(".team-img1 .img1").stop().animate({height:"250px",top:"0px"},"1000");
	});

	$(".team-img2").mouseover(function(){
		$(".team-img2 .img2").stop().animate({height:"0px",top:"250px"},"1000");
	});
	$(".team-text2").mouseout(function(){
		$(".team-img2 .img2").stop().animate({height:"250px",top:"0px"},"1000");
	});

	$(".team-img3").mouseover(function(){
		$(".team-img3 .img3").stop().animate({height:"0px",top:"250px"},"1000");
	});
	$(".team-text3").mouseout(function(){
		$(".team-img3 .img3").stop().animate({height:"250px",top:"0px"},"1000");
	});

	$(".team-img4").mouseover(function(){
		$(".team-img4 .img4").stop().animate({height:"0px",top:"250px"},"1000");
	});
	$(".team-text4").mouseout(function(){
		$(".team-img4 .img4").stop().animate({height:"250px",top:"0px"},"1000");
	});
	// $(".team-img").mouseover(function(){
	// 	$(".team-img img").fadeOut(1000);
	// });
	// $(".team-text").mouseout(function(){
	// 	$(".team-img img").fadeIn(1000);
	// })
})
