$(document).ready(function(){

	//Fluent scroll
	$('a[href^="#"]').click(function(e){
		 e.preventDefault();
		 var el = $(this).attr('href');
		 var destination = $(el).offset().top;
		 $('body, html').animate({scrollTop: destination}, 1000);    	
	});     
});	

//stiky nav

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


