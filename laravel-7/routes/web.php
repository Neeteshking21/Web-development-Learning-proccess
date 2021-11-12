<?php

use Illuminate\Support\Facades\Route;

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
})->middleware('ageCheck');

// Route::get('/post/{id}/{cars}', function($id, $cars){
//     return "The employee ".$id ." has ".$cars . " cars";
// });

Route::get('/post/laravel7/example', array( 'as'=>'admin.home' , function(){
    $url = route('admin.home');
    return "the url is " .$url; 
}));

Route::permanentRedirect('here', '/', 301);

Route::get('optionalParameters/{name?}', function($name = 'Neetesh'){
    return "optional Parameters => ".$name;
});

Route::get("globalConstraints/{id?}", function($id =0){
    return "globalConstraintsglobalConstraints ".$id;
});

Route::get('/unauth', function(){
    return view('unauth');
});