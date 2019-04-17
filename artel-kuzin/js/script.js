var owl1 = $('.owl-carousel');
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

$(document).on('click', '.show-product-info', function() {
    $('.product-info').toggleClass('hidden');
});

$(document).on('click', '.question, .more', function() {
    $(this).closest('.faq-element').find('.answer').toggleClass('hidden');
    $(this).closest('.faq-element').find('.more').toggleClass('clicked');
});
