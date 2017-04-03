
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/messageBoard');
mongoose.Promise = global.Promise;

var MessageSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength:2},
    message: {type:String, required:true, maxlength:100},
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true})

MessageSchema.path('name').required(true, 'Name cannot be blank');
MessageSchema.path('message').required(true, 'Message cannot be blank');

var CommentSchema = new mongoose.Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    comment: { type: String, required: true, maxlength: 100},
    name: {type:String, required:true, minlength:2},
}, {timestamps: true });

CommentSchema.path('name').required(true, 'Name cannot be blank');
CommentSchema.path('comment').required(true, 'Comment cannot be blank');

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);
var Message = mongoose.model('Message')
var Comment = mongoose.model('Comment')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// pulling up index
app.get('/', function(req, res) {
    Message.find({}).populate('_comments').exec(function(err, messages){
        res.render('index', {messages:messages, err:err});
    });
});

//posting message to index
app.post('/addMessage', function(req, res) {
    console.log("POST DATA", req.body);
    var messages = new Message ({name:req.body.name, message:req.body.message});
    messages.save(function(err){
        if (err){
            console.log('something went wrong');
            res.render('index', {err: err, messages:[]});
        }
        else{
            console.log('added');
            res.redirect('/');
        }
    })
})

//adding comment to specific message
app.post('/addComment/:id', function (req, res){
    console.log("this is the id", req.params.id)
   Message.findOne({_id: req.params.id}, function(err, messages){
       var newComment = new Comment({name:req.body.name, comment: req.body.comment});
    //    console.log(newComment)
       newComment._message = req.params.id;
    //    console.log(newComment)
       Message.update({_id:req.params.id}, {$push: {"_comments":newComment}}, function(err){
       });
       newComment.save(function(err){
            if(err) {
                 console.log('Error:', err);
                 res.render('index', {err:err, messages:[]})
            } else {
                console.log('added')
                 res.redirect('/');
                }
            });
        });
   });

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
