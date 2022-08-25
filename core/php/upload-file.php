<?php
error_reporting(0);


// save file back-image 

$time = time();
$file_tmp = $_FILES["file"]['tmp_name'];
$url = "../../asset/image/image-edit/$time.png";
$save_file = move_uploaded_file($file_tmp, $url);

if ($save_file) {
    echo  json_encode([
        'Result' => true,
        'image_name' => "$time.png"
    ]);
    
} else {
    echo  json_encode([
        'Result' => false
    ]);
}

