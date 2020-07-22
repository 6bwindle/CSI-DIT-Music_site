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
        else if(strlen($_POST["uname"]) > 25){
            echo "Error: Username is too long";
        }
        else{

            $hashed_password = password_hash($password, 1);
            $alter_query = "INSERT INTO users (uname, password, user_rights) VALUES ('$username', '$hashed_password', $rights)";
            mysqli_query($usercon, $alter_query);
        }
        }
    else if($_POST["type"] == "1"){
        if ($_POST["id"] == $_SESSION["user_id"]){
            echo "Error: You cannot delete your own account";
        }
        else{

        
        $id_to_delete = $_POST["id"];

        $delete_query = "DELETE FROM users WHERE id = $id_to_delete";
        mysqli_query($usercon, $delete_query);
        $reset_id_query = "SET @num := 0;";
        mysqli_query($usercon, $reset_id_query);
        $reset_id_query = "UPDATE users SET id = @num := (@num + 1);";
        mysqli_query($usercon, $reset_id_query);
        $reset_id_query = "ALTER TABLE users AUTO_INCREMENT = 1";
        mysqli_query($usercon, $reset_id_query);
        }
    }

    else if($_POST["type"] == "2"){
        $id_to_change = $_POST["id"];
        $new_password = $_POST["pwd"];
        $hashed_password = password_hash($new_password, 1);

        $query = "UPDATE users SET password = '$hashed_password' WHERE id = $id_to_change";
        mysqli_query($usercon, $query);
    }

}




?>