$(document).on('click','.show-practice', function () {
    $('.pop-up-practice-first').show();
});
$(document).on('click', function (e) {
    debugger;
    if( $('.pop-up-practice-first:visible').length > 0
        && $(e.target).closest('.pop-up-practice-first').length == 0
        && !$(e.target).is('.pop-up-practice-first')
        && !$(e.target).is('.show-practice')
    )
    {
        $('.pop-up-practice-first').hide();
    }

});