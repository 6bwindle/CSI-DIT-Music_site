delete_id = null

document.getElementById("confirm-delete-container").addEventListener("click", function(e){
    e.stopPropagation()
})

document.getElementById("add-user-container").addEventListener("click", function(e){
    e.stopPropagation()
})

document.getElementById("add-user").addEventListener("click", function(){
    document.getElementById("form-background").style.display = "block";
    $("#form-background").children().hide()
    $("#add-user-container").show()
    $("html").css("overflow", "hidden")
})

document.getElementById("form-background").addEventListener("click", function(){
    document.getElementById("form-background").style.display = "none"
    $("#acc-pwd").val("")
    $("#acc-con-pwd").val("")
    $("#acc-uname").val("")
    $("html").css("overflow", "scroll")
        document.getElementById("admin-input").checked = false 
})

function removeErrorlabel(){
    $("#error-label").fadeOut();
    setTimeout(() =>{$("#error-label").remove()}, 400)
}


document.getElementById("no").addEventListener("click", function(){
    
    $("#form-background").hide()
    $("html").css("overflow",  "scroll")
    delete_id = null
})


$(function(){
    $("#add-user-form").submit(function(e){
        e.preventDefault();
        var password1 = $("#acc-pwd").val()
        var password2 = $("#acc-con-pwd").val()
        var username = $("#acc-uname").val().trim()
        var admin_rights = (document.getElementById("admin-input").checked ? 1 : 0)
        
        if (username == "" || password1 == ""){
            $("#add-user-form").append("<div id='error-label'><p>Error: Please enter a username and password</p></div>")
            setTimeout(() =>{removeErrorlabel()}, 1000)
            return
        }
        if (password1 != password2){
            $("#add-user-form").append("<div id='error-label'><p>Error: Passwords do not match</p></div>")
            setTimeout(() =>{removeErrorlabel()}, 1000)
            return
        }

        $("#user-loader").show()
        $("#error-label").remove()
        $.ajax({
            type: "POST",
            url: "alter_users.php",
            data : {uname : username, pwd: password1, admin: admin_rights, type: 0},
            success: function(data){
                if (data == ""){
                    window.location.reload()
                }
                else{
                    $("#user-loader").hide()
                    $("#add-user-form").append("<div id='error-label'><p>" +data + "</p></div>")
            setTimeout(() =>{removeErrorlabel()}, 1000)
                }
            }
        })
    })
})


$(document).on("click", ".delete-button", function(){
   delete_id = $(this).data("id")
   $("#form-background").children().hide()
   $("html").css("overflow", "hidden")
   $("#confirm-delete-container").show()
   $("#form-background").show()
   $("#confirm-text p").html("Are you sure you want to delete the account: " + $(this).data("name") + "?" )


})

function hideBigError(){
    $("#big-error").fadeOut();
    setTimeout(() =>{$("#big-error").hide()}, 400)
}

document.getElementById("yes").addEventListener("click", function(){
    $.ajax({
        type: "POST",
        url: "alter_users.php",
        data: {id: delete_id, type:1},
        success: function(data){
            if (data != ""){
                $("#big-error p").html(data)
                $("#big-error").show()
                setTimeout(() => {hideBigError()}, 1000)
            }
            else{
                window.location.reload()
            }
        }
    })
})