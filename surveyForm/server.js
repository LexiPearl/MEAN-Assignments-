var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render("index");
    console.log("hello")
	})

app.post('/results', function(req, res) {
	submitted_info = {
		name: req.body.name,
		dojo_location: req.body.dojo_location,
		favorite_language: req.body.favorite_language,
		comment: req.body.comment
		};
	 	res.render("results",{user_data: submitted_info});
	});

app.listen(8000, function() {
 console.log("listening on port 8000!");
})
