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

            if(!isset($_SESSION["user_id"]) || $_SESSION["rights"] != 1){
                header("location:index.php");
            }
            require_once("user_forms.php")
        ?>
        


        
        

        <div id="container">

            

            <div id="banner">
            <div id="scroll-button">&#9660; </div>
            </div>
            <?php
                require_once("navbar.php");
            ?>

            <div id = "table-container">
                <div id="acc-table-headings">
                    <div class="acc-child acc-heading"> 
                        <h2>Username</h2>
                    </div>
                    <div class="acc-child acc-heading"> 
                        <h2>Admin</h2>
                    </div>
                </div>
                <div id="acc-info-container">
                <?php
                require_once("return_users.php")
                ?>
                </div>
                
        </div>
    </body>
        <script src="log-in-js.js"> </script>
        <script src="move_down.js"> </script>    
</html>
