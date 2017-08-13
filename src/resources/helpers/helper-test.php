<?php

echo "start";


function __autoload($class){
  require_once("../../classes/{$class}.php");
}

$conn = new PDO("mysql:host=localhost;port:3306;dbname=u176276522_ch","u176276522_me","PQztexWVBw2o");


print_r($conn);