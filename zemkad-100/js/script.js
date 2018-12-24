/**
 * Created by julyaosipova on 22/12/2018.
 */



window.calculator = {
    'type' : 'house',
    'meters' : 0,
    'service' : 'service3',
    'region' : 'msk',
    'multiplier' : 1,
    'parts': 0,
    'parts_multiplier': 0,
    'total' : 0,
    'price_table' : [
        {
            "area": 200,
            "price": 12000
        },
        {
            "area": 300,
            "price": 13000
        },
        {
            "area": 400,
            "price": 14000
        },
        {
            "area": 500,
            "price": 15000
        },
        {
            "area": 600,
            "price": 16000
        },
        {
            "area": 700,
            "price": 17000
        },
        {
            "area": 800,
            "price": 18000
        },
        {
            "area": 900,
            "price": 19000
        },
        {
            "area": 1000,
            "price": 20000
        },
        {
            "area": 1100,
            "price": 21000
        },
        {
            "area": 1200,
            "price": 22000
        },
        {
            "area": 1300,
            "price": 23000
        },
        {
            "area": 1400,
            "price": 24000
        },
        {
            "area": 1500,
            "price": 25000
        },
        {
            "area": 1600,
            "price": 26000
        },
        {
            "area": 1700,
            "price": 27000
        },
        {
            "area": 1800,
            "price": 28000
        },
        {
            "area": 1900,
            "price": 29000
        },
        {
            "area": 2000,
            "price": 30000
        },
        {
            "area": 2100,
            "price": 31000
        },
        {
            "area": 2200,
            "price": 32000
        },
        {
            "area": 2300,
            "price": 33000
        },
        {
            "area": 2400,
            "price": 34000
        },
        {
            "area": 2500,
            "price": 35000
        },
        {
            "area": 2600,
            "price": 36000
        },
        {
            "area": 2700,
            "price": 37000
        },
        {
            "area": 2800,
            "price": 38000
        },
        {
            "area": 2900,
            "price": 39000
        },
        {
            "area": 3000,
            "price": 40000
        },
        {
            "area": 3100,
            "price": 40500
        },
        {
            "area": 3200,
            "price": 41000
        },
        {
            "area": 3300,
            "price": 41500
        },
        {
            "area": 3400,
            "price": 42000
        },
        {
            "area": 3500,
            "price": 42500
        },
        {
            "area": 3600,
            "price": 43000
        },
        {
            "area": 3700,
            "price": 43500
        },
        {
            "area": 3800,
            "price": 44000
        },
        {
            "area": 3900,
            "price": 44500
        },
        {
            "area": 4000,
            "price": 45000
        },
        {
            "area": 4100,
            "price": 45500
        },
        {
            "area": 4200,
            "price": 46000
        },
        {
            "area": 4300,
            "price": 46500
        },
        {
            "area": 4400,
            "price": 47000
        },
        {
            "area": 4500,
            "price": 47500
        },
        {
            "area": 4600,
            "price": 48000
        },
        {
            "area": 4700,
            "price": 48500
        },
        {
            "area": 4800,
            "price": 49000
        },
        {
            "area": 4900,
            "price": 49500
        },
        {
            "area": 5000,
            "price": 50000
        },
        {
            "area": 5100,
            "price": 50500
        },
        {
            "area": 5200,
            "price": 51000
        },
        {
            "area": 5300,
            "price": 51500
        },
        {
            "area": 5400,
            "price": 52000
        },
        {
            "area": 5500,
            "price": 52500
        }
    ]
};

