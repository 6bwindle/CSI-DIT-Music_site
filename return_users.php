<?php
$db = "users";
$user = "website";
$pwd = "dojustly01";
$server = "localhost";
$usercon = mysqli_connect($server, $user, $pwd, $db);
if (mysqli_connect_errno()){
    echo mysqli_connect_errno();
}

$query = "SELECT uname, user_rights FROM users";
$result = mysqli_query($usercon, $query);
while($output = mysqli_fetch_array($result)){
    echo $output["uname"];
    echo $output["user_rights"];
}
?>