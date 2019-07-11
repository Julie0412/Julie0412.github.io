<?php

session_start();
require_once 'classes/token.class.php';
require_once 'classes/mail.class.php';



$is_send = false;
if(isset($_POST['submit']) && Token::check($_POST['csrf'])){
   
    
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
   


    $mail = new Mail;

    // От кого.
    $mail->from('admin@studioizum.ru');

     // Кому, можно указать несколько адресов через запятую.
    $mail->to('esleonteva84@gmail.com');


    // Тема письма.
    $mail->subject = 'Рассылка c сайта';

    if ($_POST['type']=='feedback'){
        $mail->body = '
        <h1>Здравствуйте!</h1>
        <p>На ваш сайт поступила заявка, пожалуйста, свяжитесь с клиентом</p>
        <p>E-mail клиента: '.$email.'</p>
    
       
    ';
    }
    
    else {
        $mail->body = false;
    }

  
    // Отправка.
    if($mail->body !== false) {
        $res = $mail->send();
    }
    if ($res[0] === false) {
        $is_send = "Ошибка отправки (".$res[0].")";
    } else {
        $is_send = 'Заявка успешно отправлена, с Вами свяжутся в ближайшее время';
    }
    
}

$token = Token::generate();
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Студия танца & акробатики
        на пилоне Изюм </title>
    <link rel="stylesheet" href="js/owl.carousel.min.css">
    <link href="style.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=PT+Sans&amp;subset=cyrillic" rel="stylesheet">

    <?php if ($is_send) {?>
        <script>
            alert('Заявка успешно отправлена, с Вами свяжутся в ближайшее время');
        </script>
        <?php } ?>

</head>
<body>
	<!-- Yandex.Metrika counter --> 
<script type="text/javascript"  > 
   (function(m,e,t,r,i,k,a){m[i]= m[i]||function(){(m[i].a=m[i]. a||[]).push(arguments)}; 
   m[i].l=1*new Date();k=e.createElement(t),a= e.getElementsByTagName(t)[0],k .async=1,k.src=r,a.parentNode. insertBefore(k,a)}) 
   (window, document, "script", "mc.yandex.ru/metrika/tag.js" , "ym"); 

   ym(53324575, "init", { 
        clickmap:true, 
        trackLinks:true, 
        accurateTrackBounce:true, 
        webvisor:true 
   }); 
</script> 
<noscript><div><img src="https://mc.yandex.ru/watch/53324575"  style="position:absolute; left:-9999px;" alt="" /></div></noscript > 
<!-- /Yandex.Metrika counter -->
<header>
    <img src="img/logo.png">
    <p>Студия танца & акробатики<br>
        на пилоне <b>Изюм</b> </p>
    <a class="show-menu"></a>
    <ul class="menu hidden">
        <a class="close-menu">&times;</a>
        <li><a href="#why-us">О студии</a></li>
        <li><a href="#types">Направления</a></li>
        <li><a href="#">Расписание</a></li>
        <li><a href="#reviews">Отзывы</a></li>
        <li><a href="#price">Цены</a></li>
        <li><a href="#teachers">Тренерский состав</a></li>
        <li><a href="#contacts">Контакты</a></li>
        </ul>
</header>

