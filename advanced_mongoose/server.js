
//dependencies.js

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');


//models--> models.js--
//module.exports=function(mongoose){
//    all models
//}
//require('./models.js')(mongoose) or var models=require('models.js) //models(mongoose)
//var User= mongoose.model('User')
//var Valentine= mongoose.model('Valentine')
//move ^^delete mongoose if you require mongoose in models


var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/demo');

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 3},
	email: {type: String, required: true},
	gender: String,
}, {timestamps: true})

mongoose.model('User', UserSchema);
var User = mongoose.model('User');
//move ^^to routes if you require mongoose in routes

var ValentineSchema = new mongoose.Schema({
	message: String,
	_chaser: {type: Schema.Types.ObjectId, ref: 'User'},
	_chasee: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true})

mongoose.model('Valentine', ValentineSchema);
var Valentine = mongoose.model('Valentine');
//move ^^to routes if you require mongoose in routes



//configs-->configs.js--
//module-exports=function(app, express, bodyParser, path){
//    apps
//}
//require('./config.js')(app, express, bodyParser, path)

//move ^^delte express/bodyParser and path if you require express, bodyParser and path in config
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


//routes-->routes.js--
//module.exports=function(app, User, Valentine){}
require ('./routes.js')(app, User, Valentine)
app.get('/', function(req, res){
	User.find({}, function(err, users){
		console.log('users', users)
		Valentine.find({}).populate('_chaser _chasee').exec(function(err, valentines){
			console.log(valentines)	
			res.render('index', {users: users, valentines: valentines});
		})		
	})
})

app.post('/users', function(req, res){
	console.log('do something', req.body)
	var user = new User({name: req.body.name, email: req.body.email, gender: req.body.gender})
	user.save(function(err){
		if(err){
			console.log('we have errors', err);
		}
	})
	res.redirect('/');
})

app.post('/valentine', function(req, res){
	var valentine = new Valentine({message: req.body.message, _chaser: req.body.chaser, _chasee: req.body.chasee})
	valentine.save(function(err){
		if(err){
			console.log("it wasn't meant to be", err)
		}
	})
	res.redirect('/')
})

app.listen(8000, function() {
    console.log("listening on port 8000");
})