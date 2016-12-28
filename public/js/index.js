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
