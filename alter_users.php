<?php
$db = "users";
$user = "website";
$pwd = "dojustly01";
$server = "localhost";
$usercon = mysqli_connect($server, $user, $pwd, $db);
if (mysqli_connect_errno()){
    echo mysqli_connect_errno();
}
require("password.php");
if(session_id() == '') {
    session_start();
}


if ($_SERVER["REQUEST_METHOD"] == "POST"){

    if ($_POST["type"] == '0'){
        $username = $_POST["uname"];
        $password =  $_POST["pwd"];
        $admin = $_POST["admin"];
        $check_username_query = "SELECT id FROM  users where uname = '$username'";
        $result = mysqli_query($usercon, $check_username_query);
        $row = mysqli_fetch_array($result);
        $rights = intval($admin);
        if (mysqli_num_rows($result) != 0){
            echo "Error. Account already exists";
            
        }
        else{

            $hashed_password = password_hash($password, 1);
            $alter_query = "INSERT INTO users (uname, password, user_rights) VALUES ('$username', '$hashed_password', $rights)";
            mysqli_query($usercon, $alter_query);
        }
        }

}

?>