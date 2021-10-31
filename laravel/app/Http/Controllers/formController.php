<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class formController extends Controller
{
    //
    function getData(Request $req){
       $req->validate([
           'username'=>'required | max:20',
           'password'=>'required |min:6'
       ]);
        return $req;
    }
}
