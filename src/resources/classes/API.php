<?php

// abstract class StmtSQL{
abstract class API extends APP {
    // PROPERTIES
    abstract protected $requestMethod;
    

    // METHODS
    public static function getRequestMethod () {
        echo $_SERVER["REQUEST_METHOD"];
        $this->requestMethod = $_SERVER["REQUEST_METHOD"];

        switch($method) {
            case 'GET':
                echo "GET REQUEST!";
                // logUser();
                break;
            case 'POST':
                echo "POST REQUEST!";
                break;
            default:
                echo "CURRENT SUPPORTED METHODS: POST!";
                break;
        }
    }

    public static function start() {
        static->getRequestMethod();
    }
    
    
} 