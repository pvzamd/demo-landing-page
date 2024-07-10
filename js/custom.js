$(document).ready(function(){
		"use strict";
	$(".hline").mouseenter(function(){
		$(".hr1 hr").animate({
			width : 13,
			"margin-left":"13px"
			});
		$(".hr1 hr").css({
			"border-color": "#ffffff"
			});
		$(".hr2 hr").css({
			"border-color": "#ffffff"
			});
		$(".hr3 hr").animate({
			width : 13,
			"margin-left":"0px",
			});
		$(".hr3 hr").css({
			"border-color": "#ffffff"
			});
	});
	$(".hline").mouseleave(function(){
		$(".hr1 hr").animate({
			width : 26,
			"margin-left":"0px"
			});
		$(".hr1 hr").css({
			"border-color": "#01f7b6"
			});
		$(".hr2 hr").css({
			"border-color": "#01f7b6"
			});
		$(".hr3 hr").animate({
			width : 26,
			"margin-left":"0px"
			});
		$(".hr3 hr").css({
			"border-color": "#01f7b6"
			});
	});
	
	$(".lmore a").hover(function(){
		$(".lmore hr").animate({
			width : 0,
			"margin-left":"10px"
			});
		$(".lmore hr").animate({
			width : 73,
			"margin-left":"60px"
			});
		$(".lmore span").animate({
			"margin-left":"100px"
			});
		
		$(".dot").css({
			"display": "inline-block"
			});
		$(".dot").animate({
			"right" : "-73px"
			});	
	}, function(){
		$(".lmore hr").animate({
			width : 43,
			"margin-left":"10px"
			});
		$(".dot").animate({
			"right" : "12px"
			});
		$(".lmore span").animate({
			"margin-left":"10px"
			});

		$(".dot").fadeOut(100);
	});
	
	
	$(".hline").click(function(){
		$(".hidepage").toggle(400);
		$(".showmenu").toggle(1000);
		$(".cross").toggle();
		$("html").css({
			"height": "100%",
			"width":"100%",
			"margin": "0px"
			});
		$("body").css({
			"height": "100%",
			"width":"100%",
			"margin": "0px"
			});
	});
	
	

	$(".start").mouseenter(function(){
		$(".menulist2").fadeIn(200);
			$(".menulist2").mouseenter(function(){
				$(".menulist2").fadeIn(200);
			});
			$(".menulist2").mouseleave(function(){
				$(".menulist2").fadeOut(200);
			});
	});
	$(".start").mouseleave(function(){
		$(".menulist2").fadeOut(200);
		});


	
	$(".horizon a").hover(function(){
		$(".horizon hr").animate({
			width : 0,
			"left":"10px"
			},100);
		$(".horizon hr").animate({
			width : 64,
			"left":"10px"
			});
		$(".horizon b").animate({
			"padding-left":"20px"
			});	
	}, function(){
		$(".horizon hr").animate({
			width : 34,
			"left":"0px"
			});
		$(".horizon b").animate({
			"padding-left":"20px"
			});	
	});
	
/*page4*/
	$(".p41> a").hover(function(){
		$(".p4a hr").animate({width : 0,"left":"10px"},100);
		$(".p4a hr").animate({width : 64,"left":"10px"});
	}, function(){
		$(".p4a hr").animate({width : 34,"left":"0px"});
	});
	
	$(".p42 a").hover(function(){
		$(".p4b hr").animate({width : 0,"left":"10px"},100);
		$(".p4b hr").animate({width : 64,"left":"10px"});
	}, function(){
		$(".p4b hr").animate({width : 34,"left":"0px"});
	});
	
	$(".p43 a").hover(function(){
		$(".p4c hr").animate({width : 0,"left":"10px"},100);
		$(".p4c hr").animate({width : 64,"left":"10px"});
	}, function(){
		$(".p4c hr").animate({width : 34,"left":"0px"});
	});
	
	/*page4 bg*/
	
	$(".p4a").hover(function(){
		$(".page4").css({"background" : "#FFFED2"},100);
		$(".work").fadeOut(1000);

	}, function(){
		$(".page4").css({"background" : "transparent"},100);
		$(".work").fadeIn(1000);
	});
	
	$(".p4b").hover(function(){
		$(".page4").css({"background" : "#EDCEFF"},100);
		$(".work").fadeOut(1000);
	}, function(){
		$(".page4").css({"background" : "transparent"},100);
		$(".work").fadeIn(1000);
	});
	
	$(".p4c").hover(function(){
		$(".page4").css({"background" : "#C4FEFF"},100);
		$(".work").fadeOut(1000);
	}, function(){
		$(".page4").css({"background" : "transparent"},100);
		$(".work").fadeIn(1000);
	});
	
	/*page5*/
	$(".page5 > h4 > a").hover(function(){
		$(".page5 hr").animate({width : 0,"left":"10px"},100);
		$(".page5 hr").animate({width : 64,"left":"10px"});
	}, function(){
		$(".page5 hr").animate({width : 34,"left":"0px"});
	});
	
	/*page5 logo*/
	$(".logoicon > ul > li").hover(function(){
		$(this).find("img").fadeTo(300, 0.05);
		$(this).find("img").css({"transform": "scale(1.2)"});
		$(this).find("small").css({"display": "block"});
	}, function(){
		$(this).find("img").fadeTo(300, 1);
		$(this).find("img").css({"transform": "scale(1)"});
		$(this).find("small").css({"display": "none"});
	});
	
	
	
	
	
	/*page6*/
	$(".p6j a").hover(function(){
		$(".p6j hr").animate({width : 0,"left":"10px"},100);
		$(".p6j hr").animate({width : 64,"left":"10px"});
	}, function(){
		$(".p6j hr").animate({width : 34,"left":"0px"});
	});
	
	
	/*page1transform*/

	
	/*preloader*/
/*carousel*/

	
	
/*	auto page 1*/
function f1(){$(".rlist hr").animate({width : 0},1000, "easeInQuart");f2();}
function f2(){$(".rlist hr").animate({width : 55},1000, "easeOutQuart");f1();}
f1();
});