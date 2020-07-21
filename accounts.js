document.getElementById("add-user-container").addEventListener("click", function(e){
    e.stopPropagation()
})

document.getElementById("add-user-button").addEventListener("click", function(){
    document.getElementById("form-background").style.display = "block";
})

document.getElementById("form-background").addEventListener("click", function(){
    document.getElementById("form-background").style.display = "none"
})

$(function(){
    $("#add-user-form").submit(function(e){
        e.preventDefault();
        var password1 = $("#acc-pwd").val()
        var password2 = $("#acc-con-pwd").val()
        var uname = $("#acc-uname").val().trim()
        var admin_rights = (document.getElementById("admin-input").checked ? 1 : 0)
        if (password1 != password2){
            alert("bitch")
        }
    })
})