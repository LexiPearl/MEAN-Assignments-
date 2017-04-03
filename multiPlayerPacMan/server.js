var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var server = app.listen(8000, function(){
    console.log("listening on port 8000");
});
var route = require('./routes/index.js')(app, server);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.cookieParser());
app.use(express.session({secret:'monkey'}));
