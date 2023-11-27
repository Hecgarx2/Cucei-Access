<?php
    //variable interna = variable externa
    $id = $_GET['id'];
    $puerta = $_GET['puerta'];
    //Informacion de la base de datos
    $server = "localhost";          
    $user = "id21265121_hector";
    $pass = "H3ct0r_db";
    $bd = "id21265121_db_1";
    //Conexion con la base de datos
    $conexion = mysqli_connect($server,$user,$pass,$bd);
    if(!$conexion){
        die("Error al conectarse al server");
    }
    if ($puerta == 1) {
        $sql = "DELETE FROM Puerta1 WHERE Id = '$id'";
    }
    else if ($puerta == 2) {
        $sql = "DELETE FROM Puerta2 WHERE Id = '$id'";
    }
    else {
        $sql = "DELETE FROM Puerta3 WHERE Id = '$id'";
    }
    $result = mysqli_query($conexion,$sql);
    if($result){
        $response = [
            'Id' => $id,
            'Mensaje' => 'Eliminacion existosa'
        ];
        echo json_encode($response);
    }
    else{
        echo json_encode([
            'Id' => -1,
            'error' => 'Error: No se encontraron citas con los datos ingresados',
        ]);
    }
?>