var seeker_ball = ""
var seeker = ""
var mouse_on_seeker = false
const playerID = "audio-player"
const playButtonID = "control-play-button"
var player = ""
var count = 0
var check_player = setInterval(function(){
    if (document.getElementById(playerID) != null){
        clearInterval(check_player)
        
    }
}, 100)


var getNav = setInterval(function(){
    if (document.getElementById("nav") != null){
        if (document.getElementById("clickable-seeker-area") != null){
        timeout = setInterval(function(){
            var text = document.getElementById("now-playing")
            if (text.scrollLeft == text.scrollWidth - text.clientWidth){
                count += 1
                if (count == 30){
                text.scrollLeft = 0
                count = 0
                }
            }
            else{
                
                text.scrollLeft = text.scrollLeft + 2
            }
        }, 100)
        





        clearInterval(getNav)
        seeker_large = document.getElementById("clickable-seeker-area")
        seeker_empty = document.getElementById("empty-seeker")
        seeker_full = document.getElementById("full-seeker")
        seeker_ball = document.getElementById("seeker-ball")
        seeker_ball.style.display = "none"
        seeker_large.addEventListener("mouseenter", function(event){
            if (player.src != ""){
            mouse_on_seeker = true
            seeker_empty.style.height = "50%"
            seeker_empty.style.borderRadius = "5px"
            seeker_empty.style.top = "25%"
            seeker_ball.style.display = "block"
            }
        })

        seeker_large.addEventListener("mouseleave", function(event){
            mouse_on_seeker = false
            seeker_ball.style.display = "none"
            seeker_empty.style.height = "25%"
            seeker_empty.style.borderRadius = "0px"
            seeker_full.style.borderRadius = "0px"
            seeker_empty.style.top = "37.5%"
            var current_time = player.currentTime
            var duration = player.duration
            var percentage = current_time / duration * 100
            document.getElementById("full-seeker").style.width = percentage + "%"
            if (percentage == 100){
                document.getElementById(playButtonID).style.backgroundImage = 'url("img/arrow_white.png")'
            }
        })


        seeker_ball.addEventListener("click", function(e){
            var mousex = e.pageX - $("#clickable-seeker-area").offset().left
            var bar_width = $("#clickable-seeker-area").width()

            var percentage = mousex / bar_width
            player.currentTime = player.duration * percentage
            if (percentage == 100){
                document.getElementById(playButtonID).style.backgroundImage = 'url("img/arrow_white.png")'
            }

        })

        seeker_large.addEventListener("mousemove", function(e){
            
            if (player.src != ""){
            var mousex = e.pageX - $("#clickable-seeker-area").offset().left
            var seeker_width = $("#seeker-ball").width()
            var position = (mousex - seeker_width / 2)
            if (position > $("#clickable-seeker-area").width() - seeker_width / 2){
                position = $("#clickable-seeker-area").width() - seeker_width / 2

            }
            else if (position < -seeker_width / 2){
                position = -seeker_width / 2
            }
            
            seeker_ball.style.left = position + "px"
            seeker_full.style.width = (position + seeker_width / 2) + "px"
        }
        })
        player = document.getElementById(playerID)
        player.addEventListener("timeupdate", (event) => {
            var current_time = player.currentTime
            var duration = player.duration
            var percentage = current_time / duration * 100
            if (seeker_ball.style.display == "none"){
            
            document.getElementById("full-seeker").style.width = percentage + "%"
            }
            if (percentage == 100){
                document.getElementById(playButtonID).style.backgroundImage = 'url("img/arrow_white.png")'
            }
        })


        

       $("#seeker-ball").width($("#seeker-ball").height())

    }
    }
}, 100)






function playMusic(){
    var player = document.getElementById(playerID)
    if (player.paused){
        if (player.src !=""){
            player.play()
            document.getElementById(playButtonID).style.backgroundImage = 'url("img/pause_icon.png")'
          }

    }
    else{
        player.pause()
        document.getElementById(playButtonID).style.backgroundImage = 'url("img/arrow_white.png")'
        
    }
    
    
}


$(document).on("click", ".play-button", function(){
    var music_path = $(this).parent().parent().data("filename")
    var music_name = $(this).parent().parent().data("title")
    document.getElementById(playerID).src = music_path
    document.getElementById("now-playing").children[0].innerHTML = "Now Playing: " + music_name
    count = 0
    var player = document.getElementById(playerID)
    document.getElementById(playButtonID).style.backgroundImage = 'url("img/pause_icon.png")'
    player.play()
    
})






