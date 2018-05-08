<?php

// singleton
// registry

class A {
    private static $intance;
    private function __construct(){}
    private $storage;

    public static function getIntance() {
        if ( !isset(self::$intance))
            self::$intance = new A;
        return self::$intance;
    }

    public function __set($name, $value) {
        if (!isset($this->storage[$name])) {
            $this->storage[$name] = $value;
        }
    }
    public function __get($name) {
        if (isset($this->storage[$name]))
            return $this->storage[$name];
            return null;
    }
}

// $a = new A;
$a = A::getIntance();

$a->name = 'phong';

echo $a->name;
