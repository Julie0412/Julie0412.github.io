/**
 * Created by julyaosipova on 20/02/2019.
 */
$(document).on('click', '#reg-confirm-tel', function(e) {
    e.preventDefault();
    $('.registration__password').removeClass('hidden');
    $('.registration__phone').addClass('hidden');


});