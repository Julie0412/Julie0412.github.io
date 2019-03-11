
var elm = document.getElementById('all');
var coeff = document.body.clientWidth / elm.offsetWidth;
if (coeff > 1)
    coeff = 1;
//    if (coeff < 0.6)
//        coeff = 0.6; 
if (coeff != 1.0) {
    if (navigator.userAgent.indexOf('Firefox') != -1)
        elm.style.boxShadow = 'none';
    elm.style.transform = 'scale(' + coeff + ')';
}


$(function () {

    /*
     *  Полифил для SVG в IE
     */

    svg4everybody();

    /*
     *  Fix menu
     */

    let menuOffset = $('.menu').offset().top - 10;

    $(window).scroll(function () {
        let menu = $('.menu');
        let desc = $('.desc');
        let fromTop = $(window).scrollTop();

        if (fromTop > menuOffset) {
            menu.addClass('fixed');
            desc.addClass('fixed');
        } else {
            menu.removeClass('fixed');
            desc.removeClass('fixed');
        }
    });

    /*
     *  Banner
     */

    $('.desc').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    /*
     *  Слайдер упаковки 
     */

    $('.pack__carousel').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '',
        nextArrow: '<button class="next" type="button"><span>Следующий слайд</span><img src="img/icons/arr-next.png"></button>'
    });

    /*
     *  Modal
     */

    $('.js-modal-show').on('click', function () {
        var currentModal = $(this).attr('href');
        $(currentModal).fadeIn(500);
        $('body').append('<div class="overlay" id="js-overlay"></div>');
    });

    $('.js-modal-close').on('click', function (e) {
        e.preventDefault();
        $('.js-modal').fadeOut(100);
        $('#js-overlay').remove();
    });

    $('body').on('click', '#js-overlay', function () {
        $('.js-modal').fadeOut(100);
        $('#js-overlay').remove();
    });

    /*
     *   Маска телефона
     */

    $('.phone').mask('+7 (999) 999-99-99');

    /*
     *  Плавный скрол
     */

    $('.js-anchor').click(function () {
        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top;
        $('html,body').animate({scrollTop: destination}, 1100);
        return false;
    });

    /*
     *  Развертывание контактов
     */

    $('.contacts__more').click(function (e) {
        e.preventDefault();
        let $this = $(this);

        if ($this.hasClass('open')) {
            $this.siblings('.contacts__hidden').slideUp();
            $this.removeClass('open').find('span').html('Развернуть');
        } else {
            $this.siblings('.contacts__hidden').slideDown();
            $this.addClass('open').find('span').html('Свернуть');
        }
    });



});



/*
 *  Animation
 */

new WOW().init();

/*
 *  Slider before/after
 */

document.querySelectorAll('.cocoen').forEach(function (element) {
    new Cocoen(element);
});


$(document).ready(function(){
    $(document).on("click",".arrow__to-top", function() {

        $('body,html').animate({scrollTop: 0}, 2000);
    });
});

$(function() {
    $('body').on("mousewheel", function() {
        nav_offset_top = 700;
        point =  $(document).scrollTop() +  $('.menu.fixed').height() - $('.nav-list').height();
        if(point >= nav_offset_top) {
            $('.menu').hide();
            $('.nav-list').addClass('fixed');
        } else {
            $('.menu').show();
            $('.nav-list').removeClass('fixed');
        }
    });
});
