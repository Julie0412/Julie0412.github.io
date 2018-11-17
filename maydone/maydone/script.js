$(document).ready(function(){
    $(".owl-carousel").owlCarousel( {
        loop: true,
        items: 1

    })
});


$('.next').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
});
$('.prev').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
});