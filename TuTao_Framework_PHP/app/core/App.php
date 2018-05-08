<?php
require_once(dirname(__FILE__).'/Autoload.php');
use app\core\Registry;
/*
 * App
 */

class App
{
    private $router;

    function __construct()
    {
        new Autoload($config['rootDir']);

        $this->router = new Router($config['basePath']);

        Registry::getIntance()->config = $config;

    }




    public function run()
    {
        $this->router->run();
    }
}