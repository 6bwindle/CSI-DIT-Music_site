<?php
$db = "users";
$user = "website";
$pwd = "dojustly01";
$server = "localhost";
$usercon = mysqli_connect($server, $user, $pwd, $db);
if (mysqli_connect_errno()){
    echo mysqli_connect_errno();
}

$query = "SELECT uname, user_rights, id FROM users";
$result = mysqli_query($usercon, $query);
while($output = mysqli_fetch_array($result)){
    ?>
    <div class="acc-parent">
    <div class="acc-child">
<p><?php  echo $output["uname"]; ?></p>
    </div>

    <div class="acc-child">
<p><?php  echo ($output["user_rights"] == 1 ? "True" : "False"); ?></p>
    </div>
    <div class="acc-button">
    <p> Change Password</p>
</div>
<div class="acc-button delete-button" data-id="<?php  echo $output["id"];?>" data-name = "<?php echo $output["uname"] ?>">
<p>Delete Account</p>
</div>
    </div>

    <?php
}
?>
<div class="acc-parent" id="add-user">
<div class="acc-child" id="add-user-button">
<p>Add a user...</p>
</div>
</div>