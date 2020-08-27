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

    $result = mysqli_query($usercon, "SELECT password, id, uname, user_rights FROM users WHERE uname = '$post_uname'"); //checks if there a is user with the entered username
    $row = mysqli_fetch_array($result);
    if ((mysqli_num_rows($result)) == 1){
        if (password_verify($post_pwd, $row['password'])){ //verifies the password against the hashed password that is stored

            $_SESSION['user_id'] = $row["id"]; //if the login details are correct, logs in the user based on the data from the query
            $_SESSION["username"] = $row["uname"];
            $_SESSION['rights'] = $row["user_rights"];
            #header("location: index.php");
    }
    else{
        echo "Wrong username or password"; //returns error message
    }
    }
    else{
        echo "Wrong username or password"; //returns error message
    }
    
    
}
else{
    header("location:index.php"); //if it is not a POST action, the user is redirected to the index.
}
?>