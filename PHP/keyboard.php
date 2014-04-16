<?php
    $alpha = "QWERTYUIOPASDFGHJKLZXCVBNM";
    $hold = "";
    foreach( $alpha as $val ){
        $hold .= "<input type='button' value='$val'>";
    }
    echo $hold;

