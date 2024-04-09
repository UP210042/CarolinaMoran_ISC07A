<?php

header("Access-Control-Allow-Origin: *");

try{
    $conn =new PDO(
        "mysql:host=localhost;dbname=todoApp",
        "root",
        "12345"
    );
    $result = $conn -> query("SELECT CONCAT (u.firstname, ' ', u.lastname) as FullName FROM user u INNER JOIN task t ON u.id= t.idUser");
    $row = $result -> fetch();
    echo $row['sum'];
    //var_dump($row);
    while($row = $result->fetch()){
        echo $row''FullName."<br />"
    }

    $json= array();
    $result = $conn -> query("SELECT * FROM user");

    while($row = $result -> fetch()){
        array_push($json, array(
            "id"=> $row[1],
            "firstname"=>$row[2],
            ""
        ))
    }

    $jsonString = json_encode($json);
    echo $jsonString;

}catch(Exception $e){
   echo e->getMessage();
}

