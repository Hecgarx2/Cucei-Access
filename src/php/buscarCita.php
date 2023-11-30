<?php
    //Conexion con la base de datos
    require_once 'conexion.php';
    //variable interna = variable externa
    $nombre = $_GET['nombre'];
    $apellido = $_GET['apellido'];
    $puerta = $_GET['puerta'];
    
    if(!$conexion){
        die("Error al conectarse al server");
    }
    if($puerta == 1){
        $sql = "SELECT * FROM Puerta1 WHERE Nombre = '$nombre' AND Apellido = '$apellido'";
    }
    else if($puerta == 2){
        $sql = "SELECT * FROM Puerta2 WHERE Nombre = '$nombre' AND Apellido = '$apellido'";
    }
    else if($puerta == 3){
        $sql = "SELECT * FROM Puerta3 WHERE Nombre = '$nombre' AND Apellido = '$apellido'";
    }
    else{
        echo json_encode(['error' => 'Puerta no válida']);
        exit;
    }
    $result = mysqli_query($conexion,$sql);
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)){
            $response = [
                'Id' => $row['Id'],
                'Nombre' => $row['Nombre'],
                'Apellido' => $row['Apellido'],
                'Fecha' => $row['Fecha'],
                'Marca' => $row['Marca'],
                'Placa' => $row['Placa'],
                'Color' => $row['Color'],
                'Modulo' => $row['Modulo']
            ];
            echo json_encode($response);
        }
    }
    else{
        echo json_encode([
            'Id' => -1,
            'error' => 'Error: No se encontraron citas con los datos ingresados',
        ]);
    }
?> 