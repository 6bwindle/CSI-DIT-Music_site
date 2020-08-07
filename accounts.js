delete_id = null //id of the account that should be deleted
change_pwd_id = null //id of the account that should change it's password
document.getElementById("confirm-delete-container").addEventListener("click", function(e){
    e.stopPropagation()
})

document.getElementById("add-user-container").addEventListener("click", function(e){
    e.stopPropagation()
})

document.getElementById("change-password-container").addEventListener("click", function(e){
    e.stopPropagation()
})

//All of the stop propogation calls make sure that clicking on the dialogue (and not the background) does not close the dialogue

document.getElementById("add-user").addEventListener("click", function(){ //this show the relevant popup when the add user button is clicked
    document.getElementById("form-background").style.display = "block";
    $("#form-background").children().hide()
    $("#add-user-container").show()
    $("html").css("overflow", "hidden")
})

document.getElementById("form-background").addEventListener("click", function(){ //this closes all of the dialogues when the background is clicked
    document.getElementById("form-background").style.display = "none"
    $("#acc-pwd").val("")
    $("#acc-con-pwd").val("")
    $("#acc-uname").val("")
    $("html").css("overflow", "scroll")
    document.getElementById("admin-input").checked = false 
    delete_id = null
    change_pwd_id = null
    $("#error-label").remove()
    $("#change-pwd-input").val('')
    $("#con-change-pwd-input").val('')
})

function removeErrorlabel(){ //hides the error label from the forms
    $("#error-label").fadeOut();
    setTimeout(() =>{$("#error-label").remove()}, 400)
}


document.getElementById("no").addEventListener("click", function(){ //hides the dialogue when the user decides not to delete a user
    
    $("#form-background").hide()
    $("html").css("overflow",  "scroll")
    delete_id = null
})


$(function(){
    $("#add-user-form").submit(function(e){ //this triggers when the form is submitted
        e.preventDefault(); //prevents the form from changing the page when submitted
        var password1 = $("#acc-pwd").val() //gets the value of the first password input
        var password2 = $("#acc-con-pwd").val() // ""              "" second password input                 
        var username = $("#acc-uname").val().trim() //gets the username and trims it
        var admin_rights = (document.getElementById("admin-input").checked ? 1 : 0) //a ternary operator that asigns admin rights based on whether or not the checkboc has been checked
        
        if (username == "" || password1 == ""){ //if either the username or the first password have not been entered
            $("#add-user-form").append("<div id='error-label'><p>Error: Please enter a username and password</p></div>")
            setTimeout(() =>{removeErrorlabel()}, 1000)
            return
        }
        if (password1 != password2){ //if password one and two dont match (which means this also catches if the second password is null)
            $("#add-user-form").append("<div id='error-label'><p>Error: Passwords do not match</p></div>")
            setTimeout(() =>{removeErrorlabel()}, 1000)
            return
        }

        $("#user-loader").show() //shows the loading icon
        $("#error-label").remove() //deletes the error label, incase an error occurs so that there are not 2 errors on the form
        $.ajax({ //just an ajax call to the relevant php file
            type: "POST",
            url: "alter_users.php",
            data : {uname : username, pwd: password1, admin: admin_rights, type: 0},
            success: function(data){
                if (data == ""){ //if there were no errors reload the page so that the changes can be seen by the user
                    window.location.reload(false)
                }
                else{
                    $("#user-loader").hide() //hides the loader and creates the error label
                    $("#add-user-form").append("<div id='error-label'><p>" +data + "</p></div>")
            setTimeout(() =>{removeErrorlabel()}, 1000) //deletes the error label after a set amount of time
                }
            }
        })
    })
})


$(document).on("click", ".delete-button", function(){ //this just creates a popup asking if the user is sure they want to delete a user
   delete_id = $(this).data("id")
   $("#form-background").children().hide()
   $("html").css("overflow", "hidden")
   $("#confirm-delete-container").show()
   $("#form-background").show()
   $("#confirm-text p").html("Are you sure you want to delete the account: " + $(this).data("name") + "?" )


})

function hideBigError(){ //function for hiding the big error label
    $("#big-error").fadeOut();
    setTimeout(() =>{$("#big-error").hide()}, 400)
}

document.getElementById("yes").addEventListener("click", function(){ //this function just calls the delete function of the php page, and if there is an error, shows the error popup
    $("#delete-loader").show()
    if (delete_id != null){
        
    $.ajax({
        type: "POST",
        url: "alter_users.php",
        data: {id: delete_id, type:1},
        success: function(data){
            if (data != ""){
                $("#big-error p").html(data)
                $("#big-error").show()
                $("#delete-loader").hide()
                setTimeout(() => {hideBigError()}, 1000)
            }
            else{
                window.location.reload(false)
            }
        }
    })}
})

$(document).on("click", ".change-button", function(){ //shows the relevant form
    change_pwd_id = $(this).data("id")
    $("#change-password-form h2").html("Enter a new password for " + $(this).data("name"))
    $("#form-background").children().hide()
    $("html").css("overflow", "hidden")
    $("#change-password-container").show()
    $("#form-background").show()
})

$(function(){
    $("#change-password-form").submit(function(e){
        
        e.preventDefault(); //stops the page from changing
        $("#error-label").remove()
        if (change_pwd_id == null){ //if the form is somehow shown without an id being set (possible if the user shows it using inspect elemt)
            $("#change-password-form").append("<div id='error-label'><p> Error: What have you done? </p></div>")
            setTimeout(() =>{removeErrorlabel()}, 1000)
        }
        else{

        
        var password1 = $("#change-pwd-input").val() //the if states below are the same as the add user, just checking for null and non matching passwords
        var password2 = $("#con-change-pwd-input").val()
        if(password1 == ""){
            $("#change-password-form").append("<div id='error-label'><p> Error: Please enter a password </p></div>")
            setTimeout(() =>{removeErrorlabel()}, 1000)
        }
        else if(password1 != password2){
            $("#change-password-form").append("<div id='error-label'><p> Error: Passwords do not match </p></div>")
            setTimeout(() =>{removeErrorlabel()}, 1000)
        }
        else{
            $("#change-loader").show() //shows the loader
            $.ajax({ //ajax call to php, same as others
                type:"POST",
                url: "alter_users.php",
                data: {id: change_pwd_id, pwd : password1, type:2},
                success: function(data){
                    if (data != ""){

                        $("#change-password-form").append("<p id='error-label'> " + data + " </p>")
                        setTimeout(() =>{removeErrorlabel()}, 1000)
                        $("#change-loader").hide() //shows error, same as others
                    }
                    else{
                        window.location.reload(false) //reloads the page, same as the other ajax calls
                    }
                }
            })
        }
    }
    })
})


