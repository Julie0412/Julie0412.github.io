/**
 * Created by julyaosipova on 20/02/2019.
 */
$(document).on('click', '#reg-confirm-tel', function(e) {
    e.preventDefault();
    $('.registration__password').removeClass('hidden');
    $('.registration__phone').addClass('hidden');

});
$('#time-from').timepicker();
$('#time-to').timepicker();
$('#date' ).datepicker({
    showOn: "button",
    buttonImage: "images/calendar.png",
    buttonImageOnly: true,
    buttonText: "Select date"
});
$(document).on('click', '.show-profile-menu', function(e) {
    e.preventDefault();
    $('.profile-menu').toggleClass('hidden');
    $(this).toggleClass('rotate');


});
