<?php

 $server = "localhost";
 $user = "website";
 $pwd = "dojustly01";
 $db = "music_csi";

 $con = mysqli_connect($server, $user, $pwd, $db);

if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL" . mysqli_connect_errno();
}
?>