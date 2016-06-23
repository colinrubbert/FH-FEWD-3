$(function() {
  aboutSlider();
  portfolioSlider();
});

//Function to open and close the about section slider
function aboutSlider() {
  $('#about .section-title').click(function(e) {
    e.preventDefault();
    $('#about-section-slider').slideToggle(300);
  });

  $('.about-link').click(function(e) {
    e.preventDefault();
    $('#about-section-slider').slideToggle(300);
  });
}

//Function to open and close the about section slider
function portfolioSlider() {
  $('#portfolio .section-title').click(function(e) {
    e.preventDefault();
    $('#portfolio-section-slider').slideToggle(300);
  });

  $('.portfolio-link').click(function(e) {
    e.preventDefault();
    $('#portfolio-section-slider').slideToggle(300);
  });
}
