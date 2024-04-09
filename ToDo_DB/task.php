<?php
include "./scripts/connection.php";

$idTask =  $_GET('id');

try{
    $sql = "SELECT * FROM user WHERE id = {$idTask};";

    $result = $conn->query($sql);
    $row = $result->fetch();
    $json = [][
        "id"=>$row[0],
        "title"=>$row[1],
        "completed"=>$row[2],
        "idUser"=>$row[3]
    ]

    $jsonString = json_encode($json);
    echo $jsonString;
    
}catch(PDOException e){
    echo $e->getMessage();
}

