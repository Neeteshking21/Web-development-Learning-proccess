<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .spanItems{
            background-color:#4e9bed;
            color:white;
            padding:4px;
            border-radius: 10px;
        }
        .spanItems:hover{
            transition: all 0.3s;
            background-color:#4a83be;
            cursor: pointer;
        }
    </style>
</head>
<body>
    @include('welcome')
    <h1>UsersRouter</h1>
    {{count($users)}}
    {{implode(" ",$users)}}

    @for($i=0; $i<=10; $i++)
    <span class="spanItems">{{$i*$i}}</span> &nbsp &nbsp;
    @endfor

    @csrf
    <script>
        let data = @json($users)
        console.log(data)
    </script>

</body>
</html>