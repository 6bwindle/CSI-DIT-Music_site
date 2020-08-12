<?php
if ($_SERVER["REQUEST_URI"] == "/music-git/navbar.php"){
    header("location: index.php");
}

    if(session_id() == '') {
        session_start();
    }
?>
<div id="nav">
                <a class="nav-element" href="index.php"><img id="home-icon" src="img/home_icon_white.png"></a>
                <?php
                    if (isset($_SESSION["user_id"]) && $_SERVER['REQUEST_URI'] != "/music-git/accounts.php"){

                ?>
                <audio id="audio-player"></audio>
                <div id="audio-controls" class="nav-element">
                    <div id = "control-play-button"></div>
                    <div id="now-playing"><p></p></div>
                    <div id="clickable-seeker-area">
                    <div id="seeker-ball">
                    </div>
                        <div id="empty-seeker">
                        <div id="full-seeker">
                            
                    </div>
                    </div>
                    </div>
                    <div id="volume-area">
                        <div id="volume-icon"></div>
                        <div id="volume-empty">
                        <div id="volume-full"></div>
                        </div>
                        
                    </div>
                </div>
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
                <?php if($_SESSION['rights'] == 1){
                    ?>
                    <div id="account-dropdown">
                    <p>Account</p>
                    <div id="dropdown-items"> 
                        <a href = "accounts.php" id="account-button">
                        <p>Admin Controls</p>
                        </a>
                        <a href="logout.php">
                        <p>Log out</p>
                        </a>
                        </div>
                    </div>
                <?php
            }
            else{
            ?>
                
                <a id="log-out" href="logout.php">
                    <p>Log Out</p>
                </a> 

                <?php
                }
                    }
                ?>
            </div>