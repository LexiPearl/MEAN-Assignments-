var express = require("express");

var app = express();

app.get('/', function(request, response){
    response.send("Hello Express!");
    console.log("It worked!")
})

app.listen(8000, function(){
    console.log("listening on 8000");
})
