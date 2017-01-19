
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



$(document).ready(function(){

/** ===========================================
    Hide / show the master navigation menu
============================================ */

  // console.log('Window Height is: ' + $(window).height());
  // console.log('Document Height is: ' + $(document).height());

  var previousScroll = 0;

  $(window).scroll(function(){

    var currentScroll = $(this).scrollTop();

    /*
      If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
    */
    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()){
      /*
        If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
      */
      if (currentScroll > previousScroll){
        window.setTimeout(hideNav, 100);
      /*
        Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
      */
      } else {
        window.setTimeout(showNav, 100);
      }
      /* 
        Set the previous scroll value equal to the current scroll.
      */
      previousScroll = currentScroll;
    }

  });

  function hideNav() {
    $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
  }
  function showNav() {
    $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
  }

});

