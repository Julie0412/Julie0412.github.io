var owl1 = $('.owl-1');
owl1.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    items: 1
});

$('.next').click(function() {
    owl1.trigger('next.owl.carousel');
});

$('.prev').click(function() {
    owl1.trigger('prev.owl.carousel');
});

var owl2 = $('.owl-2');
owl2.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    items: 1
});

$('.next-2').click(function() {
    owl2.trigger('next.owl.carousel');
});

$('.prev-2').click(function() {
    owl2.trigger('prev.owl.carousel');
});

var owl3 = $('.owl-3');
owl3.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    items: 1
});

$('.next-3').click(function() {
    owl3.trigger('next.owl.carousel');
});

$('.prev-3').click(function() {
    owl3.trigger('prev.owl.carousel');
});

var owl4 = $('.owl-4');
owl4.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    items: 1
});

$('.next-4').click(function() {
    owl4.trigger('next.owl.carousel');
});

$('.prev-4').click(function() {
    owl4.trigger('prev.owl.carousel');
});

$(document).on('click', '.show-menu, .close-menu', function() {
    $('.menu').toggleClass('hidden');
});

$(document).on('click', '.animated', function() {
    $(this).toggleClass('rotate');
});



$(document).on("click",".show-form", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });



