var owls = require('../controllers/owls.js');
module.exports=function(app){
// pulling up index
app.get('/',owls.index)

//pulling up the add
app.get('/add', function(req,res){
    res.render('add')
})

//posting from add to index
app.post('/addNew', owls.add)

//showing specific owl
app.get('/:id', owls.show)

//editing specific owl
app.get('/:id/edit', owls.edit)

//updating specific owl
app.post('/:id', owls.update)

//deleting owl
app.post('/:id/delete', owls.delete)
}
