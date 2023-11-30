<?php
    //Conexion con la base de datos
    require_once 'conexion.php';
    //variable interna = variable externa
    $id = $_GET['id'];
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
        $sql="UPDATE Puerta1 SET Nombre='$nombre',`Apellido`='$apellido',`Marca`='$marca',`Placa`='$placa',`Color`='$color',`Fecha`='$fecha',`Modulo`='$modulo' WHERE Id = '$id'";
    }
    else if($puerta == 2){
        $sql="UPDATE Puerta2 SET Nombre='$nombre',`Apellido`='$apellido',`Marca`='$marca',`Placa`='$placa',`Color`='$color',`Fecha`='$fecha',`Modulo`='$modulo' WHERE Id = '$id'";
    }
    else {
        $sql="UPDATE Puerta3 SET Nombre='$nombre',`Apellido`='$apellido',`Marca`='$marca',`Placa`='$placa',`Color`='$color',`Fecha`='$fecha',`Modulo`='$modulo' WHERE Id = '$id'";
    }
    //ejecutar sentencia
    if(mysqli_query($cone,$sql)){
        echo "1";
    }else{
        echo "0";
    }
?>