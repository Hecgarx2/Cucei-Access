<?php
    require_once 'conexion.php';
    //variable interna = variable externa
    $nombre = $_GET['nombre'];
    $apellido = $_GET['apellido'];
    $marca = $_GET['marca'];
    $placa = $_GET['placa'];
    $color = $_GET['color'];
    $puerta = $_GET['puerta'];
    $fecha = $_GET['fecha'];
    $modulo = $_GET['modulo'];
    
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