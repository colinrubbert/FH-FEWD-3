$(function() {
  hideSliders();
  toggleMenu();
  aboutSlider();
  portfolioSlider();
});


//Function to hide all sliders
function hideSliders() {
  $('#about-section-slider, #portfolio-section-slider').hide();
}

// Function to open and close menu
function toggleMenu() {
  $('.navigation-menu-toggle .close').click(function(e) {
    e.preventDefault();
    $('#navigation-container, .menu, .close').addClass('toggle');
  });
  $('.navigation-menu-toggle .menu').click(function(e) {
    e.preventDefault();
    $('#navigation-container, .menu, .close').removeClass('toggle');
  });
}

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
