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

## Use Conditions  
* For use PHP in .blade.php view, you have to use ``` {{ }} ``` <br/>
* For use if 
  ```       
  @if(condition)
    code......
  @endif  
  ```
* For use if/else consition
  ```
  @if(condition)
    code..........
  @else
    code .....
  ```
* For use nested if/else consition
  ```
  @if(condition 1)
    code..........
  @elseif(condition n)
    code .....
  @else
    code .....
  ```

<br/>

## Use Loops
Use For Loop
```
@for(initialization ; condition ; increment/decrement)
    code .....
@endfor
```
Use for each loop condition
```
@foreach(array as ele)
 code ... 
@endforeach
```
<br/>

## Include View inside a View

```
@include('view_name')
```

## Use javascript in blade.php
```
@csrf
<script>
  let data = @json($user)   // here $user is an php variable
  console.log(data)
</script>
```

<br/>

## Use Internal CSS

```
<style>
  indicator{
    property 1:value 1;
            .
            .
            .
    property N:value N;
  }
</style>
```

<br/>

# Laravel Components 🔥
<p>The components are basically a peace of code that can be re-use easily. <br/>Almost all the modern systems are composed of self-contained, independent, reusable small entities. Each of these entities has a specific functionality provided to the system as a whole. The Laravel components are a small entity with an interface that is well defined. These serve as the building block for a large software system. All the related data is encapsulated in the reusable unit.</p>

CMD

```
php artisan make:component <name>
```
Every componets will have two files view and php.<br/>

Directory of view <br/>
<i> Project 👉 app 👉 resources 👉 views 👉 components </i><br/><br/>
Directory of php<br/>
<i> Project 👉 app 👉 View 👉 Components </i><br/><br/>

