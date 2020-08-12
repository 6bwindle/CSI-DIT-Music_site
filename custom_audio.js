//setting up global variables that shouldn't be needed, but are.
var seeker_ball = ""
var seeker = ""
var mouse_on_seeker = false
const playerID = "audio-player" //constant id
const playButtonID = "control-play-button" //constant id
var player = ""
var count = 0
var current_play_button = null
var check_player = setInterval(function(){ //dumb, but since the audio player is created by nav.php, which needs a little time to load, this set interval is needed
    if (document.getElementById(playerID) != null){
        clearInterval(check_player)
        
    }
}, 100)


var getNav = setInterval(function(){ //kinda rewrote the above but a little bit better. Could probably merge the two functions together but I don't really want to break anything
    if (document.getElementById("nav") != null){
        if (document.getElementById("clickable-seeker-area") != null){
        timeout = setInterval(function(){ //this function just scrolls the song name, so that all of the song names that are too long can still be seen
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
        




        var mouse_down_on_volume = false
        var is_muted = false
        var prev_volume = 1
        clearInterval(getNav)
        function moveVolume(e){ //changes the width of the volume bar
            var x = e.pageX - $("#volume-full").offset().left

            if (x >=0 && x <= $("#volume-empty").width()){
                $("#volume-full").width(x)
            }

            var percent = $("#volume-full").width() / $("#volume-empty").width()
                prev_volume = percent

            if(player.src != null){
            player.volume = percent //sets the value of the volume
            }
            is_muted = false
        }
        var volume_empty = document.getElementById("volume-empty")
        var volume_full = document.getElementById("volume-full")
        var volume_parent = document.getElementById("volume-area")
        var volume_icon = document.getElementById("volume-icon")

        volume_parent.addEventListener("mouseenter", function(event){
                volume_full.style.display = "block"
                volume_empty.style.display = "block"
                document.getElementById("volume-icon").style.backgroundImage = "url('img/empty_volume.png')" //when the user is changing the volume, changes the image so that there is more space
        })

        volume_parent.addEventListener("mouseleave", function(event){
            volume_full.style.display = "none"
            volume_empty.style.display = "none"
           
    })


        volume_empty.addEventListener("mousedown", function(e){ //moves the volume when clicked
           moveVolume(e)
            mouse_down_on_volume = true
        })

        volume_parent.addEventListener("mouseup", function(e){
            mouse_down_on_volume = false
        })
        volume_parent.addEventListener("mouseleave", function(e){ //just changes the image based on whether the volume is currently muted
            if (is_muted){
                volume_icon.style.backgroundImage = "url('img/volume_muted.png')"

            }
            else{
                volume_icon.style.backgroundImage = "url('img/volume.png')"
            }
        })

        volume_parent.addEventListener("mousemove", function(e){ //this allows for the volume to be dragged
            if (mouse_down_on_volume){
                moveVolume(e)
            }
        })







        volume_icon.addEventListener("click", function(){ //if the volume icon is clicke, toggle the volume being muted
            if (is_muted == true){
                is_muted = false
                player.volume = prev_volume
                $("#volume-full").width($("#volume-empty").width() * player.volume)
            }
            else{
                is_muted = true
                volume = player.volume
                player.volume = 0
               
                $("#volume-full").width(0)
            }
            
        })









        seeker_large = document.getElementById("clickable-seeker-area")
        seeker_empty = document.getElementById("empty-seeker")
        seeker_full = document.getElementById("full-seeker")
        seeker_ball = document.getElementById("seeker-ball")
        seeker_ball.style.display = "none"
        seeker_large.addEventListener("mouseenter", function(event){ //changes the size of the seeker when moused over
            if (player.src != ""){
            mouse_on_seeker = true
            seeker_empty.style.height = "50%"
            seeker_empty.style.borderRadius = "5px"
            seeker_empty.style.top = "25%"
            seeker_ball.style.display = "block"
            }
        })

        seeker_large.addEventListener("mouseleave", function(event){ //changes  the size of the seeker when no longer moused over
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


        seeker_ball.addEventListener("click", function(e){ //on click, changes the position in the song
            var mousex = e.pageX - $("#clickable-seeker-area").offset().left
            var bar_width = $("#clickable-seeker-area").width()

            var percentage = mousex / bar_width
            player.currentTime = player.duration * percentage
            if (percentage == 100){
                document.getElementById(playButtonID).style.backgroundImage = 'url("img/arrow_white.png")'
            }

        })

        seeker_large.addEventListener("mousemove", function(e){ //moves the ball to the mouse position when it is on the duration bar
            
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
        player.addEventListener("timeupdate", (event) => { //whenever the music player updates the current time, change the size of the bar
            var current_time = player.currentTime
            var duration = player.duration
            var percentage = current_time / duration * 100
            if (seeker_ball.style.display == "none"){
            
            document.getElementById("full-seeker").style.width = percentage + "%"
            }
            if (percentage == 100){
                document.getElementById(playButtonID).style.backgroundImage = 'url("img/arrow_white.png")' //shows the play button when the song is over
            }
        })


        

       $("#seeker-ball").width($("#seeker-ball").height()) //makes the seeker ball not be stretched

    }
    }
}, 100)






$(document).on("click", "#control-play-button", function(){ //plays and pauses the music
    var player = document.getElementById(playerID)
    if (player.paused){
        if (player.src !=""){
            player.play()
            document.getElementById(playButtonID).style.backgroundImage = 'url("img/pause_icon.png")'
            current_play_button.src="img/pause_purple.png"
          }

    }
    else{
        player.pause()
        document.getElementById(playButtonID).style.backgroundImage = 'url("img/arrow_white.png")'
        if(current_play_button != null){
            current_play_button.backgroundImage="url(img/play_purple.png)"
        }
        
    }
    
    
})


$(document).on("click", ".play-button", function(){ //sets the song in the music player when on of the play buttons is clicked
    if (this.style.backgroundImage.includes("img/pause_purple.png")){
        document.getElementById(playerID).pause()
        this.style.backgroundImage = "url(img/play_purple.png)"
        document.getElementById(playButtonID).style.backgroundImage = 'url("img/arrow_white.png")'
    }
    else{
        var music_path = $(this).parent().parent().data("filename")
        var music_name = $(this).parent().parent().data("title")
        
        var player = document.getElementById(playerID)
       if (!player.src.includes(music_path)){
        document.getElementById("now-playing").children[0].innerHTML = "Now Playing: " + music_name
           player.src = music_path;
       }
        player.play()
        document.getElementById(playButtonID).style.backgroundImage = 'url("img/arrow_white.png")'
        if (current_play_button != null){
            current_play_button.backgroundImage = "url(img/play_purple.png)"
        }
        current_play_button = this
        this.style.backgroundImage = "url(img/pause_purple.png)" 
    }
    

    
})