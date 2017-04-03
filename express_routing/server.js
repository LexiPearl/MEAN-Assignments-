var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.render('index', {title:"My Express Project"});
    console.log("It worked!")
});

app.post('/users', function(req,res){
    console.log("POST DATA \n\n", req.body)
    res.redirect('/');
});

app.get('/users/:id', function (req,res){
    console.log("The user id request is: ", req.params.id);
    res.send("You requested the user with id: " +req.params.id);
});

app.listen(8000, function(){
    console.log("listening on 8000");
})
