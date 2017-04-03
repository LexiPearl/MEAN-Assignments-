var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

mongoose.connect('mongodb://localhost/nameAgeHouse');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    house: String,
})
mongoose.model("User", UserSchema)
var User = mongoose.model('User')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    User.find({}, function(err, users){
        console.log('users', users)
        res.render('index', {users:users});
    })
})

app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, age: req.body.age, house: req.body.house});
    user.save(function(err){
        if(err){
            console.log('something went wrong');
        } else {
            console.log('successfuly added a user!');
            res.redirect('/');
        }
    })
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})
