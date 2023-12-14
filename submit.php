<?php

$db = new mysqli("host", "username", "password", "database");

if ($db->connect_error) {
    die("Connection failed: " . $db->connect_error);
}


$firstName = $db->real_escape_string($_POST['firstName']);
$lastName = $db->real_escape_string($_POST['lastName']);
$birthDate = $db->real_escape_string($_POST['birthDate']);
$email = $db->real_escape_string($_POST['email']);
$phone = $db->real_escape_string($_POST['phone']);
$province = $db->real_escape_string($_POST['province']);
$gender = $db->real_escape_string($_POST['gender']);
$newsletter = isset($_POST['newsletter']) ? 1 : 0;


$query = "INSERT INTO users (firstName, lastName, birthDate, email, phone, province, gender, newsletter) 
          VALUES ('$firstName', '$lastName', '$birthDate', '$email', '$phone', '$province', '$gender', '$newsletter')";

if ($db->query($query) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $query . "<br>" . $db->error;
}

$db->close();
?>
