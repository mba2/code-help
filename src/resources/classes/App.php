<?php

require_once("../config/Project_config.php");

$config = new Project_config();

// print_r($config);

final class App {

    public function __construct(){
        print_r($_ENV);

    }

    protected this->config = $config; 

}


$app = new App();
print_r($app);
