<?php
include "./scripts/connection.php";

$idUser =  $_GET('id');

try{
    $sql = "SELECT * FROM user WHERE id = {$idUser};";

    while($row = $result -> fetch()){
        array_push($json, array(
            "id"=> $row[1],
            "firstname"=>$row[2],
            ""
        ))
    }

    $jsonString = json_encode($json);
    echo $jsonString;
    
}catch(PDOException e){
    echo $e->getMessage();
}

