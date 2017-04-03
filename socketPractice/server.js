var express = require("express");
var path = require("path");
var app = express();
var server = app.listen(8000, function(){
    console.log("listening on port 8000");
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log("We are using sockets!");
    console.log(socket.id);
    socket.on("button_clicked", function (data){
        console.log('Someone clicked a button!  Reason: ' + data.reason);
        socket.emit('server_response', {response: "sockets are the best!"});
    })
});

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
});
