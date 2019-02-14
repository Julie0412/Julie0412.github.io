$(document).ready(function(){
    $(".scroll-to-bottom").on("click", function (event) {
        event.preventDefault();
        $('body,html').animate({scrollTop: $('.request__bottom').offset().top}, 1000);
    });
});
