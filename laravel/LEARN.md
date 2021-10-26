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
Route::METHOD(uri, view)
 ```
 Small Syntax

 ```
 Route::view(url, pageName)
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

