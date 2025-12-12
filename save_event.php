<?php
    //TODO create a way to login and validate a user


    ini_set('display_errors', 1);
    error_reporting(E_ALL);
    //connect to mysql
    header("Content-Type: application/json");
    $servername = "localhost";
    $username = "root";
    $password = "";
    //disable mysqli error report
    mysqli_report(MYSQLI_REPORT_OFF);
    // Create connection
    //i here means improved
    $conn = new mysqli($servername, $username, $password);
    // Check connection
    if ($conn->connect_error){
        //Print a message and terminate the current script:
        die("Connection failed: ".$conn->connect_error);
    }
    //enter into DB
    $sql = "USE calendar;";
    $conn->query($sql);
    //  

    $event = file_get_contents("php://input");
    $event = json_decode($event,true);
    //echo json_encode($event);

    $userID = 1; //$event["userID"];
    $eventDate = $event["date"];
    $startTime = $event["start_time"];
    $endTime = $event["end_time"];
    $eventType = $event["type"];
    $eventTitle = $event["title"];
    

    $sql = "INSERT INTO events (userID,eventDate,startTime,endTime,eventType,eventTitle)
            VALUES ($userID,'$eventDate','$startTime','$endTime','$eventType','$eventTitle')";
    if ($conn->query($sql) === true){
        echo "yuh";
    }else{
        echo "$conn->error";
    };

    



?>