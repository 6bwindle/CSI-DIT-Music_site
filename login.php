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
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $post_uname = mysqli_real_escape_string($usercon, $_POST['uname']);
    $post_pwd = mysqli_real_escape_string($usercon, $_POST['pwd']);

    $result = mysqli_query($usercon, "SELECT password, id, uname FROM users WHERE uname = '$post_uname'");
    $row = mysqli_fetch_array($result);
    if ((mysqli_num_rows($result)) == 1){
        if (password_verify($post_pwd, $row['password'])){

            $_SESSION['user_id'] = $row["id"];
            $_SESSION["username"] = $row["uname"];
            #header("location: index.php");
    }
    else{
        echo "Wrong username or password";
    }
    }
    else{
        echo "Wrong username or password";
    }
    
    
}
?>