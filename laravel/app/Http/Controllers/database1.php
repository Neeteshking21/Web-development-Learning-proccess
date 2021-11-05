<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class database1 extends Controller
{
    //
    function mydatabase(){
        return DB::select("select * from user");
    }
}
