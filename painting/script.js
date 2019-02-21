
$(document).ready(function(){
    $(".header-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).on('click', '.signup-button', function() {
    $('.modal-signup').removeClass('hidden');

});
$(document).on('click', '.close-form', function() {
    $('.modal-form').addClass('hidden');
});
$(document).on('click', '.certificate-button', function() {
    $('.modal-certificate').removeClass('hidden');

});
$(document).on('click', '.faq-more', function() {
    $(this).closest('.faq').find('.answer').toggleClass('hidden');
    $(this).toggleClass('clicked');
});
$(document).on('click', '.teachers-more', function() {
    $(this).closest('.teacher').find('.teacher-info').toggleClass('mobile-hidden');
    $(this).closest('.teacher').find('.teacher-profession').toggleClass('min');
    $(this).toggleClass('clicked');
});
$(document).on('click', '.show-menu', function() {
    $('.header-menu').toggleClass('mobile-hidden');
});
var owl1 = $('.oc-1');
    owl1.owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    items: 1,
        dotsEach: 1
});
var owl2 = $('.oc-2');
    owl2.owlCarousel({
    loop: true,
    dots: true,
    nav: false,
    items: 1
});


$('.owl-1-next').click(function() {
    owl1.trigger('next.owl.carousel');
});

$('.owl-1-prev').click(function() {
    owl1.trigger('prev.owl.carousel');
});
$('.owl-2-next').click(function() {
    owl2.trigger('next.owl.carousel');
});

$('.owl-2-prev').click(function() {
    owl2.trigger('prev.owl.carousel');
});

function owl3_init() {
    var owl3 = $('.oc-3');
    owl3.owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        dotsEach:1,
        items: 1
    })
}

$(document).ready(function(){
    if ( $(window).width() <= 889 ) {
        owl3_init();
    }
});


$(window).resize(function() {
    if ( $(window).width() > 889 ) {
        $('.oc-3').owlCarousel('destroy');
    } else {
        owl3_init();
    }

});