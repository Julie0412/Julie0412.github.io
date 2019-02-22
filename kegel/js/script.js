
$(document).on('click', '.top-menu li', function() {
    $('.modal-menu').removeClass('hidden');
    $('body').css('overflow', 'hidden');
});





$(document).on('click', '.video-1', function() {
    $('.modal-video-1').removeClass('hidden');
});
$(document).on('click', '.video-2', function() {
    $('.modal-video-2').removeClass('hidden');
});
$(document).on('click', '.video-3', function() {
    $('.modal-video-3').removeClass('hidden');
});
$(document).on('click', '.video-4', function() {
    $('.modal-video-4').removeClass('hidden');
});
$(document).on('click', '.video-5', function() {
    $('.modal-video-5').removeClass('hidden');
});
$(document).on('click', '.video-6', function() {
    $('.modal-video-6').removeClass('hidden');
});










$(document).on('click', '.consult-question', function() {
    $(this).closest('.consult').find('.consult-answer').toggleClass('hidden');

});

$(document).on('click', '.show-menu', function() {

    $('.mobile-menu').toggleClass('hidden');

});

$(document).on('click', '.close-modal', function() {

    $('.modal-bg').addClass('hidden');


});

$("body").click(function(e) {
    if($(e.target).closest(".modal-inner").length==0) {
        $(".modal-bg").addClass('hidden');
        $('body').css('overflow', 'auto');
    }
});
$(document).on('click', '.problem img', function() {
    $(this).closest('.problem').find('.problem-description').removeClass('hidden');

});

$("body").click(function(e) {
    if($(e.target).closest(".problem-description").length==0) {
        $(".problem-description").addClass('hidden');
    }
});

function owl1_init() {
    var owl1 = $('.oc-1');
    owl1.owlCarousel({
        loop: false,
        dots: false,
        nav: false,
        items: 1
    })
}

$(document).ready(function(){
    if ( $(window).width() <= 420 ) {
        owl1_init();
    }
});


$(window).resize(function() {
    if ( $(window).width() > 420 ) {
        $('.oc-1').owlCarousel('destroy');
    } else {
        owl1_init();
    }

});
var owl2 = $('.oc-2');
owl2.owlCarousel({
    items: 3,
    loop: false,
    dots: false,
    nav: false,
    slideBy: 3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:3,
            nav:false
        }

    }

});

var owl3 = $('.oc-3');
owl3.owlCarousel({
    loop: false,
    dots: false,
    nav: false,
    items: 3,
    slideBy: 3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768:{
            items:3,
            nav:false
        }

    }
});



owl2.on('changed.owl.carousel', function(event) {
    move_per_item = 75 / (event.item.count - event.page.size);
    percent_plus = move_per_item * event.item.index;
    $('#sg1').css('left', percent_plus + '%');
});




owl3.on('changed.owl.carousel', function(event) {
    move_per_item = 75 / (event.item.count - event.page.size);
    percent_plus = move_per_item * event.item.index;
    $('#sg2').css('left', percent_plus + '%');
});


$('.owl-3-next').click(function() {
    owl3.trigger('next.owl.carousel');
});

$('.owl-3-prev').click(function() {
    owl3.trigger('prev.owl.carousel');
});
$('.owl-2-next').click(function() {
    owl2.trigger('next.owl.carousel');
});

$('.owl-2-prev').click(function() {
    owl2.trigger('prev.owl.carousel');
});







