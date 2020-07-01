<?php

require_once("connect.php");
$query = "SELECT song.pk, song.song_name, song.file_name, genre.genre, artist.artist FROM song INNER JOIN song_genre ON song.pk = song_genre.song_fk INNER JOIN genre ON genre.pk = song_genre.genre_fk INNER JOIN song_artist ON song.pk = song_artist.song_fk INNER JOIN artist ON artist.pk = song_artist.artist_fk ORDER BY song.pk ASC, genre.genre ASC";
$result = mysqli_query($con, $query);
$results_array = array();
while ($output = mysqli_fetch_array($result)){
if (array_key_exists($output["pk"], $results_array)){
    if (in_array($output["genre"], $results_array[$output["pk"]][1]) == false){
        array_push($results_array[$output["pk"]][1], $output["genre"]);
    }
    if (in_array($output["artist"], $results_array[$output["pk"]][2]) == false){
        array_push($results_array[$output["pk"]][2], $output["artist"]);
    }
}
else{
   $results_array[$output["pk"]] = [$output["song_name"],array($output["genre"]), array($output["artist"]), $output["file_name"], $output["pk"]];

}
}

foreach ($results_array as $array_value){
    $song_name = $array_value[0];
    $pk = $array_value[4];
    $filename = $array_value[3];
    

    if (count($array_value[1]) == 1){
        $genre = $array_value[1][0];
    }
    else{
       $genre = join(", ", $array_value[1]);
    }
    #echo(count($array_value[2]));
    if (count($array_value[2]) == 1){
        $artist = $array_value[2][0];
    }
    else{
        $artist = join(", ", $array_value[2]);
    }
    if (is_dir("music_actual")){
        $file_path = "music_actual";
    }
    else{
        $file_path = "music";
    }

    $file = $file_path . "/" . $filename
    ?>
    
    <div class="grid-parent data-parent" data-title = "<?php echo $song_name; ?>" data-artist = "<?php echo $artist ?>" data-genre = "<?php echo $genre; ?>" data-duration = "<?php echo $pk . ":00"; ?>" data-filename = "<?php echo $file; ?>">
                    <div class="grid-child">
                    <?php
                    if (isset($_SESSION["user_id"])){
                        ?><img src="img/temp_arrow_purp.png" class="play-button">
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