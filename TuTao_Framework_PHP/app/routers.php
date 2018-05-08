<?php
use app\core\Controller;
Router::get('/home', 'HomeController1@index');
Router::get('/', function () {
    $ct = new Controller;
    $ct->render('index', ['age' => 22, 'name' => 'phong']);
});

Router::get('/news', function (){
    echo 'news page';
});

Router::any('*', function (){
    echo '404';
});

