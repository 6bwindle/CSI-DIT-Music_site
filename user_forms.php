<div id="form-background">

    <div id="add-user-container">
    <div id="user-loader">
            <img src="img/loading_background.png">
            <img src="img/loading_foreground.png">
        </div>
        <form id="add-user-form">
            <div class="form-title">
    <h2>Add a new user</h2>
</div>
            <div class="label-and-input">
                <label for="uname"> Username:</label>
                <input type="text" id="acc-uname" name="uname" class="new-user-input">
            </div>
            <div class="label-and-input">
                <label for="pwd"> Password:</label>
                <input type="password" id="acc-pwd" name="pwd" class="new-user-input">
            </div>
            <div class="label-and-input">
                <label for="con-pwd">Confirm Password:</label>
                <input type="password" id="acc-con-pwd" name="con-pwd" class="new-user-input">
            </div>
            <div class="check-and-label">
                        <label for="admin">Admin?</label>
                        <input type="checkbox" id="admin-input">
                    </div>
            <div>
            
            <input type="submit" value="Create User" id="create-user-button">
            </div>
        </form>
    </div>


<div id="confirm-delete-container">
    <div id="big-error">
        <p>Error: You shouldn't be seeing this</p>
    </div>
    <div id="confirm-text">
        <p>You shouldn't be able to see this</p>
    </div>
    <div class="yes-no">
        <div class = "yes-no-button" id="yes">
            <p>Delete user</p>
        </div>
        <div class="yes-no-button" id="no">
            <p>Don't delete</p>
        </div>
    </div>
</div>


<div id="change-password-container">
<form id="change-password-form">
<div class="form-title">
<h2>You shouldn't be able to see this</h2>
</div>
<div class="label-and-input">
<label for="change-pwd">New password</label>
<input name="change-pwd" type="password" id="change-pwd-input" class="new-pwd-input">
</div>
<div class="label-and-input">
<label for="con-change-pwd">Confirm password</label>
<input name="con-change-pwd" type="password" id="con-change-pwd-input" class="new-pwd-input">
</div>
<div>
            
            <input type="submit" value="Change password" id="change-password-button">
            </div>
</form>
</div>



</div>