function calculate() {
    calculator.meters = $('#meters').val();
    calculator.type = $('#type').val();
    calculator.service = $('#service').val();
    calculator.region = $('#region').val();
    calculator.parts = $('#parts').val();

    if(calculator.region == 'msk'){
        calculator.multiplier = 1;
    } else if (calculator.region == 'mo'){
        calculator.multiplier = 1.2;
    } else {
        calculator.multiplier = 1;
    }
    if(calculator.service == "service1") {
        calculator.parts_multiplier = 5000;
    } else if (calculator.service == "service2") {
        calculator.parts_multiplier = 3000;
    } else  {
        calculator.parts_multiplier = 0;
    }

    if(calculator.type == 'flat') {
        calculator.total = 10000;
    }else {
        i = 0;
        area_price = 0;
        len_t = calculator.price_table.length;
        for (var k in calculator.price_table){
            if(calculator.price_table.hasOwnProperty(k)){
                cur = calculator.price_table[k];
                if(i == 0 && calculator.meters <= cur.area){
                    area_price = cur.price;
                    break;
                }
                if(i == len_t - 1 && calculator.meters >= cur.area){
                    area_price = cur.price;
                    break;
                }
                if(i > 0 && calculator.meters >= prev.area && calculator.meters < cur.area){
                    area_price = prev.price;
                    break;
                }
                prev = cur;
                i++;
            }
        }
        console.log(area_price);

        if(calculator.parts > 0){
            calculator.total = area_price + calculator.parts * calculator.parts_multiplier;
        } else {
            calculator.total = area_price;
        }

    }
    if(calculator.service == "service6"){
        calculator.total = 2000;
    }
    calculator.total = calculator.multiplier * calculator.total;
    $('#price').val(calculator.total);
}

$('#meters').on('keyup', function () {
    calculate();
});
$('#parts').on('keyup', function () {
    calculate();
});

$('#service').on('change', function () {
     if($(this).val() == 'service1' || $(this).val() == 'service2') {
         $('#parts').closest('label').removeClass('hidden');
     } else {
         $('#parts').closest('label').addClass('hidden');
         $('#parts').val(0);
     }
    calculate();
});

$('#region').on('change', function () {
    calculate();
});
$('#type').on('change', function () {
    calculate();
});

$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup').removeClass('hidden');
    $('body').addClass('overflow');
});


$('.close').click(function(e) {
    e.preventDefault();
    $('.popup').addClass('hidden');
    $('body').removeClass('overflow');
});

$('.close').click(function(e) {
    e.preventDefault();
    $('.popup-leave').addClass('hidden');
    $('body').removeClass('overflow');
});

$(document).on('click', function(e) {
    if($(e.target).is('.popup')
        && !$(e.target).is('.popup-content')
        && !$(e.target).is('.open-popup')
    )
    {
        $('.popup').addClass('hidden');
        $('body').removeClass('overflow');
    }
});
$(document).on('click', function(e) {
    if($(e.target).is('.popup-leave')
        && !$(e.target).is('.popup-content')
        && !$(e.target).is('.open-popup')
    )
    {
        $('.popup-leave').addClass('hidden');
        $('body').removeClass('overflow');
    }
});

// функция возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
var alertwin = getCookie("alertwin");
if (alertwin != "no") {
    $(document).mouseleave(function(e){
        if (e.clientY < 0) {
            $(".popup-leave").removeClass('hidden');
            // записываем cookie на 1 день, с которой мы не показываем окно
            var date = new Date;
            date.setDate(date.getDate() + 1);
            document.cookie = "alertwin=no; path=/; expires=" + date.toUTCString();
        }
    });}


$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        dots: true,
        dotsEach:1,
        items: 1

        })

    });

if ( $(window).width() > 769 ) {
    var owlActive = owl.owlCarousel(owlOptions);
} else {
    owl.addClass('off');
}

$(window).resize(function() {
    if ( $(window).width() > 769 ) {
        if ( $('.owl-carousel').hasClass('off') ) {
            var owlActive = owl.owlCarousel(owlOptions);
            owl.removeClass('off');
        }
    } else {
        if ( !$('.owl-carousel').hasClass('off') ) {
            owl.addClass('off').trigger('destroy.owl.carousel');
            owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
    }
});
});


$('.service-list li').click(function () {
    $('.service-list li').removeClass('active');
    $(this).addClass('active');
    $('.service-description').addClass('hidden');
    var data_index = $(this).attr('data-index');
    $('.service-description[data-index="'+data_index+'"]').removeClass('hidden').addClass('active');
});

$('.expand').click(function(){
    answer_div = $(this).closest('.question').next();
    answer_div.toggleClass('hidden');
});