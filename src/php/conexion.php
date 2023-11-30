<?php
    $server = "localhost";
    $user = "id21595446_hector";
    $pass = "H3ct0r_db";
    $bd = "id21595446_db_1";
    $cone = mysqli_connect($server,$user,$pass,$bd);

    if(!$cone){
        die("Error al conectar");
    }
?>