<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

$conexion = mysqli_connect('localhost','valquint_juan','42180200Az','valquint_sherlock');

$opcion = $_GET['opcion'];
if ($opcion==='caso')
{
  $salida=array();
  $sql = mysqli_query($conexion,"SELECT * FROM casos");
  $max=mysqli_num_rows($sql);
  if ($max>0)
  {
    while ($result = mysqli_fetch_object($sql))
    {
      $salida[] = $result;
    }
  }
  echo json_encode($salida);
}


?>
