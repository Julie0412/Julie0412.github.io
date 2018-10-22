$(document).on('click', function (e) {
    var menu = $('.menu ul');
    var close = $('.close img');

    if($(e.target).is('.menu-img')){
        menu.toggleClass('visible');
    }
    if($(e.target).is(close)) {
        menu.removeClass('visible');
        menu.addClass('not-visible');
    }


});

$(document).on('mouseenter', '.work', function() {
    $(this).find('.work-hover').addClass('work-on');
});
$(document).on('mouseleave', '.work', function() {
    $(this).find('.work-hover').removeClass('work-on');
});

$(document).on('click', '.open-full', function() {
    $(this).closest('.post-preview').next().show();
    $(this).hide();
});

$(document).on('click', '.more-posts', function() {
    $('.blog-posts').find('.post.third-post').toggleClass('see-full');
});




