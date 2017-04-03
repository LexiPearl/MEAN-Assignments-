
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotingDojo');
mongoose.Promise = global.Promise;

var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String,
}, {timestamps: true})
mongoose.model('Quote', QuoteSchema);
var Quote = mongoose.model('Quote')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//pulling up the index
app.get('/', function(req,res){
    res.render('index')
})

//posting from index to quotes
app.post('/addQuote', function(req, res) {
    console.log("POST DATA", req.body);
    var quotes = new Quote ({name:req.body.name, quote:req.body.quote});
    quotes.save(function(err){
        if (err){
            console.log('something went wrong');
        }
    })
    res.redirect('/quotes');
})

// pulling up quotes
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err, quotes){
        if(err){
            console.log(err)};
            res.render('quotes', {quotes:quotes});
        })
    })

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
