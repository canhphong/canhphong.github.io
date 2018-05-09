<?php
use app\core\Controller;
use app\core\QueryBuilder;

Router::get('/home', 'HomeController1@index');
Router::get('/', function () {
    $builder = QueryBuilder::table('abc')->select('col1','col2')->distinct();
    echo '<pre>';
    print_r($builder);
//    $ct = new Controller;
//    $ct->render('index', ['age' => 22, 'name' => 'phong']);
});

Router::get('/news', function (){
    echo 'news page';
});

Router::any('*', function (){
    echo '404';
});
