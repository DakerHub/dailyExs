<?php
$upload_file = "E:/wamp/www/myApp/dailyExs/2017.4.7/index.html";
$file_path = "../upload/upload/index.html";
echo move_uploaded_file($upload_file,$file_path);
?>
