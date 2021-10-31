<x-header data="Form Page"/>
<div className="form_container">
    <h1>Log in Now :)</h1>
    
    <form method="POST" action="formlogin" >
        @csrf
        <input type="text" name="username" placeholder="username" /> <br/><br/>
        <input type="password" name="password" placeholder="password" /> <br/><br/>
        <input type="submit" value="Submit" /> <br/><br/>
        
            @if($errors)
                @foreach($errors->all() as $error)
                <li style='color:red' >{{$error}}</li>
                @endforeach
            @endif
    </form>
</div>