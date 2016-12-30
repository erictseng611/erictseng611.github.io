$(document.getElementById('scrollToAbout')).click(function() {
     $('html, body').animate({
         scrollTop: $(document.getElementById('about')).offset().top - 70  }, 800);
 });

$(document.getElementById('scrollToProjects')).click(function() {
     $('html, body').animate({
         scrollTop: $(document.getElementById('projects')).offset().top - 70  }, 800);
 });

$(document.getElementById('scrollToContact')).click(function() {
     $('html, body').animate({
         scrollTop: $(document.getElementById('contact')).offset().top - 70  }, 800);
 });


$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
    $(this).closest('li').addClass('current').siblings().removeClass('current')
});

$('body').scrollspy({
  target: '#nav_bar',
  offset: 70
});