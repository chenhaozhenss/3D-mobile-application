<?php

$directory='assets/gallery/asstes/images';
$allowed_extensions=array('jpg','jepg','gif','png');
$file_parts=array();

$response="";

$dir_handle=opendir($directory);

while($file=readdir($dir_handle)){
    if (substr($file,0,1)!= '.'){

        $file_componts=explode('.',$file);

        $extensions = strtolower(array_pop($file_componts));

        if(in_array($extension,$allowed_extensions)){
            $response.=$directory.'/'.$file/'~';
        }
    }
}

closedir($dir_handle);

echo substr_replace($response,"",-1);
?>