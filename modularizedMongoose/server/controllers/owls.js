var mongoose= require('mongoose');
var Owl = mongoose.model('Owl')

module.exports={
    index:function(req,res){
        Owl.find({}, function(err, owls){
            if(err){
                console.log(err)};
            res.render('index', {owls:owls});
        })
    },

    add:function(req,res){
        console.log("POST DATA", req.body);
        var owls = new Owl ({name:req.body.name, color:req.body.color}, {versionKey: false});
        owls.save(function(err){
            if (err){
                console.log('something went wrong');
            }
        })
        res.redirect('/');
    },

    show: function(req,res){
        Owl.findOne({_id:req.params.id}, function(err, owls){
            if (err){console.log(err);}
            res.render('show', {owls});
        })
    },

    edit: function(req, res){
        Owl.findOne({_id:req.params.id}, function(err, owls){
            if(err){console.log(err);}
            res.render('edit', {owls})
        })
    },

    update: function(req,res){
        Owl.update({_id:req.params.id}, req.body, function(err, owls){
            if (err){console.log(err);}
            res.redirect('/');
        })
    },

    delete: function(req, res){
        Owl.remove({_id:req.params.id}, function(err, owls){
            if(err){ console.log(err);}
            res.redirect('/')
        })
    }
}
