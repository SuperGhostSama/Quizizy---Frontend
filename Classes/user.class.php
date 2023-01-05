<?php
require 'database.php';
class user
{
    public function getData(){
    $con=database::connect();
    $sql="SELECT * FROM questions";
    $result=$con->query($sql);

    $data=$result->fetchALL(2);// 2 === PDO::FETCH_ASSOC
    echo json_encode($data); //to encode the assoc array into json form    

    database::disconnect();//to disconnect database
    }
}
    

