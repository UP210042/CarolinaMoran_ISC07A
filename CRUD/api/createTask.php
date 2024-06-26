<?php
include "./partials/Connection.php";

if(isset($_POST['users'], $_POST['title'], $_POST['completed'])) {
    $userId = $_POST['users'];
    $taskTitle = $_POST['title'];
    $completed = $_POST['completed'];
    try {
        $sql = "INSERT INTO task (title, idUser, completed) VALUES (?, ?, ?)";
        $state = $conn->prepare($sql);
        $state->execute([$taskTitle, $userId, $completed]);

        echo json_encode(["success" => true]);
    } catch (PDOException $e) {
        echo json_encode(["error" => $e->getMessage()]);
    }
} else {
    echo json_encode(["error" => "Missing data"]);
}
?>
