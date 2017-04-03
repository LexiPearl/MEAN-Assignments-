module.exports = function Route(app, server){
    var io = require('socket.io').listen(server);
    var number = 0;
    app.get('/', function (req, res){
        res.render("index")
    })

    io.sockets.on('connection', function(socket){
        console.log("We are using sockets!");
        socket.on("button_click", function (data){
            number += 1;
            io.emit('updated_message', {response: number});
        })
        socket.on("reset", function(data){
            number = 0;
            io.emit('reset', {response: number});
        })
    })
};
