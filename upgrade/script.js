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

$(document).on('click', '.show-menu', function() {
    $('.menu').removeClass('hidden');
    $(this).hide();

});
$(document).on('click', '.close', function() {
    $('.menu').addClass('hidden');
    $('.show-menu').show();

});