<?php
class Token{
    private $_data;
    
    public static function generate(){
        return $_SESSION['token'] = base64_encode(openssl_random_pseudo_bytes(32));
    }
    
    public static function check($token){
        if(isset($_SESSION['token']) && $token === $_SESSION['token']){      
            unset($_SESSION['token']);
            return true;
        }
        return false;
    }
    
    public function get($item){
        if(isset($_POST[$item])){
            $this->_data = $_POST[$item];
        }
    }
    
    public function name(){
    return $this->_data;
    }
}
?>
