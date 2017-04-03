var elders = require('../controllers/elders.js');
module.exports=function(app){
// pulling up index with all those born in 1955
app.get('/', elders.index)

//adding a new elder to the database
app.get('/new/:name', elders.new)

//showing specific elder
app.get('/:name', elders.show)

//deleting specific elder
app.get('/remove/:name', elders.delete)
}
