// Scroll on buttons //
$(document).ready(function() {

$('.js--scroll-to-store-page').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-store-page').offset().top}, 1000);
});

$('.js--scroll-to-about-page').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-about-page').offset().top}, 1000);
});

$('.js--scroll-to-contact-page').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-contact-page').offset().top}, 1000);
});


// Animations on scroll
$('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeInUp');
}, {
    offset: '50%'



});

});





