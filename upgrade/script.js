/* sliders */

$('.oc-1').owlCarousel({
    loop: false,
    dots: true,
    nav: false,

    dotsEach:1,
    items: 1

});
$('.oc-2').owlCarousel({
    loop: false,
    dots: false,
    nav: true,
    startPosition: 1,
    items: 1


});
$('.oc-3').owlCarousel({
    loop: false,
    dots: true,
    nav: false,
    dotsEach:1,
    items: 1

});
$('.oc-4').owlCarousel({
    loop: false,
    dots: false,
    startPosition: 1,
    nav: true,
    items: 1

});



/* search */

$(document).on('click', '.show-search', function(e) {
    e.preventDefault();
    $('.show-menu').addClass('hidden');
    $('.header-logo').addClass('hidden');
    $('.header-search').removeClass('hidden');
    $(this).addClass('hidden');

});

$(document).on('click', '#search-button', function () {
    var text_search = $('#text-to-find').val();
    topset = $(".has-text:contains("+text_search+")").eq(0).offset().top;
    $(document).scrollTop(topset - 30);
});


$(document).on('click', '.close-search', function(e) {
    e.preventDefault();
    $('.show-menu').removeClass('hidden');
    $('.header-logo').removeClass('hidden');
    $('.show-search').removeClass('hidden');
    $('.header-search').addClass('hidden');
});
/* open info, menu*/

$(document).on('click', '.show-menu', function() {
    $('.menu').removeClass('hidden');
    $(this).hide();

});
$(document).on('click', '.close', function() {
    $('.menu').addClass('hidden');
    $('.show-menu').show();

});

$(document).on('click', '.more-info', function(e) {
    e.preventDefault();
    $('.about-text').removeClass('hidden');
    $('.close-info').removeClass('hidden');
    $(this).addClass('hidden');


});
$(document).on('click', '.close-info', function(e) {
    e.preventDefault();
    $('.about-text').addClass('hidden');
    $('.more-info').removeClass('hidden');
    $(this).addClass('hidden');

});

/* phone number mask */

$(function(){

    $("#contact-tel").mask("+7(999)999-9999");
});

$(function(){

    $("#check-tel").mask("+7(999)999-9999");
});