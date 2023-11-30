<?php
    //Conexion con la base de datos
    require_once 'conexion.php';
    //variable interna = variable externa
    $id = $_GET['id'];
    $puerta = $_GET['puerta'];
    
    if ($puerta == 1) {
        $sql = "DELETE FROM Puerta1 WHERE Id = '$id'";
    }
    else if ($puerta == 2) {
        $sql = "DELETE FROM Puerta2 WHERE Id = '$id'";
    }
    else {
        $sql = "DELETE FROM Puerta3 WHERE Id = '$id'";
    }
    $result = mysqli_query($cone,$sql);
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