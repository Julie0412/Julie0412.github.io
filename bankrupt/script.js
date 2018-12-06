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
        items: 3,
        dots: true,
        dotsEach:1

        })

    });


