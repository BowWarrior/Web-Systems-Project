<html>
<head>

<title>Database Set Up</title>
</head>
<body>

<?php


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
#initialize DB
$sql = "CREATE DATABASE calendar";

if ($conn->query($sql) === TRUE) {
    echo "Database created successfully"."<br>";
} 
else {
    echo "Error creating database: " . $conn->error."<br>";
}
#enter into DB
$sql = "USE calendar;";

if ($conn->query($sql) === TRUE) {
    echo "Database changed successfully"."<br>";
} 
else {
    echo "Error changing database: " . $conn->error."<br>";
}
#create table of all users with unique user ids
$sql = "CREATE TABLE users (    
            userID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            username VARCHAR(50) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL
        );
        ";

if ($conn->query($sql) === TRUE) {
    echo "User table created successfully"."<br>";
} 
else {
    echo "Error creating table: " . $conn->error."<br>";
}
#create table of events that recieve the json data from saveEventToDB();
#formatting to time format will be needed
$sql = "CREATE TABLE events (
            eventID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            userID INT NOT NULL,
            eventDate DATE NOT NULL,
            startTime TIME,
            endTime TIME,
            eventType VARCHAR(20),
            eventTitle VARCHAR(50)
        );
        ";
if ($conn->query($sql) === TRUE) {
    echo "Event table created successfully"."<br>";
} 
else {
    echo "Error creating table: " . $conn->error."<br>";
}
$username = "JackKerr";
$password = "abcde";
$password = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users(username, password) VALUES ('$username', '$password')";
$result = $conn->query($sql);

if ($result) {
    echo "New record created successfully"."<br>";
} 
else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn)."<br>";
}

$conn->close(); 
?> 

<a href="Login.php">Link back to login page</a>

</body>
</html>
