$(document).on('click', '.prices-button', function() {
    var table_index = $(this).attr('data-table-index');
    $('.prices-table').hide();
    $('.prices-table[data-table-index="' + table_index + '"]').show();
    $('.prices-button').removeClass('active');
    $(this).addClass('active');

});