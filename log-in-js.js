$(document).on("click", "#log-in", function(){
    $("#login-dialogue").css("display", "block")
    $("html").css("overflow", "hidden")
}) //shows the login when the login buttonn is pressed



$(document).on("click", "#login-box",function(event){
    event.stopPropagation();
})//prevents clicking on the login box from closing the login box



$(document).on("click", "#login-dialogue", function(){
    $("#login-dialogue").css("display", "none")
    $("html").css("overflow", "scroll")
    $("#login-form").find("input[name='uname']").val("")
    $("#login-form").find("input[name='pwd']").val("")
}) //clears the login inputs when the box is closed




function removeErrorlabel(){
    $("#error-label").fadeOut();
    setTimeout(() =>{$("#error-label").remove()}, 400)
} //hides the error label after fading it out

$(function(){ 
 $("#login-form").submit(function(e){ 
    
    e.preventDefault(); //prevents the page from changing after the for is sumbitted
    $("#login-loader").show() //shows the loading icon for the login
    $("#error-label").remove() 
     $.ajax({
         type: "POST",
         url: "login.php",
         data: {uname: $(this).find("input[name='uname']").val(), pwd: $(this).find("input[name='pwd']").val()}, //sets the post variables to the values of the inputs
         success: function(data){
            if (data != ""){ //if the login function returned some sort of error, display it
                $("#login-form").find("input[name='pwd']").val("")
                $("#login-loader").hide()
                
                setTimeout(() =>{removeErrorlabel()}, 2500) //hide the error label after 2.5 seconds
               $("#login-form").append("<div id='error-label'><p>" + data + "</p></div>")
               
            }
            else{ //reloads the page if the user has successfully logged in
                location.reload()
            }
         }         
        });
     return false;
 })
})


