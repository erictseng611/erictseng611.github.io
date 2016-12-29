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
});


 <div class="container">
      <h1>Hi! I'm Eric Tseng. I am an aspiring UI/UX Designer and front-end web developer. </h1>
    </div>
    <div class="container" id="aboutInfo">
      <h4> I am currently a third year student at the University of California, San Diego majoring in Cognitive Science w/ a specialization in Human Computer Interaction and a minor in Computer Science. </h4>
    </div>