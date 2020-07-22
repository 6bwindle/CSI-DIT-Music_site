$(document).on("click", "#log-in", function(){
    $("#login-dialogue").css("display", "block")
    $("html").css("overflow", "hidden")
})



$(document).on("click", "#login-box",function(event){
    event.stopPropagation();
})



$(document).on("click", "#login-dialogue", function(){
    $("#login-dialogue").css("display", "none")
    $("html").css("overflow", "scroll")
    $("#login-form").find("input[name='uname']").val("")
    $("#login-form").find("input[name='pwd']").val("")
})

$(document).on("click", "#log-out", function(){
    location.href = "logout.php"
})



function removeErrorlabel(){
    $("#error-label").fadeOut();
    setTimeout(() =>{$("#error-label").remove()}, 400)
}

$(function(){
 $("#login-form").submit(function(e){ 
    
    e.preventDefault();
    $("#login-loader").show()
    $("#error-label").remove()
     $.ajax({
         type: "POST",
         url: "login.php",
         data: {uname: $(this).find("input[name='uname']").val(), pwd: $(this).find("input[name='pwd']").val()},
         success: function(data){
            if (data != ""){
                $("#login-form").find("input[name='pwd']").val("")
                $("#login-loader").hide()
                
                setTimeout(() =>{removeErrorlabel()}, 2500) 
               $("#login-form").append("<div id='error-label'><p>" + data + "</p></div>")
               
            }
            else{
                location.reload()
            }
         }         
        });
     return false;
 })
})


