$(document).ready(function(){

	//Fluent scroll
	$('a[href^="#"]').click(function(e){
		 e.preventDefault();
		 var el = $(this).attr('href');
		 var destination = $(el).offset().top;
		 $('body, html').animate({scrollTop: destination}, 1000);    	
	});     
});	