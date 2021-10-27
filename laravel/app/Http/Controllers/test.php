<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class test extends Controller
{
    function name($user){
        echo "{$user} Hello from the controller";
        return ['name'=>$user, 'Age'=>'18'];
    }
}
