<?php

/*
 * Router
 */
class Router
{
    private static $routers = [];

    function __construct()
    {

    }

//  getRequestURL()
    private function getRequestURL()
    {
        $basePath = \App::getConfig()['basePath'];
        $url = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '/';
        $url = str_replace($basePath, '', $url);
        $url = $url === '' || empty($url) ? '/' : $url;
        return $url;
    }

//  getRequestMethod()
    private function getRequestMethod()
    {
        $method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'GET';
        return $method;
    }

//  addRouter()
    private static function addRouter($method, $url, $action)
    {
        self::$routers[] = [$method, $url, $action];
    }

//    Get()
    public static function get($url, $action)
    {
        self::addRouter('GET', $url, $action);
    }

//    Post()
    public static function post($url, $action)
    {
        self::addRouter('POST', $url, $action);
    }

    public static function any($url, $action)
    {
        self::addRouter('GET|POST', $url, $action);
    }

//    Map()
    public function map()
    {
        $checkRoute = false;

        $requestURL = $this->getRequestURL();
        $requestMethod = $this->getRequestMethod();
        $routers = self::$routers;

        foreach ($routers as $route) {
            list($method, $url, $action) = $route;

            if (strpos($method, $requestMethod) === FALSE) {
                continue;
            }

            if ($url === '*') {
                $checkRoute = true;
            } elseif (strpos($url, '{') === FALSE) {
                if (strcmp(strtolower($url), strtolower($requestURL)) === 0) {
                    $checkRoute = true;
                } else {
                    continue;
                }
            } elseif (strpos($url, '}') === FALSE) {
                continue;
            } else {
                $routeParams = explode('/', $url);
                $requestParams = explode('/', $requestURL);

                if (count($routeParams) !== count($requestParams)) {
                    continue;
                }

                foreach ($routeParams as $k => $rp) {
                    if (preg_match('/^{\w+}$/', $rp)) {
                        $params[] = $requestParams[$k];
                    }
                }
                $checkRoute = true;
            }

            if ($checkRoute === true) {
                if (is_callable($action)) {
                    call_user_func_array($action, $params);
                } elseif (is_string($action)) {
                    $this->compieRoute($action, $params);
                }
                return;
            } else {
                continue;
            }
        }
        return;
    }

    private function compieRoute($action, $params)
    {
        if (count(explode('@', $action)) !== 2) {
            die('Router error');
        }

        $className = explode('@', $action)[0];
        $methodName = explode('@', $action)[1];

        $classNamespace = 'app\\controllers\\' . $className;

        if (class_exists($classNamespace)) {
            $object = new $classNamespace;

            if (method_exists($classNamespace, $methodName)) {
                call_user_func_array([$object, $methodName], $params);
            }
            else {
                die('Method "' . $methodName . '" not found');
            }

        } else {
            die('Class "' . $classNamespace . '" not found');
       }

    }

    function run()
    {
        $this->map();
    }
}