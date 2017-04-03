var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongooseDashboard');
mongoose.Promise = global.Promise;

var OwlSchema = new mongoose.Schema({
    name: String,
    color: String
})
mongoose.model('Owl', OwlSchema);
var Owl = mongoose.model('Owl')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// pulling up index
app.get('/', function(req, res) {
    Owl.find({}, function(err, owls){
        if(err){
            console.log(err)};
        res.render('index', {owls:owls});
    })
})

//pulling up the add
app.get('/add', function(req,res){
    res.render('add')
})

//posting from add to index
app.post('/addNew', function(req, res) {
    console.log("POST DATA", req.body);
    var owls = new Owl ({name:req.body.name, color:req.body.color}, {versionKey: false});
    owls.save(function(err){
        if (err){
            console.log('something went wrong');
        }
    })
    res.redirect('/');
})
//showing specific owl
app.get('/:id', function(req, res){
    Owl.findOne({_id:req.params.id}, function(err, owls){
        if (err){console.log(err);}
        res.render('show', {owls});
    })
})
//editing specific owl
app.get('/:id/edit', function(req, res){
    Owl.findOne({_id:req.params.id}, function(err, owls){
        if(err){console.log(err);}
        res.render('edit', {owls})
    })
})
//updating specific owl
app.post('/:id', function (req, res){
    Owl.update({_id:req.params.id}, req.body, function(err, owls){
        if (err){console.log(err);}
        res.redirect('/');
    })
})
//deleting owl
app.post('/:id/delete', function(req, res){
    Owl.remove({_id:req.params.id}, function(err, owls){
        if(err){ console.log(err);}
        res.redirect('/')
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(7050, function() {
    console.log("listening on port 7050");
})
