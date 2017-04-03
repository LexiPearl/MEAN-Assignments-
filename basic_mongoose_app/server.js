
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
var mongoose = require('mongoose');
var Schema= mongoose.Schema;
mongoose.connect('mongodb://localhost/basic_mongoose_app');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));

// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));

// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

// Routes
// Root Request
app.get('/', function(req, res) {
    User.find({}, function(err, users){
        console.log('users', users)
        res.render('index', {users:users});
    })
})

// Add User Request
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User ({name:req.body.name, age:req.body.age}, {versionKey: false});
    user.save(function(err){
        if (err){
            console.log('something went wrong');
        }
    })
    res.redirect('/');
})

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
