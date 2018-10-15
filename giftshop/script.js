

/*b.onclick = function () {
    a.classList.toggle('mobile-menu');
}; */

$(document).on('click', function (e) {
    var header_bottom = $('.header-bottom');

    if($(e.target).is('.mobile-button')){
        header_bottom.toggleClass('mobile-menu');
    }
    if($(e.target).closest('.mobile-menu').length == 0 && !$(e.target).is('.mobile-button')) {
        header_bottom.removeClass('mobile-menu');
    }


});

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var event_enter = iOS ? 'touchstart' : 'mouseenter';
var event_leave = iOS ? 'touchend' : 'mouseleave';

$(document).on(event_enter, '.men, .women, .kids, .crafts, .jewelry', function () {
    $(this).find("a").eq(0).addClass('go-to');
});

$(document).on(event_leave, '.men, .women, .kids, .crafts, .jewelry', function () {
    $(this).find("a").eq(0).removeClass('go-to');
});

$(document).on(event_enter, '.product', function () {
    $(this).find("img").eq(0).addClass('hover');
    $(this).find("div").eq(0).addClass('product-buttons');
});

$(document).on(event_leave, '.product', function () {
    $(this).find("img").eq(0).removeClass('hover');
    $(this).find("div").eq(0).removeClass('product-buttons');
});







$(document).on('focusin', '#search', function () {
   $(this).closest('.search').toggleClass('search-full');
});

$(document).on('focusout', '#search', function () {
    $(this).closest('.search').toggleClass('search-full');
});


$(document).ready(function(){
    var owl = $('.owl-carousel-1');
    owl.owlCarousel({
        loop: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            }

    }

    });

    $('.customNextBtn').click(function(e) {
        e.preventDefault();
        owl.trigger('next.owl.carousel');
    });
    $('.customPrevBtn').click(function(e) {
        e.preventDefault();
        owl.trigger('prev.owl.carousel');
    });

    var owl2 = $('.owl-carousel-2');
    owl2.owlCarousel({
        loop: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            }
        }

    });

    $('.customNext').click(function(e) {
        e.preventDefault();
        owl2.trigger('next.owl.carousel');
    });
    $('.customPrev').click(function(e) {
        e.preventDefault();
        owl2.trigger('prev.owl.carousel');
    });



});




/*$(document).on('click', '.class', function () {

}); */