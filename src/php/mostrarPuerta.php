<?php
    //variable interna = variable externa
    $puerta = $_GET['puerta'];
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
    if ($puerta == 1) {
        $sql="SELECT * Puerta1";
    }
    else if ($puerta == 2) {
        $sql="SELECT * Puerta2";
    }
    else {
        $sql="SELECT * Puerta3";
    }
    $result = mysqli_query($conexion,$sql);
    $response = array();
    if($result){
        $response[] = array(
                'Id' => $row['Id'],
                'Nombre' => $row['Nombre'],
                'Apellido' => $row['Apellido'],
                'Fecha' => $row['Fecha'],
                'Marca' => $row['Marca'],
                'Placa' => $row['Placa'],
                'Color' => $row['Color'],
                'Modulo' => $row['Modulo']
            );
        echo json_encode($response);
    }
    else{
        echo json_encode([
            'Id' => -1,
            'error' => 'Error: No se encontraron citas con los datos ingresados',
        ]);
    }
?>