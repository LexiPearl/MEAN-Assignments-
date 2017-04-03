var session_info = [];
var messages = [];

var is_user = function(session_id){
	var current_user = false;
	var number_of_users = session_info.length;

	if(number_of_users > 0){
		for(var ctr = 0; ctr < number_of_users; ctr++){
			if(session_info[ctr].id == session_id){
				current_user = session_info[ctr];
				break;
			}
			else{
				current_user = false;
			}
		}
	}
	return current_user;
}

module.exports = function route(app){
	app.get("/", function(req, res){
		res.render("index", {title: "Multiplayer PacMan"});
	});
	app.io.route("page_load", function(req){
		req.io.emit("load_messages", {messages: messages});
		if(is_user(req.session.id) === false){
			req.io.emit("get_user_name", { players_count: session_info.length });
		}
	})
	app.io.route("new_user", function(req){
		session_info.push({id: req.session.id, name: req.data.name});

		req.io.emit("new_user_added", { players_count: session_info.length, player_info: is_user(req.session.id) })
	})
	app.io.route("new_message", function(req){
		var user = is_user(req.session.id);
		if(user){
			messages.push({ name: user.name, message: req.data.message });
			app.io.broadcast("post_new_message", { new_message: req.data.message, user: user.name });
		}
	})

	app.io.route("move_pac1", function(data){
		app.io.broadcast("all_move_pac1", data.data)
	})

	app.io.route("move_pac2", function(data){
		app.io.broadcast("all_move_pac2", data.data)
	})

	app.io.route("update_score", function(data){
		app.io.broadcast("execute_update_score", data.data)
	})
}
