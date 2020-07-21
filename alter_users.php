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

function createUser($username, $password, $admin){
    $check_username_query = "SELECT id FROM  users where username = '$username'";
    $result = mysqli_query($usercon, $check_username_query);
    $row = mysqli_fetch_array($result);
    $rights = intval($admin);
    if (mysqli_num_rows($row) != 0){
        echo "Error. Account already exists";
        return;
    }

    $hashed_password = password_hash($password, 1);
    $alter_query = "INSERT INTO users (uname, password, user_rights) VALUES ('$username', '$hashed_password', $rights)";
    return;

}

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    if ($_POST["type"] == 0){
        createUser($_POST["uname"], $_POST["pwd"], $_POST["admin"]);
    }

}



//SET @num := 0;

//UPDATE users SET id = @num := (@num + 1);

//ALTER TABLE users AUTO_INCREMENT = 1
//CODE FOR RESETING THE AUTO INCREMENT IDS IN THE USERS TABLE.

?>