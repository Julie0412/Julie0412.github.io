$(document).ready(function(){
    $(".scroll-to-bottom").on("click", function (event) {
        event.preventDefault();
        $('body,html').animate({scrollTop: $('.request__bottom').offset().top}, 1000);
    });
});

$(document).on('click', '.show-call-modal', function() {
    $('.call-form-modal').removeClass('modal-hidden');

});

$(document).on('click', '.close-call-modal', function() {
    $('.call-form-modal').addClass('modal-hidden');

});
