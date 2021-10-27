<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\test;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


//  Emapmle of View
Route::get('/start/{name}', function ($name) {
    return view('start', ['name'=>$name]);
});


// Example of Controllers
Route::get('/controller/{user}', [test::class , 'name']);