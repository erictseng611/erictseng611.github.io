
// Wait for window load
$(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
        })


$(document.getElementById('scrollToAbout')).click(function() {
	$('html, body').animate({
		scrollTop: $(document.getElementById('about')).offset().top - 66  }, 800);
});

$(document.getElementById('scrollToProjects')).click(function() {
	$('html, body').animate({
		scrollTop: $(document.getElementById('projects')).offset().top - 70  }, 800);
});

$(document.getElementById('scrollToContact')).click(function() {
	$('html, body').animate({
		scrollTop: $(document.getElementById('contact')).offset().top - 70  }, 800);
});

$(document.getElementById('downArrow')).click(function() {
	$('html, body').animate({
		scrollTop: $(document.getElementById('about')).offset().top - 70  }, 800);
});



$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
    $(this).closest('li').addClass('current').siblings().removeClass('current')
});

$('body').scrollspy({
	target: '#nav_bar',
	offset: 400
});

