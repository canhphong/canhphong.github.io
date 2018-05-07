<?php

class Autoload {
    private $rootDir;

    function __construct($rootDir)
    {
        $this->rootDir = $rootDir;
        spl_autoload_register([$this, 'autoload']);

        $this->autoLoadFile();
    }

    private function autoload($class) {

        $fileName = end(explode('\\', $class));
        $filePath = $this->rootDir.'\\'.strtolower(str_replace($fileName, '', $class)).$fileName.'.php';

        if (file_exists($filePath))
            require_once($filePath);
        else
            die("$class does not exixts");
    }

    private function autoLoadFile() {
        foreach ($this->defaulFileLoad() as $file) {
            require_once($this->rootDir.'/'.$file);
        }
    }

    private function defaulFileLoad() {
        return [
            'app/core/Router.php',
            'app/routers.php'
        ];
    }


}