<?php
    if(session_id() == '') {
        session_start();
    }

?>
<div id="nav">
                <a class="nav-element"><img id="home-icon" src="img/home_icon_white.png"></a>
                <?php
                    if (isset($_SESSION["user_id"])){

                ?>
                
                <?php 
                    }
                ?>
                <?php
                    if (!isset($_SESSION['user_id'])){
                ?>
                <div id="log-in">
                    <p>Log In</p>
                </div>
                <?php
                    }
                else{
                ?>
                <div id="username">
                    <p> Welcome, <?php echo ucwords($_SESSION['username']); ?> </p>
                </div>
                <div id="log-out">
                    <p>Log Out</p>
                </div> 
                <?php
                    }
                ?>
            </div>