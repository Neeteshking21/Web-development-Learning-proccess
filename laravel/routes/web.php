<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\test;
use App\Http\Controllers\Userscontroller;
use App\Http\Controllers\formController;
use App\Http\Controllers\database1;
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
// Route::get('/start', function () {
//     return view('start');
// });
Route::get('/start/{name}', function ($name) {
    return view('start', ['name' => $name]);
});

// Example of Controllers
Route::get('/controller/{user}', [test::class, 'name']);
Route::view('/about', 'about');

//

Route::get('/users', [Userscontroller::class, 'viewLoad']);

/*
/-----------------------------------------------------------------
/ Login Form
/-----------------------------------------------------------------
*/
Route::post('formlogin', [formController::class, 'getData']);
Route::view('form', 'form');
Route::view('noaccess', 'noaccess');

Route::group(['middleware' => ['protectedPage']], function () {
    Route::view('start', 'start');
});

Route::view('routeCheck', 'routeCheck')->middleware('routeProtectedPage');
Route::get('db', [database1::class, 'mydatabase']);

// Route:post('formlogin', [formController::class, 'getData']);
