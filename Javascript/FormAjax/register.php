<?php
session_start();

if(isset($_SESSION['usr_id'])) {
    header("Location: index.php");
}

include_once 'lib/dbconnect.php';

//set validation error flag as false
$error = false;

//check if form is submitted
if (isset($_POST['signup'])) {
    $username = mysqli_real_escape_string($con, $_POST['username']);
    $email = mysqli_real_escape_string($con, $_POST['email']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    // $birthday = mysqli_real_escape_string($con, $_POST['calendar']);
    
    //name can contain only alpha characters and space
    if (!preg_match("/^[a-zA-Z ]+$/",$username)) {
        $error = true;  
        $name_error = "Name must contain only alphabets and space";
    }
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
        $error = true;
        $email_error = "Please Enter Valid Email ID";
    }
    if(strlen($password) < 8) {
        $error = true;
        $password_error = "Password must be minimum of 8 characters";
    }
    // if($birthday > Today()) {
    //     $error = true;
    //     $cpassword_error = "Password and Confirm Password doesn't match";
    // }
    if (!$error) {
        if(mysqli_query($con, "INSERT INTO users(name,email,password) VALUES('" . $username . "', '" . $email . "', '" . md5($password) . "')")) {
            $successmsg = "Successfully Registered!";
        } else {
            $errormsg = "Error in registering...Please try again later!";
        }
    }
}

?>