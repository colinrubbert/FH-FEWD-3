$(function() {
  hideSliders();
  toggleMenu();
  aboutSlider();
  portfolioSlider();
  testimonialSlider();
  contactSlider();
  closeMenu();
});


//Function to hide all sliders
function hideSliders() {
  $('#about-section-slider, #portfolio-section-slider, #testimonial-section-slider, #contact-section-slider').hide();
}

// Function to open and close menu
function toggleMenu() {
  $('.navigation-menu-toggle .menu').click(function(e) {
    e.preventDefault();
    $('#navigation-container, .menu, .close').addClass('toggle');
  });
  $('.navigation-menu-toggle .close').click(function(e) {
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

//Function to open and close the portfolio section slider
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

//Function to open and close the testimonial section slider
function testimonialSlider() {
  $('#testimonial .section-title').click(function(e) {
    e.preventDefault();
    $('#testimonial-section-slider').slideToggle(300);
  });

  $('.testimonial-link').click(function(e) {
    e.preventDefault();
    $('#testimonial-section-slider').slideToggle(300);
  });
}

//Function to open and close the contact section slider
function contactSlider() {
  $('#contact .section-title').click(function(e) {
    e.preventDefault();
    $('#contact-section-slider').slideToggle(300);
  });

  $('.contact-link').click(function(e) {
    e.preventDefault();
    $('#contact-section-slider').slideToggle(300);
  });
}

// Function to close the menu when clicked on navigation link or outside of navigation
function closeMenu() {
  $('.navigation-link, #body-content-container').on('click', function(){
    $('#navigation-container, .menu, .close').removeClass('toggle');
  });
}
