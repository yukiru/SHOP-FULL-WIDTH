// JavaScript Document

$(document).ready(function(){
	$('#menu-list ul li').hover(function(){
		$(this).find('.mhover').stop().fadeIn(300)
		},
		function(){
			$(this).find('.mhover').stop().fadeOut(300)
		});
	$(window).scroll(function(){
		$('#top-button').click(function(){
		$('html, body').stop().animate({scrollTop:0},500);
		});
		});
	});