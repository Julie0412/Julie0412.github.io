var overlay = document.querySelector(".overlay");
var overlay_2 = document.querySelector(".overlay-2");
var modal = document.querySelector(".call");
var thanks = document.querySelector(".thanks");
var modalButton = document.querySelector(".call__submit");
var closeButton = document.querySelector(".call__close");
var closeThanks = document.querySelector(".thanks__close");
var buyButton = document.querySelectorAll(".main-order__btn, .main-contacts__btn, .intro-mobile-button");

$(document).on('click', '.modal-case__close', function(){
  $(this).closest('.case-overlay').removeClass('case-overlay__first--on');
});
$(document).on('click', '.modal-case__close', function(){
  $(this).closest('.case-overlay').removeClass('case-overlay__second--on');
});

if (overlay) {
  for (var i = 0; i < buyButton.length; i++) buyButton[i].addEventListener("click", function(event) {
    //event.preventDefault();
    overlay.classList.add("overlay--on");
  });

  overlay.addEventListener("click", function() {
    overlay.classList.remove("overlay--on");
  });

  modal.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  modalButton.addEventListener("submit", function() {
    overlay.classList.remove("overlay--on");
    overlay_2.classList.add("overlay-2--on");
  });

  closeButton.addEventListener("click", function() {
    overlay.classList.remove("overlay--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      overlay.classList.remove("overlay--on");
    }
  });
}

var overlay_2 = document.querySelector(".overlay-2");
var thanks = document.querySelector(".thanks");
var buyButton = document.querySelectorAll(".form-list__btn");
var buyButton_2 = document.querySelectorAll(".case-form__btn");
var closeThanks = document.querySelector(".thanks__close");

if (overlay_2) {
  for (var i = 0; i < buyButton.length; i++) buyButton[i].addEventListener("click", function(event) {
   // event.preventDefault();
    overlay_2.classList.add("overlay-2--on");
  });

  overlay_2.addEventListener("click", function() {
    overlay_2.classList.remove("overlay-2--on");
  });

  thanks.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeThanks.addEventListener("click", function() {
    overlay_2.classList.remove("overlay-2--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      overlay_2.classList.remove("overlay-2--on");
    }
  });
}

if (overlay_2) {
  for (var i = 0; i < buyButton_2.length; i++) buyButton_2[i].addEventListener("click", function(event) {
    //event.preventDefault();
    overlay_2.classList.add("overlay-2--on");
  });

  overlay_2.addEventListener("click", function() {
    overlay_2.classList.remove("overlay-2--on");
  });

  thanks.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeThanks.addEventListener("click", function() {
    overlay_2.classList.remove("overlay-2--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      overlay_2.classList.remove("overlay-2--on");
    }
  });
}

var overlaySearch_1 = document.querySelector(".case-overlay__first");
var overlaySearch_2 = document.querySelector(".case-overlay__second");
var modalSearch = document.querySelector(".modal-case");
var closeButton = document.querySelector(".modal-case__close");
var openButton_1 = document.querySelectorAll(".case-details__btn--first");
var openButton_2 = document.querySelectorAll(".case-details__btn--second");


  $(document).on('click', '.case-details__btn--first', function (event) {
    event.preventDefault();
    $(".case-overlay__first").addClass("case-overlay__first--on");
  });


    $(document).on('click', '.case-details__btn--second', function(event){
      event.preventDefault();
      $(".case-overlay__second").addClass("case-overlay__second--on");
    });
  // for (var i = 0; i < openButton_1.length; i++) openButton_1[i].addEventListener("click", function(event) {
  //   event.preventDefault();
  //   overlaySearch_1.classList.add("case-overlay__first--on");
  // });

  overlaySearch_1.addEventListener("click", function() {
    overlaySearch_1.classList.remove("case-overlay__first--on");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });



  // closeButton.addEventListener("click", function() {
  //   overlaySearch_1.classList.remove("case-overlay__first--on");
  // });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      overlaySearch_1.classList.remove("case-overlay__first--on");
    }
  });


