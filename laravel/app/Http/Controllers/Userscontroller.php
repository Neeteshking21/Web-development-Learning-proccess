<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Userscontroller extends Controller
{
    //
    function viewLoad(){
        return view('users', ['users'=>['Neetesh', 'Vashisth']]);
    }
}
