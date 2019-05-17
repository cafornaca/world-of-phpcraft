<?php


class Database
{
  public static function connection($config)
  {
    return new PDO(
      "mysql:host=".$config['host'].
      ";dbname=".$config['name'].
      ";charset=utf8",
      $config['username'],
      $config['password'],
      $config['options']);
  }
}