<main>
    <section class="first-screen">
        <h1>Почувствуй свободу<br>
            от гравитации, всего<br>
            за месяц мы научим<br>
            тебя летать!</h1>
        <a class="show-form" href="#form">Записаться на бесплатный пробный урок!</a>
        </section>
    <section class="types" id="types">
        <div class="container">
            <div class="owl-1 owl-carousel">
            <div class="type type-1">
                <div class="type-header">
                <h2>Направления</h2>
                <div class="nav">
                    <a class="prev"></a>
                    <a class="next"></a>
                    </div>
                    </div>
                <div class="type-card">
                    <h3>Pole Dance</h3>
                    </div>

                </div>
            <div class="type type-2">
                <div class="type-header">
                    <h2>Направления</h2>
                    <div class="nav">
                        <a class="prev"></a>
                        <a class="next"></a>
                    </div>
                </div>
                <div class="type-card">
                    <h3>Stretching</h3>
                </div>

            </div>
            <div class="type type-3">
                <div class="type-header">
                    <h2>Направления</h2>
                    <div class="nav">
                        <a class="prev"></a>
                        <a class="next"></a>
                    </div>
                </div>
                <div class="type-card">
                    <h3>Body Ballet</h3>
                </div>

            </div>
            <div class="type type-4">
                <div class="type-header">
                    <h2>Направления</h2>
                    <div class="nav">
                        <a class="prev"></a>
                        <a class="next"></a>
                    </div>
                </div>
                <div class="type-card">
                    <h3>Strip Plastica</h3>
                </div>

            </div>
            <div class="type type-5">
                <div class="type-header">
                    <h2>Направления</h2>
                    <div class="nav">
                        <a class="prev"></a>
                        <a class="next"></a>
                    </div>
                </div>
                <div class="type-card">
                    <h3>Art Dance</h3>
                </div>
            </div>
            <div class="type type-6">
                <div class="type-header">
                    <h2>Направления</h2>
                    <div class="nav">
                        <a class="prev"></a>
                        <a class="next"></a>
                    </div>
                </div>
                <div class="type-card">
                </div>

            </div>
            </div>
            </div>
        </section>
    <section class="why-us" id="why-us">
        <div class="container">
            <h2>Почему мы</h2>
            <div class="reason">
                <img src="img/icon1.png" alt="">
                <p>Обучаем по передовым методикам, обеспечивающие 100% результат </p>
                </div>
            <div class="reason">
                <img src="img/icon2.png" alt="">
                <p>Выгодные цены за обучение</p>
                </div>
            <div class="reason">
                <img src="img/icon3.png" alt="">
                <p>Зал оборудован 7 пилонами диаметром 42мм и высотой 4м </p>
            </div>
            <div class="reason">
                <img src="img/icon4.png" alt="">
                <p> Нет возрастных ограничений</p>
            </div>
            <div class="reason">
                <img src="img/icon5.png" alt="">
                <p>Тренеры - победители Городских Чемпионатов, призеры
                    и финалисты Всероссийских и Международных  Соревнований</p>
            </div>
            </div>
        </section>
    <section class="reviews" id="reviews">
        <div class="container">
            <div class="reviews-header">
                <h2>Отзывы</h2>
                <div class="nav">
                    <a class="prev-2"></a>
                    <a class="next-2"></a>
                    </div>
                </div>
            <div class="owl-2 owl-carousel">
                <div class="review">
                    <div class="review-top">
                    <img src="img/review.png" alt="">
                    <p>Занималась в студии<br>
                        у Ольги Недоступовой еще до названия "ИЗЮМ" пришла попробовать себя и... влюбилась! Влюбилась в этот вид спорта, благодаря Ольге всегда поднималось настроение, каждому во время занятий уделялось внимание, что особенно приятно.</p>
                        </div>
                    <p>Каждый раз хотелось бежать
                        на тренировку!И хотя сейчас
                        я временно перестала посещать тренировки из-за появления нового члена семьи, обязательно вернусь именно в студию ИЗЮМ!!!!!<br><br>
                        Ольга Теренкова</p>
                    </div>
            <div class="review">
                <div class="review-top">
                    <img src="img/review.png" alt="">
                    <p>Занималась в студии<br>
                        у Ольги Недоступовой еще до названия "ИЗЮМ" пришла попробовать себя и... влюбилась! Влюбилась в этот вид спорта, благодаря Ольге всегда поднималось настроение, каждому во время занятий уделялось внимание, что особенно приятно.</p>
                </div>
                <p>Каждый раз хотелось бежать
                    на тренировку!И хотя сейчас
                    я временно перестала посещать тренировки из-за появления нового члена семьи, обязательно вернусь именно в студию ИЗЮМ!!!!!<br><br>
                    Ольга Теренкова</p>
            </div>
            </div>
            </div>
        </section>
    <section class="prices" id="price">
        <div class="container">
            <div class="prices-top">
                <h2>Цены</h2>
                <div class="nav">
                    <a class="prev-3"></a>
                    <a class="next-3"></a>
                    </div>
                </div>
            <div class="abonements owl-carousel owl-3">
                <div class="abonement abonement-1">
                    <div class="abonement-card">
                    <h3>Dance Pole</h3>
                    </div>
                    <p>Абонементы <a class="animated"></a></p>
                    </div>
                <div class="abonement abonement-2">
                    <div class="abonement-card">
                        <h3>Dance Pole</h3>
                    </div>
                    <p>Абонементы <a class="animated"></a></p>
                </div>
                </div>
            </div>
        </section>
    <section class="teachers" id="teachers">
        <div class="container">
            <div class="teachers-header">
                <h2>Тренерский состав</h2>
                <div class="nav">
                    <a class="prev-4"></a>
                    <a class="next-4"></a>
                    </div>
                </div>
            <div class="owl-carousel owl-4">
                <div class="teacher">
                    <div class="teacher-photo">
                        <h3>Ольга Недоступова</h3>
                        </div>
                    <div class="teacher-info">
                        <p>Руководитель и главный тренер студии Изюм<br><br>

                            Pole Dance<br>
                            Stretching<br>
                            Body Ballet<br>
                            Strip plastica<br>
                            Art-Dance<br>
                            Body Sculpt</p>
                        </div>
                    </div>
                <div class="teacher">
                    <div class="teacher-photo">
                        <h3>Ольга Недоступова</h3>
                    </div>
                    <div class="teacher-info">
                        <p>Руководитель и главный тренер студии Изюм<br><br>

                            Pole Dance<br>
                            Stretching<br>
                            Body Ballet<br>
                            Strip plastica<br>
                            Art-Dance<br>
                            Body Sculpt</p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    <section class="subscribe" id="form">
        <div class="subscription">
        <h3>Подпишись на новости и получай информацию о мероприятиях</h3>
        <form action="/" method="post">
            <input type="email" name="email" placeholder="Эл. почта" required="">
            <input type="submit" name="submit" value="">
              <input type="hidden" name="type" value="feedback">
               <input type="hidden" name="csrf" value="<?=$token?>">
        </form>
            </div>
        </section>
    <section class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.1103774620487!2d46.016393315243135!3d51.52953531690628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7bbfb25a625%3A0xce6f27ffe404cd9b!2z0YPQuy4g0KHQvtCy0LXRgtGB0LrQsNGPLCA1MSwg0KHQsNGA0LDRgtC-0LIsINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNDEwMDU2!5e0!3m2!1sru!2sru!4v1555665299358!5m2!1sru!2sru" width="420" height="338" frameborder="0" style="border:0" allowfullscreen></iframe>
        </section>
    <section class="contacts" id="contacts">


            <p class="address">Саратов, ул. Советская, 51 корп. Б (1 этаж)</p>
            <p class="phone">+ 7 (8452) 25-86-15</p>
            <div class="social">
                <a class="gm"></a>
                <a class="fb" href="https://www.facebook.com/POLEDANCE.PUMA/?eid=ARA8IKWYDcQVnnknDY5eSRKBJkMOZCS7p_9aueHhVvNHOeMJYjD6Pgk2l-Rilcny-hYmDVo4fUGlSHF0&timeline_context_item_type=intro_card_work&timeline_context_item_source=100015634876822&fref=tag" target="_blank"></a>
                <a class="ig" href="https://www.instagram.com/poledance_puma/" target="_blank"></a>
                <a class="vk" href="https://vk.com/poledance_saratov" target="_blank"></a>
                </div>
        </section>

</main>
<footer>
    <img src="img/logo.png">
    <p>Студия танца & акробатики
        на пилоне <b>Изюм</b> </p>
</footer>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/script.js"></script>
</body>
</html>