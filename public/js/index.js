
// Wait for window load
$(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
        })


$(document.getElementById('scrollToAbout')).click(function() {
	$('html, body').animate({
		scrollTop: $(document.getElementById('about')).offset().top }, 800);
});

$(document.getElementById('scrollToProjects')).click(function() {
	$('html, body').animate({
		scrollTop: $(document.getElementById('projects')).offset().top   }, 800);
});

$(document.getElementById('scrollToContact')).click(function() {
	$('html, body').animate({
		scrollTop: $(document.getElementById('contact')).offset().top  }, 800);
});

$(document.getElementById('downArrow')).click(function() {
	$('html, body').animate({
		scrollTop: $(document.getElementById('about')).offset().top  }, 800);
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


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 70;

$(window).scroll(function(event){
	didScroll = true;
});

setInterval(function() {
	if (didScroll) {
		hasScrolled();
		didScroll = false;
	}
}, 250);

function hasScrolled() {
	var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta){
    	return;
    }

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#nav_bar').removeClass('is-visible').addClass('is-hidden');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
        	$('#nav_bar').removeClass('is-hidden').addClass('is-visible');
        }
    }
    
    lastScrollTop = st;
}



$(function () {
    $('#shownav').hover(function () {
        $('#nav_bar').removeClass('is-hidden');
    });
});

/* when navbar is hovered over it will override previous */

$(function () {
    $('.navbar').hover(function () {
        $('#nav_bar').removeClass('is-hidden');
    }, function () {
        $('#nav_bar').addClass('is-hidden');
    });
});


