<?php

namespace app\core;
use \PDO;
use \PDOException;
use app\core\Registry;
use app\core\AppException;

class QueryBuilder {
    private $colums;
    private $from;
    private $distinct = false;
    private $joins;
    private $wheres;
    private $groups;
    private $havings;
    private $orders;
    private $limits;
    private $offset;

    public function __construct($tableName)
    {
        $this->from = $tableName;
        echo $this->from;
    }

    public static function table($tableName) {
       return new self();
    }

    public function select($columns) {
        $this->colums = is_array($columns) ? $columns : func_get_args();
        return $this;
    }

    public function distinct() {
        $this->distinct = true;
        return $this;
    }


    public function join($table, $first, $operator, $second, $type = 'inner') {
        $this->joins[] = [$table, $first, $operator, $second, $type];
        return $this;
    }

    public function leftJoin($table, $first, $operator, $second) {
        return $this->join($table, $first, $operator, $second, 'left');
    }

    public function rightJoin($table, $first, $operator, $second) {
        return $this->join($table, $first, $operator, $second, 'right');
    }

    public function where($column, $operator, $value, $boolean = 'and') {
        $this->wheres[] = [$column, $operator, $value, $boolean];
        return $this;
    }

    public function orWhere($column, $operator, $value) {
        return $this->where($column, $operator, $value, 'or');
    }

    public function groupBy($columns) {
        $this->groups = is_array($columns) ? $columns : func_get_args();
        return $this;
    }

    public function having($column, $operator, $value, $boolean = 'and') {
        $this->havings[] = [$column, $operator, $value, $boolean];
        return $this;
    }

    public function orHaving($column, $operator, $value) {
        return $this->having($column, $operator, $value, 'or');
    }

    public function orderBy($column, $direction='asc') {
        $this->orders[] = [$column, $direction];
        return $this;
    }

    public function limit($limit) {
        $this->limit = $limit;
        return $this;
    }

    public function offset($offset) {
        $this->offset = $offset;
        return $this;
    }
}