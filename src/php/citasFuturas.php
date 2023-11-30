<?php
    header("Access-Control-Allow-Origin: *"); // Esto permite cualquier dominio
    header("Content-Type: application/json; charset=UTF-8");
    // Establecer la zona horaria a la deseada (por ejemplo, "America/Mexico_City")
    date_default_timezone_set("America/Mexico_City");
    
    // Obtén la fecha actual y la hora actual
    $fechaActual = date('Y-m-d H:i:s');
    $fechaLimiteSuperior = date('Y-m-d H:i:s', strtotime('+10 minutes', strtotime($fechaActual)));
    $diaActual = date('Y-m-d');
    
    //variable interna = variable externa
    $puerta = $_GET['puerta'];
    //Conexion con la base de datos
    require_once 'conexion.php';
    //crear la sentencia
    if ($puerta == 1) {
        $sql = "SELECT * FROM Puerta1 WHERE Fecha > '$fechaActual' 
        AND DATE(Fecha) = '$diaActual' ORDER BY Fecha";
    }
    else if ($puerta == 2) {
        $sql = "SELECT * FROM Puerta2 WHERE Fecha > '$fechaActual'
        AND DATE(Fecha) = '$diaActual' ORDER BY Fecha";
    }
    else {
        $sql = "SELECT * FROM Puerta3 WHERE Fecha > '$fechaActual'
        AND DATE(Fecha) = '$diaActual' ORDER BY Fecha";
    }
    $result = mysqli_query($cone,$sql);
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)){
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
        }
        echo json_encode($response);
        exit();
    }
    else{
        echo json_encode([
            'Id' => -1,
            'error' => 'Error: No se encontraron citas con los datos ingresados',
        ]);
    }
?>