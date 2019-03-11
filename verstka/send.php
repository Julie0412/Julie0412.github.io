<?php

$to = "ergokun@yandex.ru"; // емайл пол�~C�~Gа�~Bел�~O данн�~K�~E из �~Dо�~@м�~K
$tema = "заявка на сайте Жидкая кожа"; // �~Bема пол�~C�~Gенного емайла
$message = "о компании: " . $_POST['company'] . " <br />";
$message .= "контактное лицо: " . $_POST['person'] . "<br>";
$message .= "E-mail: " . $_POST['email'] . "<br>";
$message .= "номер телефона: " . $_POST['phone'] . "<br>";
$message .= "сообщение: " . $_POST['message'] . "<br>";
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
mail($to, $tema, $message, $headers);
header("location:".$_SERVER['HTTP_REFERER']);
