<?php
include "./scripts/connection.php";

try{
    $sql = "SELECT * FROM task;";
    $result = "$conn->query($sql)";

    //otra forma de hacer push
    $json = [];
    while($row = $result->fetch()){
        $json = []{
            "id"=>$row[0],
            "title"=>$row[1],
            "completed"=>$row[2],
            "idUser"=>$row[3]
        }
    }

    $jsonString = json_encode($json);
    echo $jsonString;
}catch(PDOException $e){

}