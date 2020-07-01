<!DOCTYPE HTML>

<html>
    <head>
        <title> Music Website </title>
        <link rel="stylesheet" href="style.css">
        <link rel="icon" href="img/favicon.ico" type="image/x-icon">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        
    </head>
    <body>
        <?php
            require_once("connect.php");
            if(session_id() == '') {
                session_start();
            }
        ?>
        <div id="jank-loader">
            <img src="img/loading_background.png">
            <img src="img/loading_foreground.png">
        </div>
        <div id="login-dialogue">
        <div id="login-loader">
            <img src="img/loading_background.png">
            <img src="img/loading_foreground.png">
        </div>
                <div id="login-box">
                    <form id="login-form">
                    <div id="login-img">
                    </div>
                    <div class = "label-and-input">
                        <label for ="uname"> Username: </label>
                        <input type="text" id="uname" name="uname" class="login-input">
                    </div>
                    <div class="label-and-input">
                        <label for ="pwd"> Password: </label>
                        <input type="password" id="pwd" name="pwd" class="login-input">
                    </div>
                        <input id="login-button" type="submit" value="Log In">
                    </form>
                    
                        
                </div>
            </div>
        <div id="container">
        <div id="banner">
            <div id="scroll-button">&#9660; </div>
            </div>
            
<?php
require_once("navbar.php")
?>

            <div id = "table-container">
                
                <div class ="table-heading grid-parent" id="table-heading">
                    <div></div>

                    <div class="grid-child">
                        <h2 class="heading" data-type="title" data-sort = "asc">Song </h2><h2 class="arrow">&#9660;</h2><h2 class="arrow">&#9650;</h2>
                    </div>
                    
                    <div class="grid-child">
                        <h2 class="heading" data-type="artist" data-sort = "desc">Artist</h2><h2 class="arrow">&#9660;</h2><h2 class="arrow">&#9650;</h2>
                    </div>
                    <div class="grid-child">
                        <h2 class="heading" data-type="genre" data-sort = "desc">Genre</h2><h2 class="arrow">&#9660;</h2><h2 class="arrow">&#9650;</h2>
                    </div>
                    <div class="grid-child">
                        <h2 class="heading" data-type="duration" data-sort="desc">Duration</h2><h2 class="arrow">&#9660;</h2><h2 class="arrow">&#9650;</h2>
                    </div>
                </div>
                <div id="scrollable-data">
                <?php
                    require_once("return_all.php");
                    
                ?>
                </div>
            </div>

        </div>
    </body>
    <script src="sort.js"> </script>
    <script src="audio_length.js"> </script>
    <script src="move_down.js"> </script>
    <script src="log-in-js.js"> </script>
    <script src="custom_audio.js"> </script>
</html>
