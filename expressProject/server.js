var express = require ('express');
var app = express();
var ejs = require('ejs')
var bp = require('body-parser')
// var http = require ("http")

app.set('views', __dirname + '/views');
app.set ('view engine', 'ejs');
app.use(bp.urlencoded({extended:true}))
app.use(express.static(__dirname + "/static"));
//connection mongoose string=>'/some mongo database'
//tables are called collections
//rows are caleld documents
//models are still in mongo

var Samurai=Mongoose.models
// db.samurai.find()
// #index
app.get('/samurais/index', function(req, res) {
    //query db to get all samurais
    var samurais= SElECT * FROM samurais
    //var samurais = Samurai.find()
    //Samurai.find({}, cuntion(err, samurais))
    //     if (err){
    //         return false
    //     }
    //     else{
    //         res.render("index", {samurais:samurais});
    //         }
	// })
// http.createServer(function (req,res){
//     console.log(req)
// })

// #show
app.post('/samurais/:id', function(req,res){
    // var id = req.params.id
    var samurai = SELECT * FROM samurais WHERE id = request.params.id
    // var samurai=Samurai.find({_id:req.params.id})
    res.render("show", {id:samurai})
})

// # create
app.post('/samurais/create', function(req, res){
    req.body
    var samurai= INSERT INTO samurais('name', 'gender') VALUES (req.body.name, req.body.gender)
    //var samurai = Samurai.create(name:req.body.name, gender:req.body.gender)
    res.redirect('/samurais/index')
})

// #update
app.post('/samurais/update/:id', function(req, res)){
    var update=UPDATE samurais SET ('name'= req.body.name, 'gender'=req.body.gender) WHERE id= req.params.id
    //var samurai= Samurai.findById(req.body.id)
    //samurai.name= req.body.name
    //samurai.gender=req.body.gender
    //samurai.save()
    //or
    //Samurai.findByIDAndUpdate(req.params.id, {$set:{name=req.body.name, gender=req.body.gender}})
}

// #delete
app.post('/samurais/delete/:id', function(req, res)){
    var delete=DELETE from samurais WHERE id=req.params.id
    // Samurai.remove({_id:req.params.id})
}

// #new
app.get('/samurais/new', function(req, res)){
    res.render("edit",)
}

// #edit
app.get('/samurais/edit/:id', function(req, res)){

}

// ---implied you are updating
// app.patch.put('/samurais/id')

app.listen(7000, function(){
    console.log("lasdkfjsdlf")
})
