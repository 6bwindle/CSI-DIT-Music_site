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
                <audio id="audio-player"></audio>
                <div id="audio-controls" class="nav-element">
                    <div id = "control-play-button"onclick = "playMusic()"></div>
                    <div id="now-playing"><p></p><p></p></div>
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
                        <div id="volume-ball"></div>
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
                <div id="log-out">
                    <p>Log Out</p>
                </div> 
                <?php
                    }
                ?>
            </div>