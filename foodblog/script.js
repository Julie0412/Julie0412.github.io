/*$(document).on('click', function (e) {
    var menu_button = $('.header-menu-mobile');
    var menu = $('.menu-mobile');
    var close = $('.button-close');

    if($(e.target).is(menu_button)){
        menu.addClass('visible');
    }
    if($(e.target).is(close)) {
        menu.removeClass('visible');
    }
});
*/
$(document).on('click', '.header-menu-mobile', function() {
    $('.menu-mobile').addClass('visible');

});
$(document).on('click', '.button-close', function() {
    $('.menu-mobile').removeClass('visible');

});





