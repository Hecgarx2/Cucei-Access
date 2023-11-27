<?php
    //variable interna = variable externa
    $nombre = $_GET['nombre'];
    $apellido = $_GET['apellido'];
    $marca = $_GET['marca'];
    $placa = $_GET['placa'];
    $color = $_GET['color'];
    $puerta = $_GET['puerta'];
    $fecha = $_GET['fecha'];
    $modulo = $_GET['modulo'];
    //datos de conexion
    $server = "localhost";
    $user = "id21265121_hector";
    $pass = "H3ct0r_db";
    $bd = "id21265121_db_1";
    $cone = mysqli_connect($server,$user,$pass,$bd);
    if(!$cone){
        die("Error al conectar");
    }
    //crear la sentencia
    if($puerta == 1){
        $sql="INSERT INTO Puerta1(Nombre,Apellido,Marca,Placa,Color,Fecha,Modulo)VALUES('$nombre','$apellido','$marca','$placa','$color','$fecha','$modulo')";
    }
    else if($puerta == 2){
        $sql="INSERT INTO Puerta2(Nombre,Apellido,Marca,Placa,Color,Fecha,Modulo)VALUES('$nombre','$apellido','$marca','$placa','$color','$fecha','$modulo')";
    }
    else {
        $sql="INSERT INTO Puerta3(Nombre,Apellido,Marca,Placa,Color,Fecha,Modulo)VALUES('$nombre','$apellido','$marca','$placa','$color','$fecha','$modulo')";
    }
    //ejecutar sentencia
    if(mysqli_query($cone,$sql)){
        echo "1";
    }else{
        echo "0";
    }
?>