// Scroll on buttons //
$(document).ready(function() {

    $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname)
    {var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1300);
      return false;
            }
        }
    });
});

$('.js--scroll-to-store-page').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-store-page').offset().top}, 1300);
});

$('.js--scroll-to-about-page').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-about-page').offset().top}, 1300);
});

$('.js--scroll-to-contact-page').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-contact-page').offset().top}, 1300);
});


// Animations on scroll
$('.js--wp-1').waypoint(function() {
    $('.js--wp-1').addClass('animated fadeIn');
})



});





