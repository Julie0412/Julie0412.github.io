$(document).on('click', function (e) {
    var menu = $('.menu ul');
    var close = $('.close img')

    if($(e.target).is('.menu-img')){
        menu.toggleClass('visible');
    }
    if($(e.target).is(close)) {
        menu.removeClass('visible');
        menu.addClass('not-visible');
    }


});


