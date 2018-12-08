
window.scroll_offset = [];
window.cur_page = 0;

function page_toggle() {
    current_offet = $(document).scrollTop();
    last_idx = scroll_offset.length - 1;
    for(var i = 0; i < scroll_offset.length; i++) {
        if(
            current_offet >= scroll_offset[i]
            && last_idx == i
            && cur_page != i
            ||
            current_offet >= scroll_offset[i]
            && current_offet < scroll_offset[i + 1]
            && cur_page != i
        ){
            window.cur_page = i;
            $('.pages-link').eq(i).addClass('active');
            $('.pages-link').not($('.pages-link').eq(i)).removeClass('active');
            break;
        }
    }
}


$(document).ready(function(){
    $("a.pages-link").on("click", function(e){
        var anchor = $(this);
        var idx = $(this).closest('li').prevAll().length;
        $('html, body').stop().animate({
            scrollTop: scroll_offset[idx] + 2
        }, 777, function() {
            setTimeout(page_toggle(), 800);
        });
        e.preventDefault();
        return false;
    });
});




$(function() {
    $('body').on("mousewheel", function() {
        page_toggle();
    });
});



$(document).on('click', '.mobile-button', function() {
    $('.mobile-list').addClass('visible');

});
$(document).on('click', '.mobile-close', function() {
    $('.mobile-list').removeClass('visible');

});




$(document).on('click','.show-practice', function () {
    $('.pop-up-practice-first').show();
});
$(document).on('click', function (e) {
    if( $('.pop-up-practice-first:visible').length > 0
        && $(e.target).closest('.pop-up-practice-first').length == 0
        && !$(e.target).is('.pop-up-practice-first')
        && !$(e.target).is('.show-practice')
    )
    {
        $('.pop-up-practice-first').hide();
    }
    if ($(e.target).is('.show-all-cases'))
    {
        $('.pop-up-practice-first').hide();
        $('.pop-up-practice-second').show();
    }
    if ($(e.target).is('.close-cases')) {
        $('.pop-up-practice-second').hide();
    }

});




$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        dots: true,
        dotsEach:1,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            500:{
                items:3,
                nav:false
            }

        }

        });
    setTimeout(function () {
        $('.scroll-block').each(function(){
            window.scroll_offset.push($(this).offset().top);
        });
        page_toggle();
    }, 100);



});



