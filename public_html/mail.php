<?php
if(isset($_POST)) {
    $name = $_POST["name1"];
    $phone = $_POST["tel1"];
    $mail = mail("contact@prideconsulting.ru", "Новая заявка с сайта", "Имя: $name Телефон: $phone");
    
    if($mail) {
        echo "ok";
    }
}
?>