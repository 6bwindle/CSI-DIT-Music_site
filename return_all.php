<?php
if ($_SERVER["REQUEST_URI"] == "/music-git/return_all.php"){
    header("location: index.php");
}


require_once("connect.php");
$query = "SELECT song.pk, song.song_name, song.file_name, genre.genre, artist.artist FROM song INNER JOIN song_genre ON song.pk = song_genre.song_fk INNER JOIN genre ON genre.pk = song_genre.genre_fk INNER JOIN song_artist ON song.pk = song_artist.song_fk INNER JOIN artist ON artist.pk = song_artist.artist_fk ORDER BY song.pk ASC, genre.genre ASC";
$result = mysqli_query($con, $query);
$results_array = array(); //creates an empty array for the results to be stored
while ($output = mysqli_fetch_array($result)){
if (array_key_exists($output["pk"], $results_array)){ //if there is already an entry in the array for the current song
    if (in_array($output["genre"], $results_array[$output["pk"]][1]) == false){ //if the current genre isn't already in the sub list genres
        array_push($results_array[$output["pk"]][1], $output["genre"]); //adds genre to the sub list
    }
    if (in_array($output["artist"], $results_array[$output["pk"]][2]) == false){//if the artist isn't already in the sublist for artists
        array_push($results_array[$output["pk"]][2], $output["artist"]); //adds the artist to the sublist
    }
}
else{
   $results_array[$output["pk"]] = [$output["song_name"],array($output["genre"]), array($output["artist"]), $output["file_name"], $output["pk"]];//creates a new entry for the current song

}
}

foreach ($results_array as $array_value){ //loops throught each array element
    $song_name = $array_value[0];
    $pk = $array_value[4];
    $filename = $array_value[3];
    //above is just setting up the variables that do not need any formatting

    if (count($array_value[1]) == 1){ //sets the genre as the list entry if there is only one
        $genre = $array_value[1][0];
    }
    else{ //if there is more than one genre, joins them with commas
       $genre = join(", ", $array_value[1]);
    }
    
    if (count($array_value[2]) == 1){ //sames as for the genre
        $artist = $array_value[2][0];
    }
    else{//same as for the genre
        $artist = join(", ", $array_value[2]);
    }
    if (is_dir("music_actual")){ //if the actual music is present, sets that as the music path, otherwise uses the default music folder that only contains sample music
        $file_path = "music_actual";
    }
    else{
        $file_path = "music";
    }

    $file = $file_path . "/" . $filename //joins the file and path name

    //the below just formats the information into the html structure that the website uses.
    ?>
    <div class="grid-parent data-parent" data-title = "<?php echo $song_name; ?>" data-artist = "<?php echo $artist ?>" data-genre = "<?php echo $genre; ?>" data-duration = "<?php echo $pk . ":00"; ?>" data-filename = "<?php echo $file; ?>"> 
                    <div class="grid-child">
                    <?php
                    if (isset($_SESSION["user_id"])){
                        ?><div  class="play-button"> </div>
                    <?php
                    }
                    ?>
                    </div>
                    <div class = "grid-child">
                        <p><?php echo $song_name?></p>
                    </div>
                    <div class = "grid-child">
                        <p><?php echo $artist?></p>
                    </div>
                    <div class = "grid-child">
                        <p><?php echo $genre?></p>
                    </div>
                    <div class = "grid-child">
                        <audio preload = "metadata" class="child-audio" src="<?php echo $file;?>" preload="metadata"> </audio>
                        <p class="duration"></p>
                    </div>
                </div>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="audio_length.js"></script>
               
                <?php

}



?>
<script>
getDur("child-audio", "duration")
</script>