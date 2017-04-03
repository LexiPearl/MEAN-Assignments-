var express = require("express");

var app = express();

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');

app.get('/', function(request, response){
    response.send("Hello Express! Now go to /users or /main.html.");
    console.log("It worked!")
})

app.get("/users", function (request, response){
    var usersArray=[
        {name:"Harry", email:"hpotter@hogwarts.com"},
        {name:"Ron", email:"rweasley@hogwarts.com"},
        {name:"Hermione", email:"hgranger@hogwarts.com"}
    ];
    response.render('users', {users:usersArray});
})

app.use(express.static(__dirname + "/static"));

app.listen(8000, function(){
    console.log("listening on 8000");
})
