document.getElementById("add-user-container").addEventListener("click", function(e){
    e.stopPropagation()
})

document.getElementById("add-user-button").addEventListener("click", function(){
    document.getElementById("form-background").style.display = "block";
})

document.getElementById("form-background").addEventListener("click", function(){
    document.getElementById("form-background").style.display = "none"
})

function removeErrorlabel(){
    $("#error-label").fadeOut();
    setTimeout(() =>{$("#error-label").remove()}, 400)
}


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
                    alert("user should have been added")
                }
                else{
                    $("#user-loader").hide()
                    $("#add-user-form").append("<div id='error-label'><p>" +data + "</p></div>")
            setTimeout(() =>{removeErrorlabel()}, 10000)
                }
            }
        })
    })
})