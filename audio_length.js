function delayedDuration(element_class, p_class){
    var audio_elems = document.getElementsByClassName(element_class);
    var p = document.getElementsByClassName(p_class);
    var total_duration = 0;
    for (i=0; i < audio_elems.length; i++){
        
        var duration = audio_elems[i].duration;
        total_duration += Math.floor(duration);
        if (!(duration > 0)){
            setTimeout(() => {delayedDuration(element_class, p_class)}, 100);
            return;
        }
        var minutes = ((duration - duration % 60) / 60).toString();
        var seconds = (Math.round(duration % 60)).toString();
        seconds = seconds.length==1?"0"+seconds:seconds;
        var formatted_dur = minutes + ":" + seconds;
        p[i].innerHTML= formatted_dur;
        p[i].parentElement.parentElement.dataset.duration = formatted_dur;
                /*audio_elems[i].parentElement.data("duration") = formatted_dur*/
    }
    var h = Math.floor(total_duration / 3600);
    var m = Math.floor(total_duration % 3600 / 60);
    var s = Math.floor(total_duration % 3600 % 60);
    document.getElementById("total-time").innerHTML = "Total time: " + h+":"+ (m.length==1?"0"+m:m) + (s.length==1?":0"+s:":"+s);
    setTimeout(() => {$("#jank-loader").hide()}, 500);
}

function getDur(element_class, p_class){
    setTimeout(() => {delayedDuration(element_class, p_class)}, 100); /* Delay is needed as the durations will be returned
    as NaN if the site does not have time to load all of the audio elements. 100 milliseconds seems to be enough */
    
}