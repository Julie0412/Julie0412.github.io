$(document).on("click",".down", function() {
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({scrollTop: top}, 3000);
});
$(document).on("click",".show-menu", function() {
     $('.mobile-menu').toggleClass('hidden');
 });


function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
}
$(document).on('click', '#submit-form', function(e){
        e.preventDefault();

        this_form = $(this).closest('form');
        prevent_send = false;
        error_text = "";


        email =  str = this_form.find('input[name="email"]').val();
        if(!validateEmail(email)){
                prevent_send = true;
                error_text += "Wrong e-mail! \n";
        }
        if(prevent_send) {
                alert(error_text);
        } else {
                var form_data = $('#form').serializeArray();
                $.ajax({
                        type: "POST",
                        url: '/',
                        data: form_data, // serializes the form's elements.
                        dataType: 'json',
                        success: function(data)
                        {
                                if(data.result_send) {
                                        $('.form-block').addClass('hidden');
                                        $('.thanks').removeClass('hidden');
                                        $('.thanks_text').html(data.result_send);
                                }
                                $('input[name="csrf"]').val(data.new_token);
                        },
                        error: function(){
                                alert('Ajax sending error');
                        }
                });
        }
});
