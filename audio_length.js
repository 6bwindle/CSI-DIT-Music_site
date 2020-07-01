function delayedDuration(element_class, p_class){
    var audio_elems = document.getElementsByClassName(element_class)
    var p = document.getElementsByClassName(p_class)
    for (i=0; i < audio_elems.length; i++){
        
        var duration = audio_elems[i].duration
        if (!(duration > 0)){
            setTimeout(() => {delayedDuration(element_class, p_class)}, 100)
            return
        }
        var minutes = ((duration - duration % 60) / 60).toString()
        var seconds = (Math.round(duration % 60)).toString()
        if (seconds.length == 1){
            seconds = "0" + seconds
        }
        var formatted_dur = minutes + ":" + seconds
        p[i].innerHTML= formatted_dur
        p[i].parentElement.parentElement.dataset.duration = formatted_dur
                /*audio_elems[i].parentElement.data("duration") = formatted_dur*/
    }
    setTimeout(() => {$("#jank-loader").hide()}, 500)
}

function getDur(element_class, p_class){
    setTimeout(() => {delayedDuration(element_class, p_class)}, 100) /* Delay is needed as the durations will be returned
    as NaN if the site does not have time to load all of the audio elements. 100 milliseconds seems to be enough */
    
}