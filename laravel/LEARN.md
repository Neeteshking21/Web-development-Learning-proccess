# Laravel🔥
<p>Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony.</p><br/>

## MVC 🚀
* Model  :- Deals with database
* View :- Deals with HTML
* Controllers :- The middle-man

# Routing 🚀
<p>Mapping our laravel page with specific URL</p>

### steps
``` 
project -> routes -> web.php
``` 
Create a route
```
Route::METHOD(uri, controller)
 ```
 Small Syntax

 ```
 Route::view(url, controller)
 ```
 Pass Data with Routing  ex:
 ```
 Route::get('/{name}', function(){
     echo $name;
     return view('start', ['name'=>$name]); // you can get these name value in start view
 });
 ```
 <br/>

 # Redirect 🚀

Syntax -> redirect("view") -

```
Route::get('/', function(){
     return redirect("about");
 });
```
<br/>

# Controller 🔥
<p>Controller is central Unit of MVC frameworks.</p>
<p>Controller fetches the data from model and send to View.</p>
<p>All logical and Routers tasks are done in Controller.</p>
Directory<br/>
<i>Project 👉 app 👉 Http 👉 Controllers</i>
<br/>
<br/>
<b>Syntax :</b>

```
php artisan make:controller <controller_name>
```
<br/>

# View 🔥

<p>View is to show somthing to User as HTML page. The extension of view  files should be like < file_name >.blade.php. Here blade is an template engine which is provided by laravel.</p>

<b>Directory</b><br/>
<i> Project 👉 app 👉 resources 👉 views </i>

<br/>