if (overlaySearch_2) {
  for (var i = 0; i < openButton_2.length; i++) openButton_2[i].addEventListener("click", function(event) {
    event.preventDefault();
    overlaySearch_2.classList.add("case-overlay__second--on");
  });

  overlaySearch_2.addEventListener("click", function() {
    overlaySearch_2.classList.remove("case-overlay__second--on");
  });

  modalSearch.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  closeButton.addEventListener("click", function() {
    overlaySearch_2.classList.remove("case-overlay__second--on");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      overlaySearch_2.classList.remove("case-overlay__second--on");
    }
  });
}


$(function(){
    $(".thanks__close").click(function(){
            $(".overlay").removeClass("overlay--on");
        
    });
});



$(document).ready(function() {
  if ( $(window).width() < 420 ) {
    startCarousel();
  } else {
    $('.owl-carousel').removeClass('owl-carousel');
  }
});

$(window).resize(function() {
  if ( $(window).width() < 420 ) {
    startCarousel();
  } else {
    stopCarousel();
  }
});

function startCarousel(){
  $(".owl-carousel").owlCarousel({
    slideSpeed : 500,
    margin:10,
    autoplay: false,
    items : 1,
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false,
    loop:true

  });
}
function stopCarousel() {
  var owl = $('.owl-carousel');
  owl.trigger('destroy.owl.carousel');
  owl.removeClass('owl-carousel');
}
$('.next').click(function() {
  $('.owl-carousel').trigger('next.owl.carousel');
});
$('.prev').click(function() {
  $('.owl-carousel').trigger('prev.owl.carousel');
});



/*
$(document).ready(function() {
  $('input#name1, input#tel1').unbind().blur(function() {
    var id = $(this).attr('id');
    var val = $(this).val();

    switch (id) {
      case 'name1':
        var rv_name = /^[a-zA-Zа-яА-Я]+$/;
        if (val.length > 2 && val != '' && rv_name.test(val)) {
          $(this).addClass('not_error')
            .css('border', '2px solid green');
          $(this).next('.call-list__error')
            .css('display', 'none');
        } else {
          $(this).removeClass('not_error').addClass('error')
            .css('border', '2px solid red');
          $(this).next('.call-list__error').html('поле "Имя" обязательно для заполнения,<br>длина имени должна составлять не менее 2 символов,<br> поле должно содержать только русские или латинские буквы')
            .css('color', 'red')
            .animate({
              'paddingLeft': '10px'
            }, 400)
            .animate({
              'paddingLeft': '5px'
            }, 400);
        }
        break;

      case 'tel1':
        var rv_phone = /^\d[\d\(\)\ -]{4,14}\d$/;
        if (val.length > 7 && val != '' && rv_phone.test(val)) {
          $(this).addClass('not_error')
            .css('border', '2px solid green');
          $(this).next('.call-list__error')
            .css('display', 'none');
        } else {
          $(this).removeClass('not_error').addClass('error')
            .css('border', '2px solid red');
          $(this).next('.call-list__error').html('поле "Номер телефона обязателен к заполнению')
            .css('color', 'red')
            .animate({
              'paddingLeft': '10px'
            }, 400)
            .animate({
              'paddingLeft': '5px'
            }, 400);
        }
        break;
    }
  });

  $('form#call-popup').submit(function(e) {
    if ($('.not_error').length == 2) {
      $.ajax({
        url: 'send.php',
        type: 'post',
        data: $(this).serialize(),

        beforeSend: function(xhr, textStatus) {
          $('form#call-popup :input').attr('disabled', 'disabled');
        },

        success: function(response) {
          $('form#call-popup :input').removeAttr('disabled');
          $('form#call-popup :text').val('').removeClass().next('.call-list__error').text('');
          alert(response);
        }
      });
    } else {
      return false;
    }
  });
});
*/
